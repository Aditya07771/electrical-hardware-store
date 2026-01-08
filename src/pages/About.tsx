import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Target, Eye, Award, Users, Package, Building } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '10,000+', label: 'Happy Customers' },
  { icon: Package, value: '5,000+', label: 'Products' },
  { icon: Building, value: '50+', label: 'Brand Partners' },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
              About <span className="text-accent">Us</span>
            </h1>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
              Your trusted neighborhood electrical and hardware store since 2010
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Our <span className="text-primary">Story</span>
              </h2>
              
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="mb-6 leading-relaxed">
                  Ammaji Electricals and Hardware was founded in 2010 with a simple mission: to provide the people of Mysore with quality electrical and hardware products at fair prices. What started as a small shop in Bogadi has grown into one of the most trusted names in the area.
                </p>
                <p className="mb-6 leading-relaxed">
                  Named after our founder's mother (Ammaji), the store embodies the values of honesty, quality, and customer care that she instilled in us. Every customer who walks through our doors is treated like family.
                </p>
                <p className="leading-relaxed">
                  Over the years, we have built strong relationships with leading brands like Havells, Finolex, Anchor, and Philips, ensuring that our customers always get genuine, warranty-backed products. Our knowledgeable staff, many of whom have been with us since the beginning, are always ready to help with expert advice and recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-card border border-border card-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted source for electrical and hardware products in Mysore, providing genuine quality products at competitive prices while delivering exceptional customer service.
                </p>
              </div>
              
              <div className="p-8 rounded-2xl bg-card border border-border card-shadow">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To grow alongside our community, adapting to new technologies and products while maintaining the personal touch and trust that our customers have come to expect from us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              What We <span className="text-primary">Stand For</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: 'Quality First', desc: 'Only genuine, branded products with proper warranty' },
                { title: 'Fair Pricing', desc: 'Competitive prices with no hidden costs' },
                { title: 'Expert Advice', desc: 'Knowledgeable staff to help you make the right choice' },
              ].map((value) => (
                <div key={value.title} className="text-center p-6">
                  <div className="w-3 h-3 rounded-full bg-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
