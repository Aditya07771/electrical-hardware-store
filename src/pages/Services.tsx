import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Lightbulb, Package, Truck, HeadphonesIcon, Users, Wrench } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Electrical Consultation',
    description: 'Expert advice on home wiring, load calculation, and product recommendations. Our knowledgeable staff will help you choose the right products for your needs.',
    features: ['Home wiring advice', 'Load calculation', 'Product recommendations', 'Safety guidelines'],
  },
  {
    icon: Package,
    title: 'Bulk Orders',
    description: 'Special pricing for contractors and businesses. We handle projects of all sizes with competitive wholesale rates.',
    features: ['Contractor supplies', 'Project quotations', 'Wholesale pricing', 'Credit facility for regulars'],
  },
  {
    icon: Truck,
    title: 'Home Delivery',
    description: 'Convenient doorstep delivery for your convenience. Free delivery available in Bogadi area for qualifying orders.',
    features: ['Free delivery in Bogadi', 'Same-day delivery', 'Careful handling', 'Order tracking'],
  },
  {
    icon: HeadphonesIcon,
    title: 'After-Sales Support',
    description: 'We stand behind our products with comprehensive after-sales support and warranty assistance.',
    features: ['Warranty claims', 'Product replacement', 'Technical guidance', 'Return policy'],
  },
  {
    icon: Users,
    title: 'Electrician Referrals',
    description: 'Need an electrician? We can connect you with trusted, verified electricians in Mysore.',
    features: ['Verified electricians', 'Installation guidance', 'Fair pricing', 'Quality assurance'],
  },
  {
    icon: Wrench,
    title: 'Product Installation Help',
    description: 'Get guidance on product installation or connect with professionals for complex installations.',
    features: ['DIY tips', 'Video guides', 'Professional referrals', 'Tool recommendations'],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
              More than just a store - we're your complete electrical and hardware solution partner
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-8 rounded-2xl bg-card border border-border card-shadow hover:elevated-shadow transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It <span className="text-primary">Works</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Getting what you need is simple
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Enquire', desc: 'Call us or visit WhatsApp' },
                { step: '02', title: 'Consult', desc: 'Get expert recommendations' },
                { step: '03', title: 'Order', desc: 'Place your order' },
                { step: '04', title: 'Receive', desc: 'Pick up or get delivery' },
              ].map((item, index) => (
                <div key={item.step} className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-heading font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
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

export default Services;
