import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { type Shipment } from '@/data/shipments';
import ShipmentMap from './ShipmentMap';
import TimelineProgress from './TimelineProgress';
import { Package, User, MapPin, Weight, Ruler, Calendar, DollarSign, Shield, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ShipmentDetailsProps {
  shipment: Shipment;
}

const ShipmentDetails = ({ shipment }: ShipmentDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = shipment.productImages || [shipment.productImage];
  
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
    <div className="space-y-6">
      {/* Header Card */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-6">
              {/* Image Gallery */}
              <div className="relative">
                <img
                  src={images[currentImageIndex]}
                  alt={shipment.productName}
                  className="w-48 h-36 rounded-lg object-cover"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <div className="flex-1">
                <CardTitle className="text-2xl">{shipment.productName}</CardTitle>
                <p className="text-sm font-mono text-primary mt-1">
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
                  <p className="text-xs text-muted-foreground">
                    {getDaysUntilDelivery() > 0 
                      ? `${getDaysUntilDelivery()} days until delivery`
                      : shipment.status === 'delivered' 
                        ? 'Delivered successfully' 
                        : 'Delivery date has passed'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Current Location & ETA */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Current Location</p>
                <p className="text-lg font-semibold">
                  {shipment.currentLocation.city}, {shipment.currentLocation.country}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <Calendar className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm font-medium">Estimated Delivery</p>
                <p className="text-lg font-semibold">
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

      {/* Pricing Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="h-5 w-5 mr-2" />
            Cost Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Product Value</span>
                <span className="font-medium">{shipment.pricing.currency} {shipment.pricing.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Shipping</span>
                <span className="font-medium">{shipment.pricing.currency} {shipment.pricing.shipping.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Insurance</span>
                <span className="font-medium">{shipment.pricing.currency} {shipment.pricing.insurance.toLocaleString()}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Custom Duties</span>
                <span className="font-medium">{shipment.pricing.currency} {shipment.pricing.customDuties.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Taxes & Fees</span>
                <span className="font-medium">{shipment.pricing.currency} {shipment.pricing.taxes.toLocaleString()}</span>
              </div>
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
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Insured Value</span>
            </div>
            <span>{shipment.pricing.currency} {shipment.insuranceValue.toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Details Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Sender & Recipient */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Sender & Recipient
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium text-sm text-muted-foreground mb-1">FROM</p>
              <p className="font-semibold">{shipment.sender.name}</p>
              <p className="text-sm text-muted-foreground">
                {shipment.sender.address}
              </p>
              <p className="text-sm text-muted-foreground">
                {shipment.sender.city}, {shipment.sender.country}
              </p>
            </div>
            
            <Separator />
            
            <div>
              <p className="font-medium text-sm text-muted-foreground mb-1">TO</p>
              <p className="font-semibold">{shipment.recipient.name}</p>
              <p className="text-sm text-muted-foreground">
                {shipment.recipient.address}
              </p>
              <p className="text-sm text-muted-foreground">
                {shipment.recipient.city}, {shipment.recipient.country}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Package Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="h-5 w-5 mr-2" />
              Package Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Weight className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Weight</span>
              </div>
              <span className="font-medium">{shipment.weight}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Ruler className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Dimensions</span>
              </div>
              <span className="font-medium">{shipment.dimensions}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Service Priority</span>
              </div>
              <Badge variant="outline" className="capitalize">
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