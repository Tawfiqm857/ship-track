import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { type Shipment } from '@/data/shipments';
import ShipmentMap from './ShipmentMap';
import TimelineProgress from './TimelineProgress';
import { Package, User, MapPin, Weight, Ruler, Calendar } from 'lucide-react';

interface ShipmentDetailsProps {
  shipment: Shipment;
}

const ShipmentDetails = ({ shipment }: ShipmentDetailsProps) => {
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
            <div className="flex items-start space-x-4">
              <img
                src={shipment.productImage}
                alt={shipment.productName}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <CardTitle className="text-xl">{shipment.productName}</CardTitle>
                <p className="text-sm font-mono text-primary mt-1">
                  {shipment.trackingCode}
                </p>
                <Badge className={`mt-2 ${getStatusColor(shipment.status)}`}>
                  {getStatusText(shipment.status)}
                </Badge>
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShipmentDetails;