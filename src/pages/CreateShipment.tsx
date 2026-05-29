import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { saveUserShipment, generateTrackingCode } from '@/lib/userShipments';
import type { Shipment, ShipmentCategory } from '@/data/shipments';
import { Package, Mail, ArrowLeft } from 'lucide-react';

const CreateShipment = () => {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [category, setCategory] = useState<ShipmentCategory>('product');
  const [form, setForm] = useState({
    productName: '',
    senderName: '',
    senderCity: '',
    senderCountry: '',
    recipientName: '',
    recipientCity: '',
    recipientCountry: '',
    weight: '',
    dimensions: '',
    estimatedDelivery: '',
    priority: 'standard' as 'standard' | 'express' | 'overnight',
    // document-only
    documentType: 'letter',
    envelopeSize: 'medium',
    confidentiality: 'standard',
    dispatchDate: '',
    pageCount: '',
    notes: '',
    // pricing
    shipping: '',
    subtotal: '',
    // image protection
    viewPassword: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredBase = ['productName', 'senderName', 'recipientName', 'estimatedDelivery'];
    for (const k of requiredBase) {
      if (!(form as any)[k]) {
        toast({ title: 'Missing fields', description: `Please fill in all required fields.`, variant: 'destructive' });
        return;
      }
    }

    // Upload any selected files to cloud storage
    let uploadedUrls: string[] = [];
    if (files.length > 0) {
      setUploading(true);
      try {
        for (const file of files) {
          const ext = file.name.split('.').pop() || 'bin';
          const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
          const { error } = await supabase.storage.from('shipment-files').upload(path, file, {
            cacheControl: '3600',
            upsert: false,
          });
          if (error) throw error;
          const { data } = supabase.storage.from('shipment-files').getPublicUrl(path);
          uploadedUrls.push(data.publicUrl);
        }
      } catch (err: any) {
        setUploading(false);
        toast({ title: 'Upload failed', description: err.message || 'Could not upload files', variant: 'destructive' });
        return;
      }
      setUploading(false);
    }

    const shipping = parseFloat(form.shipping || '0') || 0;
    const subtotal = category === 'product' ? parseFloat(form.subtotal || '0') || 0 : 0;
    const trackingCode = generateTrackingCode(category === 'document' ? 'DOC' : 'PKG');
    const today = new Date().toISOString().split('T')[0];

    const shipment: Shipment = {
      trackingCode,
      category,
      productName: form.productName,
      productImage: uploadedUrls[0] || '',
      productImages: uploadedUrls.length > 0 ? uploadedUrls : undefined,
      viewPassword: form.viewPassword || undefined,
      status: 'processing',
      sender: {
        name: form.senderName,
        address: form.senderCity,
        city: form.senderCity,
        country: form.senderCountry,
      },
      recipient: {
        name: form.recipientName,
        address: form.recipientCity,
        city: form.recipientCity,
        country: form.recipientCountry,
      },
      weight: form.weight || (category === 'document' ? '0.2 kg' : 'N/A'),
      dimensions: form.dimensions || (category === 'document' ? 'Standard Envelope' : 'N/A'),
      currentLocation: {
        city: form.senderCity || 'Origin',
        country: form.senderCountry || '',
        lat: 0,
        lng: 0,
      },
      estimatedDelivery: form.estimatedDelivery,
      pricing: {
        subtotal,
        shipping,
        insurance: 0,
        customDuties: 0,
        taxes: 0,
        total: subtotal + shipping,
        currency: 'USD',
      },
      insuranceValue: subtotal,
      servicePriority: form.priority,
      checkpoints: [
        {
          id: '1',
          date: today,
          location: `${form.senderCity}, ${form.senderCountry}`,
          status: 'current',
          description: 'Shipment created and pending pickup',
          lat: 0,
          lng: 0,
        },
        {
          id: '2',
          date: form.estimatedDelivery,
          location: `${form.recipientCity}, ${form.recipientCountry}`,
          status: 'pending',
          description: 'Scheduled for delivery to recipient',
          lat: 0,
          lng: 0,
        },
      ],
      ...(category === 'document'
        ? {
            documentDetails: {
              documentType: form.documentType as any,
              envelopeSize: form.envelopeSize as any,
              confidentiality: form.confidentiality as any,
              dispatchDate: form.dispatchDate || today,
              pageCount: form.pageCount ? parseInt(form.pageCount, 10) : undefined,
              notes: form.notes || undefined,
            },
          }
        : {}),
    };

    saveUserShipment(shipment);
    toast({
      title: 'Shipment Created',
      description: `Tracking code: ${trackingCode}`,
    });
    navigate('/tracking');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>Create New Shipment</CardTitle>
            <CardDescription>Track a physical product or a mailed document.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category selector */}
              <div className="space-y-2">
                <Label>Shipment Type</Label>
                <RadioGroup
                  value={category}
                  onValueChange={(v) => setCategory(v as ShipmentCategory)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <label
                    htmlFor="cat-product"
                    className={`flex items-center gap-3 rounded-lg border p-4 cursor-pointer transition-colors ${
                      category === 'product' ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
                    }`}
                  >
                    <RadioGroupItem value="product" id="cat-product" />
                    <Package className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Product Shipment</p>
                      <p className="text-xs text-muted-foreground">Goods, gadgets, vehicles</p>
                    </div>
                  </label>
                  <label
                    htmlFor="cat-document"
                    className={`flex items-center gap-3 rounded-lg border p-4 cursor-pointer transition-colors ${
                      category === 'document' ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
                    }`}
                  >
                    <RadioGroupItem value="document" id="cat-document" />
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Document / Mail Shipment</p>
                      <p className="text-xs text-muted-foreground">Letters, checks, passports</p>
                    </div>
                  </label>
                </RadioGroup>
              </div>

              <Separator />

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="productName">
                    {category === 'document' ? 'Document Title *' : 'Product Name *'}
                  </Label>
                  <Input
                    id="productName"
                    value={form.productName}
                    onChange={(e) => update('productName', e.target.value)}
                    placeholder={category === 'document' ? 'e.g. Signed Contract Package' : 'e.g. iPhone 17 Pro'}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="senderName">Sender Name *</Label>
                  <Input id="senderName" value={form.senderName} onChange={(e) => update('senderName', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipientName">Recipient Name *</Label>
                  <Input id="recipientName" value={form.recipientName} onChange={(e) => update('recipientName', e.target.value)} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="senderCity">From (City, Country)</Label>
                  <div className="flex gap-2">
                    <Input placeholder="City" value={form.senderCity} onChange={(e) => update('senderCity', e.target.value)} />
                    <Input placeholder="Country" value={form.senderCountry} onChange={(e) => update('senderCountry', e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipientCity">To (City, Country)</Label>
                  <div className="flex gap-2">
                    <Input placeholder="City" value={form.recipientCity} onChange={(e) => update('recipientCity', e.target.value)} />
                    <Input placeholder="Country" value={form.recipientCountry} onChange={(e) => update('recipientCountry', e.target.value)} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">Weight</Label>
                  <Input id="weight" value={form.weight} onChange={(e) => update('weight', e.target.value)} placeholder={category === 'document' ? '0.2 kg' : '1.5 kg'} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dimensions">Dimensions</Label>
                  <Input id="dimensions" value={form.dimensions} onChange={(e) => update('dimensions', e.target.value)} placeholder={category === 'document' ? 'A4 Envelope' : '30cm × 20cm × 10cm'} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estimatedDelivery">Expected Delivery *</Label>
                  <Input id="estimatedDelivery" type="date" value={form.estimatedDelivery} onChange={(e) => update('estimatedDelivery', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Service Priority</Label>
                  <Select value={form.priority} onValueChange={(v) => update('priority', v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="express">Express</SelectItem>
                      <SelectItem value="overnight">Overnight</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {category === 'document' && (
                <>
                  <Separator />
                  <h3 className="font-semibold flex items-center gap-2"><Mail className="h-4 w-4 text-primary" />Document Details</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Document Type</Label>
                      <Select value={form.documentType} onValueChange={(v) => update('documentType', v)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="check">Check</SelectItem>
                          <SelectItem value="envelope">Envelope</SelectItem>
                          <SelectItem value="letter">Letter</SelectItem>
                          <SelectItem value="certificate">Certificate</SelectItem>
                          <SelectItem value="passport">Passport</SelectItem>
                          <SelectItem value="legal-document">Legal Document</SelectItem>
                          <SelectItem value="confidential-file">Confidential File</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Envelope / Package Size</Label>
                      <Select value={form.envelopeSize} onValueChange={(v) => update('envelopeSize', v)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                          <SelectItem value="flat-pack">Flat Pack</SelectItem>
                          <SelectItem value="tube">Tube</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Confidentiality Level</Label>
                      <Select value={form.confidentiality} onValueChange={(v) => update('confidentiality', v)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="confidential">Confidential</SelectItem>
                          <SelectItem value="highly-confidential">Highly Confidential</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dispatchDate">Dispatch Date</Label>
                      <Input id="dispatchDate" type="date" value={form.dispatchDate} onChange={(e) => update('dispatchDate', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pageCount">Page Count (optional)</Label>
                      <Input id="pageCount" type="number" min="1" value={form.pageCount} onChange={(e) => update('pageCount', e.target.value)} />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="notes">Handling Notes</Label>
                      <Textarea id="notes" value={form.notes} onChange={(e) => update('notes', e.target.value)} placeholder="e.g. Signature required upon delivery" />
                    </div>
                  </div>
                </>
              )}

              <Separator />

              <div className="grid sm:grid-cols-2 gap-4">
                {category === 'product' && (
                  <div className="space-y-2">
                    <Label htmlFor="subtotal">Declared Value (USD)</Label>
                    <Input id="subtotal" type="number" min="0" step="0.01" value={form.subtotal} onChange={(e) => update('subtotal', e.target.value)} />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="shipping">Shipping Fee (USD)</Label>
                  <Input id="shipping" type="number" min="0" step="0.01" value={form.shipping} onChange={(e) => update('shipping', e.target.value)} />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Create Shipment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateShipment;
