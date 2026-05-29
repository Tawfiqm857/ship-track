import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { type Shipment } from '@/data/shipments';
import ShipmentMap from './ShipmentMap';
import TimelineProgress from './TimelineProgress';
import { Package, User, MapPin, Weight, Ruler, Calendar, DollarSign, Shield, Clock, ChevronLeft, ChevronRight, AlertCircle, Mail, FileText, Lock, Stamp, FileCheck, Send, Eye } from 'lucide-react';
import { useState } from 'react';

interface ShipmentDetailsProps {
  shipment: Shipment;
}

const ShipmentDetails = ({ shipment }: ShipmentDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isDocument = shipment.category === 'document';
  const images = (shipment.productImages && shipment.productImages.length > 0)
    ? shipment.productImages
    : (shipment.productImage ? [shipment.productImage] : []);
  const hasImages = images.length > 0;
  const requiresPassword = !!shipment.viewPassword;
  const [unlocked, setUnlocked] = useState(!requiresPassword);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const tryUnlock = () => {
    if (passwordInput.trim() === shipment.viewPassword) {
      setUnlocked(true);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const getDeliveryProgress = () => {
    const currentDate = new Date();
    const deliveryDate = new Date(shipment.estimatedDelivery);
    const completedCheckpoints = shipment.checkpoints.filter(cp => cp.status === 'completed').length;
    const totalCheckpoints = shipment.checkpoints.length;
    
    if (shipment.status === 'delivered') return 100;
    
    return Math.round((completedCheckpoints / totalCheckpoints) * 100);
  };
  
  const getDaysUntilDelivery = () => {
    const currentDate = new Date();
    const deliveryDate = new Date(shipment.estimatedDelivery);
    const diffTime = deliveryDate.getTime() - currentDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-success text-success-foreground';
      case 'in-transit':
        return 'bg-warning text-warning-foreground';
      case 'processing':
        return 'bg-info text-info-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'in-transit':
        return 'In Transit';
      case 'processing':
        return 'Processing';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Card */}
      <Card className="card-hover border-border/50 shadow-card">
        <CardHeader className="bg-gradient-card">
          <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 w-full">
              {/* Visual: Image gallery for products, envelope artwork for documents */}
              {isDocument ? (
                <div className="relative w-full sm:w-[280px] lg:w-[350px] h-48 sm:h-56 lg:h-64 flex-shrink-0 rounded-xl overflow-hidden border border-border/50 shadow-card bg-gradient-to-br from-primary/15 via-primary/5 to-accent/20 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--primary)/0.15) 0 10px, transparent 10px 20px)'
                  }} />
              {/* Visual: render images when available (with optional password gate), otherwise envelope artwork for documents */}
              {hasImages ? (
                <div className="relative group w-full sm:w-auto flex-shrink-0">
                  {unlocked ? (
                    <>
                      <img
                        src={images[currentImageIndex]}
                        alt={shipment.productName}
                        className="w-full sm:w-[280px] lg:w-[350px] h-48 sm:h-56 lg:h-64 rounded-xl object-cover shadow-card border border-border/50 transition-transform duration-300 group-hover:scale-105 bg-muted"
                      />
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                            {images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                  idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="w-full sm:w-[280px] lg:w-[350px] h-48 sm:h-56 lg:h-64 rounded-xl border border-border/50 shadow-card bg-gradient-to-br from-muted via-muted/60 to-primary/10 flex flex-col items-center justify-center p-4 text-center">
                      <div className="p-3 rounded-full bg-background/80 backdrop-blur shadow mb-3">
                        <Lock className="h-7 w-7 text-primary" />
                      </div>
                      <p className="text-sm font-semibold">Protected Content</p>
                      <p className="text-xs text-muted-foreground mb-3">Enter password to view images</p>
                      <div className="flex w-full max-w-[240px] gap-2">
                        <Input
                          type="password"
                          value={passwordInput}
                          onChange={(e) => setPasswordInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && tryUnlock()}
                          placeholder="Password"
                          className="h-9 text-sm"
                        />
                        <Button size="sm" onClick={tryUnlock} className="h-9 px-3">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                      {passwordError && (
                        <p className="text-xs text-destructive mt-2">{passwordError}</p>
                      )}
                    </div>
                  )}
                </div>
              ) : isDocument ? (
                <div className="relative w-full sm:w-[280px] lg:w-[350px] h-48 sm:h-56 lg:h-64 flex-shrink-0 rounded-xl overflow-hidden border border-border/50 shadow-card bg-gradient-to-br from-primary/15 via-primary/5 to-accent/20 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--primary)/0.15) 0 10px, transparent 10px 20px)'
                  }} />
                  <div className="relative flex flex-col items-center text-center px-4">
                    <div className="p-4 rounded-2xl bg-background/80 backdrop-blur shadow-lg mb-3">
                      <Mail className="h-12 w-12 sm:h-14 sm:w-14 text-primary" />
                    </div>
                    <Badge variant="outline" className="bg-background/80 backdrop-blur">
                      <Stamp className="h-3 w-3 mr-1" />
                      Documents & Mail
                    </Badge>
                  </div>
                </div>
              ) : null}
              
              <div className="flex-1 min-w-0 w-full">
                <CardTitle className="text-xl sm:text-2xl break-words">{shipment.productName}</CardTitle>
                <p className="text-xs sm:text-sm font-mono text-primary mt-1 break-all">
                  {shipment.trackingCode}
                </p>
                <Badge className={`mt-2 ${getStatusColor(shipment.status)}`}>
                  {getStatusText(shipment.status)}
                </Badge>
                
                {/* Delivery Progress */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Delivery Progress</span>
                    <span className="font-medium">{getDeliveryProgress()}%</span>
                  </div>
                  <Progress value={getDeliveryProgress()} className="h-2" />
                  {/* <p className="text-xs text-muted-foreground">
                    {getDaysUntilDelivery() > 0 
                      ? `${getDaysUntilDelivery()} days until delivery`
                      : shipment.status === 'delivered' 
                        ? 'Delivered successfully' 
                        : 'Delivery date has passed'
                    }
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Current Location & ETA */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="card-hover bg-gradient-card border-border/50">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="p-2 sm:p-3 bg-primary/10 rounded-xl shadow-sm flex-shrink-0">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Current Location</p>
                <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent break-words">
                  {shipment.currentLocation.city}, {shipment.currentLocation.country}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover bg-gradient-card border-border/50">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="p-2 sm:p-3 bg-success/10 rounded-xl shadow-sm flex-shrink-0">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-success" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Estimated Delivery</p>
                <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-success to-success bg-clip-text text-transparent">
                  {new Date(shipment.estimatedDelivery).toLocaleDateString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map */}
      <Card>
        <CardHeader>
          <CardTitle>Location Tracking</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ShipmentMap shipment={shipment} />
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Shipment Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <TimelineProgress checkpoints={shipment.checkpoints} />
        </CardContent>
      </Card>

      {/* Document Details (only for document shipments) */}
      {isDocument && shipment.documentDetails && (
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
              Document Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:gap-4 sm:grid-cols-2 p-4 sm:p-6">
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileCheck className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Document Type</p>
                <p className="text-sm font-semibold capitalize break-words">
                  {shipment.documentDetails.documentType.replace('-', ' ')}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Envelope Size</p>
                <p className="text-sm font-semibold capitalize break-words">
                  {shipment.documentDetails.envelopeSize.replace('-', ' ')}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-warning/10">
                <Lock className="h-4 w-4 text-warning" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Confidentiality</p>
                <Badge
                  variant={shipment.documentDetails.confidentiality === 'highly-confidential' ? 'destructive' : 'outline'}
                  className="capitalize mt-0.5"
                >
                  {shipment.documentDetails.confidentiality.replace('-', ' ')}
                </Badge>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Send className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Dispatch Date</p>
                <p className="text-sm font-semibold">
                  {new Date(shipment.documentDetails.dispatchDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            {shipment.documentDetails.pageCount !== undefined && (
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Page Count</p>
                  <p className="text-sm font-semibold">{shipment.documentDetails.pageCount} pages</p>
                </div>
              </div>
            )}
            {shipment.documentDetails.notes && (
              <div className="sm:col-span-2 p-3 rounded-lg bg-muted/50 border border-border/50">
                <p className="text-xs text-muted-foreground mb-1">Handling Notes</p>
                <p className="text-sm">{shipment.documentDetails.notes}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Pricing Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="h-5 w-5 mr-2" />
            Cost Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="grid gap-3 sm:gap-4">
              {shipment.pricing.subtotal > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-sm">{isDocument ? 'Declared Value' : 'Product Value'}</span>
                  <span className="font-medium">{shipment.pricing.currency} {shipment.pricing.subtotal.toLocaleString()}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                {shipment.unpaidFees?.shipping ? (
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm">Shipping</span>
                      <AlertCircle className="h-3 w-3 text-warning" />
                    </div>
                    <span className="text-xs text-warning">Unpaid - Required before delivery</span>
                  </div>
                ) : (
                  <span className="text-sm">Shipping</span>
                )}
                <span className={`font-medium ${shipment.unpaidFees?.shipping ? 'text-warning' : ''}`}>
                  {shipment.pricing.currency} {shipment.pricing.shipping.toLocaleString()}
                </span>
              </div>
              {shipment.pricing.insurance > 0 && (
                <div className="flex items-center justify-between">
                  {shipment.unpaidFees?.insurance ? (
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm">Insurance</span>
                        <AlertCircle className="h-3 w-3 text-warning" />
                      </div>
                      <span className="text-xs text-warning">Unpaid - Required before delivery</span>
                    </div>
                  ) : (
                    <span className="text-sm">Insurance</span>
                  )}
                  <span className={`font-medium ${shipment.unpaidFees?.insurance ? 'text-warning' : ''}`}>
                    {shipment.pricing.currency} {shipment.pricing.insurance.toLocaleString()}
                  </span>
                </div>
              )}
              {(shipment.pricing.customDuties > 0 || shipment.unpaidFees?.customDuties) && (
                <div className="flex items-center justify-between">
                  {shipment.unpaidFees?.customDuties ? (
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm">Custom Duties</span>
                        <AlertCircle className="h-3 w-3 text-warning" />
                      </div>
                      <span className="text-xs text-warning">Unpaid - Required before delivery</span>
                    </div>
                  ) : (
                    <span className="text-sm">Custom Duties</span>
                  )}
                  <span className={`font-medium ${shipment.unpaidFees?.customDuties ? 'text-warning' : ''}`}>
                    {shipment.pricing.currency} {shipment.pricing.customDuties.toLocaleString()}
                  </span>
                </div>
              )}
              {(shipment.pricing.taxes > 0 || shipment.unpaidFees?.taxes) && (
                <div className="flex items-center justify-between">
                  {shipment.unpaidFees?.taxes ? (
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm">Taxes & Fees</span>
                        <AlertCircle className="h-3 w-3 text-warning" />
                      </div>
                      <span className="text-xs text-warning">Unpaid - Required before delivery</span>
                    </div>
                  ) : (
                    <span className="text-sm">Taxes & Fees</span>
                  )}
                  <span className={`font-medium ${shipment.unpaidFees?.taxes ? 'text-warning' : ''}`}>
                    {shipment.pricing.currency} {shipment.pricing.taxes.toLocaleString()}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm capitalize">Priority: {shipment.servicePriority}</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between text-lg font-bold">
            <span>Total Cost</span>
            <span className="text-primary">{shipment.pricing.currency} {shipment.pricing.total.toLocaleString()}</span>
          </div>
          
          {shipment.insuranceValue > 0 && (
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Insured Value</span>
              </div>
              <span>{shipment.pricing.currency} {shipment.insuranceValue.toLocaleString()}</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Details Grid */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Sender & Recipient */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-base sm:text-lg">
              <User className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Sender & Recipient
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-4 sm:p-6">
            <div>
              <p className="font-medium text-xs sm:text-sm text-muted-foreground mb-1">FROM</p>
              <p className="font-semibold text-sm sm:text-base break-words">{shipment.sender.name}</p>
              <p className="text-xs sm:text-sm text-muted-foreground break-words">
                {shipment.sender.address}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {shipment.sender.city}, {shipment.sender.country}
              </p>
            </div>
            
            <Separator />
            
            <div>
              <p className="font-medium text-xs sm:text-sm text-muted-foreground mb-1">TO</p>
              <p className="font-semibold text-sm sm:text-base break-words">{shipment.recipient.name}</p>
              <p className="text-xs sm:text-sm text-muted-foreground break-words">
                {shipment.recipient.address}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {shipment.recipient.city}, {shipment.recipient.country}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Package Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-base sm:text-lg">
              {isDocument ? <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" /> : <Package className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />}
              {isDocument ? 'Mail Details' : 'Package Details'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Weight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-xs sm:text-sm">Weight</span>
              </div>
              <span className="font-medium text-xs sm:text-sm">{shipment.weight}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Ruler className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-xs sm:text-sm">Dimensions</span>
              </div>
              <span className="font-medium text-xs sm:text-sm break-words text-right">{shipment.dimensions}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-xs sm:text-sm">Service Priority</span>
              </div>
              <Badge variant="outline" className="capitalize text-xs">
                {shipment.servicePriority}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShipmentDetails;
