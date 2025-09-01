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
  },
  {
    trackingCode: 'LAP123456',
    productName: 'MacBook Pro 16"',
    productImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
    productImages: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop'
    ],
    status: 'delivered',
    sender: {
      name: 'Apple Inc.',
      address: 'One Apple Park Way',
      city: 'Cupertino',
      country: 'USA'
    },
    recipient: {
      name: 'Sarah Johnson',
      address: '456 Oak Avenue',
      city: 'Vancouver',
      country: 'Canada'
    },
    weight: '2.1 kg',
    dimensions: '35.6cm × 24.6cm × 1.7cm',
    currentLocation: {
      city: 'Vancouver',
      country: 'Canada',
      lat: 49.2827,
      lng: -123.1207
    },
    estimatedDelivery: '2024-08-30',
    pricing: {
      subtotal: 2499.00,
      shipping: 25.00,
      insurance: 24.99,
      customDuties: 149.94,
      taxes: 324.87,
      total: 3023.80,
      currency: 'USD'
    },
    insuranceValue: 2499.00,
    servicePriority: 'standard',
    checkpoints: [
      {
        id: '1',
        date: '2024-08-25',
        location: 'Cupertino, CA, USA',
        status: 'completed',
        description: 'Package shipped from Apple facility',
        lat: 37.3230,
        lng: -122.0322
      },
      {
        id: '2',
        date: '2024-08-27',
        location: 'Seattle, WA, USA',
        status: 'completed',
        description: 'Processed at Seattle hub',
        lat: 47.6062,
        lng: -122.3321
      },
      {
        id: '3',
        date: '2024-08-29',
        location: 'Vancouver, BC, Canada',
        status: 'completed',
        description: 'Cleared customs',
        lat: 49.2827,
        lng: -123.1207
      },
      {
        id: '4',
        date: '2024-08-30',
        location: 'Vancouver, BC, Canada',
        status: 'completed',
        description: 'Delivered successfully',
        lat: 49.2827,
        lng: -123.1207
      }
    ]
  },
  {
    trackingCode: 'PHN987654',
    productName: 'Samsung Galaxy S25 Ultra',
    productImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    productImages: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&h=600&fit=crop'
    ],
    status: 'delivered',
    sender: {
      name: 'Samsung Electronics',
      address: '129 Samsung-ro',
      city: 'Seoul',
      country: 'South Korea'
    },
    recipient: {
      name: 'Mike Chen',
      address: '789 Pine Street',
      city: 'Montreal',
      country: 'Canada'
    },
    weight: '0.23 kg',
    dimensions: '16.3cm × 7.9cm × 0.89cm',
    currentLocation: {
      city: 'Seoul',
      country: 'South Korea',
      lat: 37.5665,
      lng: 126.9780
    },
    estimatedDelivery: '2024-09-10',
    pricing: {
      subtotal: 1199.99,
      shipping: 45.00,
      insurance: 12.00,
      customDuties: 119.99,
      taxes: 155.99,
      total: 1532.97,
      currency: 'USD'
    },
    insuranceValue: 1199.99,
    servicePriority: 'express',
    checkpoints: [
      {
        id: '1',
        date: '2024-09-01',
        location: 'Seoul, South Korea',
        status: 'completed',
        description: 'Order confirmed and being prepared',
        lat: 37.5665,
        lng: 126.9780
      },
      {
        id: '2',
        date: '2024-09-03',
        location: 'Seoul, South Korea',
        status: 'current',
        description: 'Processing at fulfillment center',
        lat: 37.5665,
        lng: 126.9780
      },
      {
        id: '3',
        date: '2024-09-05',
        location: 'Incheon, South Korea',
        status: 'pending',
        description: 'Departure from origin country',
        lat: 37.4563,
        lng: 126.7052
      },
      {
        id: '4',
        date: '2024-09-08',
        location: 'Vancouver, BC, Canada',
        status: 'pending',
        description: 'Arrival in destination country',
        lat: 49.2827,
        lng: -123.1207
      },
      {
        id: '5',
        date: '2024-09-10',
        location: 'Montreal, QC, Canada',
        status: 'pending',
        description: 'Out for delivery',
        lat: 45.5017,
        lng: -73.5673
      }
    ]
  },
  {
    trackingCode: 'BOK654321',
    productName: 'Harry Potter Collector\'s Edition',
    productImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    productImages: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop'
    ],
    status: 'delivered',
    sender: {
      name: 'Bloomsbury Publishing',
      address: '50 Bedford Square',
      city: 'London',
      country: 'United Kingdom'
    },
    recipient: {
      name: 'Emma Wilson',
      address: '321 Maple Drive',
      city: 'Calgary',
      country: 'Canada'
    },
    weight: '3.2 kg',
    dimensions: '25cm × 20cm × 15cm',
    currentLocation: {
      city: 'New York',
      country: 'USA',
      lat: 40.7128,
      lng: -74.0060
    },
    estimatedDelivery: '2024-09-07',
    pricing: {
      subtotal: 299.99,
      shipping: 35.00,
      insurance: 3.00,
      customDuties: 15.00,
      taxes: 38.99,
      total: 391.98,
      currency: 'USD'
    },
    insuranceValue: 299.99,
    servicePriority: 'standard',
    checkpoints: [
      {
        id: '1',
        date: '2024-08-29',
        location: 'London, United Kingdom',
        status: 'completed',
        description: 'Package collected from publisher',
        lat: 51.5074,
        lng: -0.1278
      },
      {
        id: '2',
        date: '2024-08-31',
        location: 'Heathrow Airport, UK',
        status: 'completed',
        description: 'Departed from UK',
        lat: 51.4700,
        lng: -0.4543
      },
      {
        id: '3',
        date: '2024-09-01',
        location: 'New York, NY, USA',
        status: 'current',
        description: 'Arrived at JFK Airport, processing',
        lat: 40.7128,
        lng: -74.0060
      },
      {
        id: '4',
        date: '2024-09-05',
        location: 'Calgary, AB, Canada',
        status: 'pending',
        description: 'International mail processing',
        lat: 51.0447,
        lng: -114.0719
      },
      {
        id: '5',
        date: '2024-09-07',
        location: 'Calgary, AB, Canada',
        status: 'pending',
        description: 'Out for delivery',
        lat: 51.0447,
        lng: -114.0719
      }
    ]
  }
];