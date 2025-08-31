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
}

export const sampleShipments: Shipment[] = [
  {
    trackingCode: 'CAR123456789',
    productName: 'Tesla Model X',
    productImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop',
    status: 'in-transit',
    sender: {
      name: 'Tesla Motors Inc.',
      address: '1 Tesla Road',
      city: 'Austin',
      country: 'USA'
    },
    recipient: {
      name: 'John Smith',
      address: '123 Main Street',
      city: 'Toronto',
      country: 'Canada'
    },
    weight: '2,270 kg',
    dimensions: '5.05m × 2.07m × 1.68m',
    currentLocation: {
      city: 'Detroit',
      country: 'USA',
      lat: 42.3314,
      lng: -83.0458
    },
    estimatedDelivery: '2024-09-05',
    checkpoints: [
      {
        id: '1',
        date: '2024-08-28',
        location: 'Austin, TX, USA',
        status: 'completed',
        description: 'Package picked up from Tesla facility',
        lat: 30.2672,
        lng: -97.7431
      },
      {
        id: '2',
        date: '2024-08-30',
        location: 'Dallas, TX, USA',
        status: 'completed',
        description: 'In transit - Left Dallas facility',
        lat: 32.7767,
        lng: -96.7970
      },
      {
        id: '3',
        date: '2024-09-01',
        location: 'Detroit, MI, USA',
        status: 'current',
        description: 'Currently at Detroit processing center',
        lat: 42.3314,
        lng: -83.0458
      },
      {
        id: '4',
        date: '2024-09-04',
        location: 'Windsor, ON, Canada',
        status: 'pending',
        description: 'Customs clearance',
        lat: 42.3149,
        lng: -83.0364
      },
      {
        id: '5',
        date: '2024-09-05',
        location: 'Toronto, ON, Canada',
        status: 'pending',
        description: 'Out for delivery',
        lat: 43.6532,
        lng: -79.3832
      }
    ]
  },
  {
    trackingCode: 'LAP123456',
    productName: 'MacBook Pro 16"',
    productImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
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
    status: 'processing',
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
    status: 'in-transit',
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