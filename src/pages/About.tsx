import { Globe, Users, Award, TrendingUp, Shield, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { value: '15+', label: 'Years Experience', icon: Clock },
  { value: '50K+', label: 'Shipments Handled', icon: TrendingUp },
  { value: '120+', label: 'Countries Served', icon: Globe },
  { value: '500+', label: 'Happy Clients', icon: Users }
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'ISO 14001:2018', description: 'Environmental Management' },
  { name: 'C-TPAT', description: 'Customs-Trade Partnership Against Terrorism' },
  { name: 'IATA Certified', description: 'International Air Transport Association' },
  { name: 'AEO Status', description: 'Authorized Economic Operator' },
  { name: 'FIATA Member', description: 'International Federation of Freight Forwarders' }
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              About MaritimeTracks
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your trusted partner in global logistics and supply chain solutions since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2009, MaritimeTracks began as a small freight forwarding company 
                  with a vision to revolutionize the logistics industry through technology and 
                  customer-centric service.
                </p>
                <p>
                  Today, we have grown into a global logistics provider serving businesses of 
                  all sizes across 120+ countries. Our commitment to transparency, reliability, 
                  and innovation has made us a trusted partner for thousands of companies worldwide.
                </p>
                <p>
                  Our mission is simple: to make global shipping accessible, efficient, and 
                  stress-free for every business. We achieve this by combining cutting-edge 
                  tracking technology with personalized service and industry expertise.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, title: 'Reliability', desc: 'On-time delivery guaranteed' },
                { icon: Globe, title: 'Global Reach', desc: '120+ countries covered' },
                { icon: Users, title: 'Expert Team', desc: '200+ logistics professionals' },
                { icon: Award, title: 'Excellence', desc: 'Award-winning service' }
              ].map((item, index) => (
                <Card key={index} className="text-center p-4 md:p-6 card-hover">
                  <CardContent className="p-0">
                    <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-4 md:p-8 card-hover bg-card/80">
                <CardContent className="p-0">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest industry standards through our certifications and strategic partnerships.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-4 md:p-6 text-center card-hover">
                <CardContent className="p-0">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-sm md:text-base mb-1">{cert.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
