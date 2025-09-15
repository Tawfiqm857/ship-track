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
    productName: 'Mercedes-Benz GLE 63 Coupe',
    productImage: '/lovable-uploads/4b1eb977-9238-4e64-be04-a287788c1dd9.png',
    productImages: [
      '/lovable-uploads/4b1eb977-9238-4e64-be04-a287788c1dd9.png'
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
      shipping: 1500.00,
      insurance: 50.00,
      customDuties: 200.00,
      taxes: 35.00,
      total: 146785.00,
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
  },
  {
    trackingCode: 'B787FCHEV',
    productName: '2025 Chevrolet Impala',
    productImage: '/src/assets/chevrolet-impala-1.jpg',
    productImages: [
      '/src/assets/chevrolet-impala-1.jpg',
      '/src/assets/chevrolet-impala-2.jpg',
      '/src/assets/chevrolet-impala-3.jpg'
    ],
    status: 'delivered',
    sender: {
      name: 'General Motors LLC',
      address: '300 Renaissance Center',
      city: 'Detroit',
      country: 'USA'
    },
    recipient: {
      name: 'James Mitchell',
      address: '2847 Oak Street',
      city: 'Chicago',
      country: 'USA'
    },
    weight: '1,635 kg',
    dimensions: '5.08m × 1.86m × 1.50m',
    currentLocation: {
      city: 'Chicago',
      country: 'USA',
      lat: 41.8781,
      lng: -87.6298
    },
    estimatedDelivery: '2025-09-12',
    pricing: {
      subtotal: 42000.00,
      shipping: 800.00,
      insurance: 25.00,
      customDuties: 0.00,
      taxes: 120.00,
      total: 42945.00,
      currency: 'USD'
    },
    insuranceValue: 42000.00,
    servicePriority: 'standard',
    checkpoints: [
      {
        id: '1',
        date: '2025-08-20',
        location: 'Detroit, MI, USA',
        status: 'completed',
        description: 'Vehicle manufactured and quality inspected at GM facility',
        lat: 42.3314,
        lng: -83.0458
      },
      {
        id: '2',
        date: '2025-08-25',
        location: 'Toledo, OH, USA',
        status: 'completed',
        description: 'In transit to distribution center',
        lat: 41.6528,
        lng: -83.5379
      },
      {
        id: '3',
        date: '2025-09-01',
        location: 'Indianapolis, IN, USA',
        status: 'completed',
        description: 'Processed at regional distribution center',
        lat: 39.7684,
        lng: -86.1581
      },
      {
        id: '4',
        date: '2025-09-10',
        location: 'Chicago, IL, USA',
        status: 'completed',
        description: 'Arrived at local dealership for final preparation',
        lat: 41.8781,
        lng: -87.6298
      },
      {
        id: '5',
        date: '2025-09-12',
        location: 'Chicago, IL, USA',
        status: 'completed',
        description: 'Successfully delivered to customer',
        lat: 41.8781,
        lng: -87.6298
      }
    ]
  }
];