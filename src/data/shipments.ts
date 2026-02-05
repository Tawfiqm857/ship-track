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
  unpaidFees?: {
    shipping?: boolean;
    insurance?: boolean;
    customDuties?: boolean;
    taxes?: boolean;
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
    productImage: '/chevrolet-impala-1.jpg',
    productImages: [
      '/chevrolet-impala-1.jpg',
      '/chevrolet-impala-2.jpg',
      '/chevrolet-impala-3.jpg'
    ],
    status: 'in-transit',
    sender: {
      name: 'General Motors LLC',
      address: '300 Renaissance Center',
      city: 'Detroit',
      country: 'USA'
    },
    recipient: {
      name: 'Joan J Cater',
      address: '44758 Leslie Ct',
      city: 'Lancaster',
      country: 'USA'
    },
    weight: '1,635 kg',
    dimensions: '5.08m × 1.86m × 1.50m',
    currentLocation: {
      city: 'Bakersfield',
      country: 'USA',
      lat: 35.3733,
      lng: -119.0187
    },
    estimatedDelivery: '2025-09-22',
    pricing: {
      subtotal: 42000.00,
      shipping: 800.00,
      insurance: 25.00,
      customDuties: 286.96,
      taxes: 120.00,
      total: 43231.96,
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
        date: '2025-09-15',
        location: 'Bakersfield, CA, USA',
        status: 'pending',
        description: 'Pending until custom duties and taxes are paid',
        lat: 35.3733,
        lng: -119.0187
      },
      {
        id: '5',
        date: '2025-09-22',
        location: 'Lancaster, CA, USA',
        status: 'pending',
        description: 'Scheduled for delivery to customer',
        lat: 34.6868,
        lng: -118.1542
      }
    ]
  },
  {
    trackingCode: 'MER20209G4',
    productName: 'Mercedes-Benz CLS',
    productImage: '/mercedes-cle-400-1.jpg',
    productImages: [
      '/mercedes-cle-400-1.jpg',
      '/mercedes-cle-400-2.jpg',
      '/mercedes-cle-400-3.jpg',
      '/mercedes-cle-400-4.jpg',
      '/mercedes-cle-400-5.jpg'
    ],
    status: 'in-transit',
    sender: {
      name: 'Mercedes-Benz USA',
      address: '1 Mercedes-Benz Drive',
      city: 'Sandy Springs',
      country: 'USA'
    },
    recipient: {
      name: 'FULTZ CONNIE',
      address: 'Delivery Address',
      city: '19037 Inlet Rd, Conneautville, PA 16406',
      country: 'USA'
    },
    weight: '1,820 kg',
    dimensions: '4.85m × 1.86m × 1.42m',
    currentLocation: {
      city: 'Atlanta',
      country: 'USA',
      lat: 33.7490,
      lng: -84.3880
    },
    estimatedDelivery: '2026-02-01',
    pricing: {
      subtotal: 62000.00,
      shipping: 1200.00,
      insurance: 635.00,
      customDuties: 1280.00,
      taxes: 750.00,
      total: 65865.00,
      currency: 'USD'
    },
    insuranceValue: 62000.00,
    servicePriority: 'express',
    checkpoints: [
      {
        id: '1',
        date: '2025-12-10',
        location: 'Bremen, Germany',
        status: 'completed',
        description: 'Vehicle manufactured and quality checked at Mercedes-Benz facility',
        lat: 53.0793,
        lng: 8.8017
      },
      {
        id: '2',
        date: '2025-12-15',
        location: 'Bremerhaven, Germany',
        status: 'completed',
        description: 'Loaded onto cargo ship for overseas transport',
        lat: 53.5396,
        lng: 8.5810
      },
      {
        id: '3',
        date: '2025-12-22',
        location: 'Atlanta, GA, USA',
        status: 'current',
        description: 'Arrived at Mercedes-Benz US distribution center',
        lat: 33.7490,
        lng: -84.3880
      },
      {
        id: '4',
        date: '2025-12-27',
        location: 'Destination City, USA',
        status: 'pending',
        description: 'Final inspection and delivery preparation',
        lat: 33.7490,
        lng: -84.3880
      },
      {
        id: '5',
        date: '2025-12-29',
        location: 'Destination City, USA',
        status: 'pending',
        description: 'Scheduled for delivery to customer',
        lat: 33.7490,
        lng: -84.3880
      }
    ]
  },
  {
    trackingCode: 'N44RNG7',
    productName: '925 Sterling Silver Custom CZ',
    productImage: '/silver-ring-1.jpg',
    productImages: [
      '/silver-ring-1.jpg',
      '/silver-ring-2.jpg'
    ],
    status: 'in-transit',
    sender: {
      name: 'Sterling Silver Jewelers',
      address: '9560 Wilshire Blvd',
      city: 'Beverly Hills',
      country: 'USA'
    },
    recipient: {
      name: 'Customer',
      address: 'KENISHIA BATTLE',
      city: 'Washington',
      country: 'USA'
    },
    weight: '0.15 kg',
    dimensions: '15cm × 10cm × 5cm',
    currentLocation: {
      city: 'Denver',
      country: 'USA',
      lat: 39.7392,
      lng: -104.9903
    },
    estimatedDelivery: '2025-12-28',
    pricing: {
      subtotal: 850.00,
      shipping: 25.00,
      insurance: 15.00,
      customDuties: 0.00,
      taxes: 108.00,
      total: 998.00,
      currency: 'USD'
    },
    insuranceValue: 850.00,
    servicePriority: 'overnight',
    checkpoints: [
      {
        id: '1',
        date: '2025-12-26',
        location: 'Beverly Hills, CA, USA',
        status: 'completed',
        description: 'Package picked up from Sterling Silver Jewelers',
        lat: 34.0736,
        lng: -118.4004
      },
      {
        id: '2',
        date: '2025-12-26',
        location: 'Los Angeles, CA, USA',
        status: 'completed',
        description: 'Departed from LA sorting facility',
        lat: 34.0522,
        lng: -118.2437
      },
      {
        id: '3',
        date: '2025-12-27',
        location: 'Denver, CO, USA',
        status: 'current',
        description: 'In transit - overnight express shipping',
        lat: 39.7392,
        lng: -104.9903
      },
      {
        id: '4',
        date: '2025-12-28',
        location: 'Washington, DC, USA',
        status: 'pending',
        description: 'Arriving at destination hub',
        lat: 38.9072,
        lng: -77.0369
      },
      {
        id: '5',
        date: '2025-12-28',
        location: 'Washington, DC, USA',
        status: 'pending',
        description: 'Scheduled for delivery to customer',
        lat: 38.9072,
        lng: -77.0369
      }
    ]
  }


  ,

    {
    trackingCode: 'CAR23BM75',
    productName: 'Mercedes-Benz GLK 350 4MATIC',
    productImage: 'https://images.unsplash.com/photo-1617886322100-64d2ed25c82b?w=800&h=600&fit=crop',
    productImages: [
      'https://images.unsplash.com/photo-1617886322100-64d2ed25c82b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1494976688153-c72967ce2b54?w=800&h=600&fit=crop'
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
  },
  {
    trackingCode: 'TACT2026BB',
    productName: 'Tactical Equipment Set',
    productImage: '/tactical-gear-1.jpg',
    productImages: [
      '/tactical-gear-1.jpg',
      '/tactical-gear-2.jpg',
      '/tactical-gear-3.jpg'
    ],
    status: 'processing',
    sender: {
      name: 'UK Tactical Supplies Ltd',
      address: '45 Commercial Road',
      city: 'London',
      country: 'UK'
    },
    recipient: {
      name: 'Barbara Brownin',
      address: 'Delivery Address',
      city: 'Florida',
      country: 'USA'
    },
    weight: '8.5 kg',
    dimensions: '60cm × 45cm × 30cm',
    currentLocation: {
      city: 'London',
      country: 'UK',
      lat: 51.5074,
      lng: -0.1278
    },
    estimatedDelivery: '2026-02-15',
    pricing: {
      subtotal: 2500.00,
      shipping: 150.00,
      insurance: 0.00,
      customDuties: 80.00,
      taxes: 70.00,
      total: 2800.00,
      currency: 'USD'
    },
    unpaidFees: {
      shipping: true,
      customDuties: true,
      taxes: true
    },
    insuranceValue: 2500.00,
    servicePriority: 'express',
    checkpoints: [
      {
        id: '1',
        date: '2026-02-06',
        location: 'London, UK',
        status: 'pending',
        description: 'Package scheduled for pickup from UK Tactical Supplies',
        lat: 51.5074,
        lng: -0.1278
      },
      {
        id: '2',
        date: '2026-02-07',
        location: 'London Heathrow, UK',
        status: 'pending',
        description: 'Awaiting customs clearance and air freight loading',
        lat: 51.4700,
        lng: -0.4543
      },
      {
        id: '3',
        date: '2026-02-10',
        location: 'Miami, FL, USA',
        status: 'pending',
        description: 'Arriving at US customs for inspection',
        lat: 25.7617,
        lng: -80.1918
      },
      {
        id: '4',
        date: '2026-02-13',
        location: 'Florida, USA',
        status: 'pending',
        description: 'Pending payment of shipping fee before delivery',
        lat: 27.6648,
        lng: -81.5158
      },
      {
        id: '5',
        date: '2026-02-15',
        location: 'Florida, USA',
        status: 'pending',
        description: 'Scheduled for delivery to customer',
        lat: 27.6648,
        lng: -81.5158
      }
    ]
  }
];
