import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Package, MapPin, Clock, Shield, Users, Globe, MessageCircle, Mail, Phone, Headphones, Star } from 'lucide-react';
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

      {/* Trust / Stats Strip */}
      <section className="border-y bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-8 sm:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '2.4M+', label: 'Shipments tracked' },
              { value: '180+', label: 'Countries covered' },
              { value: '99.8%', label: 'Delivery accuracy' },
              { value: '24/7', label: 'Live support' },
            ].map((s) => (
              <div key={s.label} className="space-y-1">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
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

      {/* Customer Support Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border p-6 sm:p-10 md:p-14">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
                  <Headphones className="h-3.5 w-3.5" /> Customer Support
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                  Real humans, ready when you need them
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-6">
                  Questions about a shipment, billing, or unpaid fees? Our support team replies in under an hour, every day of the year.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" asChild className="gap-2">
                    <Link to="/contact"><MessageCircle className="h-4 w-4" /> Contact Support</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="gap-2">
                    <a href="mailto:support@maritimetracks.com"><Mail className="h-4 w-4" /> Email us</a>
                  </Button>
                </div>
              </div>
              <div className="grid gap-3">
                {[
                  { icon: MessageCircle, title: 'Live chat', desc: 'Tap the chat bubble — average reply 4 min.' },
                  { icon: Mail, title: 'support@maritimetracks.com', desc: 'Detailed help by email, 24/7.' },
                  { icon: Phone, title: '+1 (800) 555-1234', desc: 'Toll-free, Mon–Sun 6 AM–10 PM PT.' },
                ].map((item) => (
                  <Card key={item.title} className="border-border/50 card-hover">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="rounded-lg bg-primary/10 p-2.5 flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm break-words">{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />)}
                  </div>
                  <span>4.9/5 from 12,000+ customers</span>
                </div>
              </div>
            </div>
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
