export interface Checkpoint {
  id: string;
  date: string;
  location: string;
  status: 'completed' | 'current' | 'pending';
  description: string;
  lat: number;
  lng: number;
}

export interface Shipment {
  trackingCode: string;
  productName: string;
  productImage: string;
  productImages?: string[];
  status: 'delivered' | 'in-transit' | 'processing';
  sender: {
    name: string;
    address: string;
    city: string;
    country: string;
  };
  recipient: {
    name: string;
    address: string;
    city: string;
    country: string;
  };
  weight: string;
  dimensions: string;
  currentLocation: {
    city: string;
    country: string;
    lat: number;
    lng: number;
  };
  estimatedDelivery: string;
  checkpoints: Checkpoint[];
  pricing: {
    subtotal: number;
    shipping: number;
    insurance: number;
    customDuties: number;
    taxes: number;
    total: number;
    currency: string;
  };
  insuranceValue: number;
  servicePriority: 'standard' | 'express' | 'overnight';
}

export const sampleShipments: Shipment[] = [
  {
    trackingCode: 'CAR23BM76',
    productName: 'Mercedes-Benz GLK 350 4MATIC',
    productImage: 'https://images.unsplash.com/photo-1606016159991-bef20e4a6f05?w=800&h=600&fit=crop',
    productImages: [
      'https://images.unsplash.com/photo-1606016159991-bef20e4a6f05?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606016160892-c57977bf7999?w=800&h=600&fit=crop'
    ],
    status: 'in-transit',
    sender: {
      name: 'Mercedes-Benz USA',
      address: '1 Mercedes-Benz Drive',
      city: 'Sandy Springs',
      country: 'USA'
    },
    recipient: {
      name: 'Carethia Williams',
      address: '1583 Elizabeth Ln',
      city: 'Hampton',
      country: 'USA'
    },
    weight: '1,865 kg',
    dimensions: '4.53m × 1.84m × 1.69m',
    currentLocation: {
      city: 'Birmingham',
      country: 'USA',
      lat: 33.5186,
      lng: -86.8104
    },
    estimatedDelivery: '2025-09-07',
    pricing: {
      subtotal: 145000.00,
      shipping: 3500.00,
      insurance: 1450.00,
      customDuties: 14500.00,
      taxes: 11600.00,
      total: 176050.00,
      currency: 'USD'
    },
    insuranceValue: 145000.00,
    servicePriority: 'express',
    checkpoints: [
      {
        id: '1',
        date: '2025-08-15',
        location: 'Stuttgart, Germany',
        status: 'completed',
        description: 'Vehicle manufactured and quality checked at Mercedes-Benz facility',
        lat: 48.7758,
        lng: 9.1829
      },
      {
        id: '2',
        date: '2025-08-20',
        location: 'Bremerhaven, Germany',
        status: 'completed',
        description: 'Loaded onto cargo ship for overseas transport',
        lat: 53.5396,
        lng: 8.5810
      },
      {
        id: '3',
        date: '2025-08-25',
        location: 'Birmingham, AL, USA',
        status: 'current',
        description: 'Arrived at Mercedes-Benz US facility for final preparations',
        lat: 33.5186,
        lng: -86.8104
      },
      {
        id: '4',
        date: '2025-09-05',
        location: 'Hampton, GA, USA',
        status: 'pending',
        description: 'Final inspection and delivery preparation',
        lat: 33.3890,
        lng: -84.2877
      },
      {
        id: '5',
        date: '2025-09-07',
        location: 'Hampton, GA, USA',
        status: 'pending',
        description: 'Scheduled for delivery to customer',
        lat: 33.3890,
        lng: -84.2877
      }
    ]
  }
];