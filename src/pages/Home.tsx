import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Package, MapPin, Clock, Shield, Users, Globe } from 'lucide-react';
import Newsletter from '@/components/Newsletter';

const heroImage = '/lovable-uploads/20f186e6-74ba-4aaf-87d5-b3dd9cae547f.png';

const Home = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: Package,
      title: 'Real-time Tracking',
      description: 'Track your shipments in real-time with detailed status updates and location information.'
    },
    {
      icon: MapPin,
      title: 'Interactive Maps',
      description: 'View your shipment location on interactive maps with precise GPS coordinates.'
    },
    {
      icon: Clock,
      title: 'Delivery Timeline',
      description: 'Follow your package journey through our comprehensive checkpoint timeline.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your shipment data is protected with enterprise-grade security measures.'
    },
    {
      icon: Users,
      title: 'Multiple Users',
      description: 'Create accounts for your team members to track shared shipments together.'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Track shipments worldwide with support for international deliveries.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Free shipping on all orders" 
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero/80" />
        </div>
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-primary-foreground">
              Track Your Shipments
              <span className="block text-primary-glow">With Confidence</span>
            </h1>
            
            <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 px-2">
              Professional shipment tracking for cars, electronics, and packages worldwide. 
              Real-time updates, interactive maps, and detailed delivery timelines.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              {isAuthenticated ? (
                <Button size="lg" asChild className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                  <Link to="/tracking">View Your Shipments</Link>
                </Button>
              ) : (
                <>
                  <Button size="lg" asChild className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                    <Link to="/register">Get Started Free</Link>
                  </Button>
                  <Button size="lg" variant="secondary" asChild className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                    <Link to="/login">Login</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-10 md:mb-16">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Everything You Need to Track Shipments
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
              From small packages to large vehicles, our platform provides comprehensive 
              tracking solutions for all your shipping needs.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="mb-2 text-lg sm:text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to Start Tracking?
            </h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-muted-foreground px-2">
              Join thousands of users who trust MaritimeTracks for their logistics needs.
              Create your free account today and start tracking shipments instantly.
            </p>
            
            {!isAuthenticated && (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Button size="lg" asChild>
                  <Link to="/register">Create Free Account</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/login">Login to Existing Account</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="mb-4 flex items-center space-x-2">
                <Package className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">MaritimeTracks</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Professional shipment tracking solutions for businesses and individuals worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="mb-3 sm:mb-4 font-semibold text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-3 sm:mb-4 font-semibold text-sm sm:text-base">Legal</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-3 sm:mb-4 font-semibold text-sm sm:text-base">Social</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Facebook</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Newsletter />
            </div>
          </div>
          
          <div className="mt-8 border-t pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
            <p>&copy; 2026 MaritimeTracks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
