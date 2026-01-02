import { Ship, Plane, Warehouse, FileCheck, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Ship,
    title: 'Ocean Freight',
    description: 'Reliable sea cargo shipping services for international trade',
    features: [
      'Full Container Load (FCL)',
      'Less than Container Load (LCL)',
      'Refrigerated containers',
      'Dangerous goods handling',
      'Port-to-port & door-to-door delivery',
      'Real-time container tracking'
    ]
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast and secure air cargo delivery worldwide',
    features: [
      'Express delivery options',
      'Charter services available',
      'Temperature-controlled cargo',
      'Customs clearance included',
      'Door-to-airport service',
      'Priority handling'
    ]
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    description: 'Modern storage and inventory management solutions',
    features: [
      'Climate-controlled facilities',
      'Inventory management system',
      'Pick and pack services',
      'Cross-docking capabilities',
      'Security monitoring 24/7',
      'Flexible storage terms'
    ]
  },
  {
    icon: FileCheck,
    title: 'Customs Clearance',
    description: 'Expert documentation and customs handling services',
    features: [
      'Import/Export documentation',
      'Tariff classification',
      'Duty optimization',
      'Compliance consulting',
      'Bonded warehouse access',
      'Trade agreement expertise'
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Comprehensive logistics solutions tailored to your business needs. 
              From ocean freight to customs clearance, we handle it all.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-sm md:text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Ship?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get in touch with our team to discuss your logistics needs and receive a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/tracking">Track Shipment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
