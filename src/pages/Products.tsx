import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const productCategories = [
  {
    title: 'Electrical Supplies',
    products: [
      { name: 'House Wiring Cables', brand: 'Finolex, Havells, Polycab', image: '🔌' },
      { name: 'MCBs & Distribution Boxes', brand: 'Havells, Legrand', image: '⚡' },
      { name: 'Switches & Sockets', brand: 'Anchor, Legrand, GM', image: '🔘' },
      { name: 'Ceiling Fans', brand: 'Crompton, Orient, Havells', image: '🌀' },
      { name: 'LED Bulbs & Tubes', brand: 'Philips, Syska, Crompton', image: '💡' },
      { name: 'Exhaust Fans', brand: 'Usha, Crompton', image: '🌬️' },
    ],
  },
  {
    title: 'Hardware Items',
    products: [
      { name: 'Power Drills', brand: 'Bosch, Stanley', image: '🔧' },
      { name: 'Angle Grinders', brand: 'Bosch, Black+Decker', image: '⚙️' },
      { name: 'Hand Tools Set', brand: 'Stanley, Taparia', image: '🛠️' },
      { name: 'Measuring Tapes', brand: 'Stanley, Freemans', image: '📏' },
      { name: 'Screwdriver Sets', brand: 'Stanley, Taparia', image: '🪛' },
      { name: 'Pliers & Cutters', brand: 'Taparia, Stanley', image: '✂️' },
    ],
  },
  {
    title: 'Plumbing & Paint',
    products: [
      { name: 'PVC Pipes & Fittings', brand: 'Astral, Supreme', image: '🚿' },
      { name: 'Water Taps', brand: 'Parryware, Hindware', image: '🚰' },
      { name: 'Paint Brushes', brand: 'Asian Paints', image: '🖌️' },
      { name: 'Rollers & Trays', brand: 'Various Brands', image: '🎨' },
      { name: 'Adhesives & Sealants', brand: 'Fevicol, M-Seal', image: '🧴' },
      { name: 'Safety Equipment', brand: 'Karam, 3M', image: '🦺' },
    ],
  },
];

const Products = () => {
  const whatsappEnquiry = (productName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in ${productName}. Please share the price and availability.`);
    window.open(`https://wa.me/916306459098?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
              Quality electrical and hardware products from India's most trusted brands
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {productCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-16 last:mb-0">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="w-1 h-8 bg-primary rounded-full" />
                  {category.title}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product, index) => (
                    <div
                      key={product.name}
                      className="group p-6 rounded-2xl bg-card border border-border card-shadow hover:elevated-shadow transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="text-5xl mb-4">{product.image}</div>
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {product.brand}
                      </p>
                      <Button
                        onClick={() => whatsappEnquiry(product.name)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Enquire Now
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We stock over 5000+ products. Contact us for specific requirements or bulk orders.
            </p>
            <a href="tel:6306459098">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8">
                Call Us: 6306459098
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;
