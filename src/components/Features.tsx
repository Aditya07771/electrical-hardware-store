import { Zap, Award, BadgeIndianRupee, Truck } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Quality Products',
    description: 'Only genuine branded products from trusted manufacturers',
  },
  {
    icon: Award,
    title: 'Trusted Brand',
    description: '15+ years of serving Mysore with excellence',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Best Prices',
    description: 'Competitive pricing with special contractor rates',
  },
  {
    icon: Truck,
    title: 'Local Delivery',
    description: 'Free delivery in Bogadi area for bulk orders',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Ammaji</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best products and services for all your electrical and hardware needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card card-shadow hover:elevated-shadow transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
