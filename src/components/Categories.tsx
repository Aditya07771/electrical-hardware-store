import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Cable, 
  ToggleLeft, 
  Lamp, 
  Wrench, 
  Droplets, 
  PaintBucket, 
  HardHat 
} from 'lucide-react';

const categories = [
  {
    icon: Cable,
    title: 'Wiring & Cables',
    description: 'Finolex, Havells, Polycab',
    color: 'bg-red-500/10 text-red-500',
  },
  {
    icon: ToggleLeft,
    title: 'Switches & Sockets',
    description: 'Anchor, Legrand, GM',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: Lightbulb,
    title: 'LED Lighting',
    description: 'Philips, Crompton, Syska',
    color: 'bg-yellow-500/10 text-yellow-500',
  },
  {
    icon: Lamp,
    title: 'Fans & Appliances',
    description: 'Ceiling, Table, Exhaust',
    color: 'bg-green-500/10 text-green-500',
  },
  {
    icon: Wrench,
    title: 'Power Tools',
    description: 'Bosch, Stanley, Black+Decker',
    color: 'bg-orange-500/10 text-orange-500',
  },
  {
    icon: Droplets,
    title: 'Plumbing',
    description: 'Pipes, Fittings, Taps',
    color: 'bg-cyan-500/10 text-cyan-500',
  },
  {
    icon: PaintBucket,
    title: 'Paint & Accessories',
    description: 'Brushes, Rollers, Primers',
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    icon: HardHat,
    title: 'Safety Equipment',
    description: 'Helmets, Gloves, Goggles',
    color: 'bg-amber-500/10 text-amber-500',
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Product <span className="text-primary">Categories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of electrical and hardware products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              to="/products"
              className="group p-6 rounded-2xl bg-card card-shadow hover:elevated-shadow transition-all duration-300 hover:-translate-y-2 border border-border text-center"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {category.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors">
              View All Products
              <span className="text-lg">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
