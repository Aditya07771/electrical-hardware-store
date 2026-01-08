import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  MessageCircle, 
  Search, 
  Star, 
  Package, 
  Zap, 
  Wrench, 
  Droplets, 
  PaintBucket, 
  Shield,
  CheckCircle,
  Filter,
  Grid3X3,
  List
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

// ============================================
// PRODUCT DATA WITH REAL IMAGES & DESCRIPTIONS
// ============================================

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  image: string;
  features: string[];
  inStock: boolean;
  rating: number;
  category: string;
}

interface ProductCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  products: Product[];
}

const productCategories: ProductCategory[] = [
  {
    id: 'electrical',
    title: 'Electrical Supplies',
    icon: Zap,
    description: 'Premium electrical products for residential and commercial installations',
    products: [
      {
        id: 1,
        name: 'House Wiring Cables',
        brand: 'Finolex, Havells, Polycab',
        description: 'Premium quality copper wiring cables for safe and efficient electrical installations. Available in various sizes from 1mm to 6mm.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        features: ['Fire Resistant', 'ISI Certified', '10 Year Warranty'],
        inStock: true,
        rating: 4.8,
        category: 'electrical'
      },
      {
        id: 2,
        name: 'MCB Distribution Box',
        brand: 'Havells, Legrand, Schneider',
        description: 'Single/Double/Triple pole MCBs with IP-rated distribution boxes. Complete protection for your electrical circuits.',
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop',
        features: ['Surge Protection', 'Easy Installation', 'Compact Design'],
        inStock: true,
        rating: 4.9,
        category: 'electrical'
      },
      {
        id: 3,
        name: 'Modular Switches & Sockets',
        brand: 'Anchor Roma, Legrand, GM',
        description: 'Elegant modular switches and sockets with superior conductivity. Available in multiple colors and designs.',
        image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=400&h=300&fit=crop',
        features: ['Child Safe', 'High Conductivity', 'Flame Retardant'],
        inStock: true,
        rating: 4.7,
        category: 'electrical'
      },
      {
        id: 4,
        name: 'Decorative Ceiling Fans',
        brand: 'Crompton, Orient, Havells',
        description: 'Energy-efficient BLDC and regular ceiling fans with remote control. Silent operation with powerful air delivery.',
        image: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=400&h=300&fit=crop',
        features: ['Energy Star Rated', 'Remote Control', '5 Year Warranty'],
        inStock: true,
        rating: 4.6,
        category: 'electrical'
      },
      {
        id: 5,
        name: 'LED Bulbs & Tube Lights',
        brand: 'Philips, Syska, Wipro',
        description: 'High lumen LED bulbs and tube lights with up to 50,000 hours lifespan. Available from 5W to 40W.',
        image: 'https://images.unsplash.com/photo-1532007890086-a08b7c6e4eab?w=400&h=300&fit=crop',
        features: ['90% Energy Saving', 'No UV Emission', 'Instant Start'],
        inStock: true,
        rating: 4.8,
        category: 'electrical'
      },
      {
        id: 6,
        name: 'Exhaust Fans',
        brand: 'Usha, Crompton, Luminous',
        description: 'Powerful exhaust fans for kitchens and bathrooms. Rust-resistant with low noise operation.',
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop',
        features: ['Rust Proof', 'Low Noise', 'High Air Suction'],
        inStock: true,
        rating: 4.5,
        category: 'electrical'
      },
      {
        id: 7,
        name: 'LED Panel Lights',
        brand: 'Philips, Havells, Surya',
        description: 'Slim profile LED panel lights for modern interiors. Surface and recessed mounting options available.',
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop',
        features: ['Slim Design', 'Uniform Light', 'Dimmable Option'],
        inStock: true,
        rating: 4.7,
        category: 'electrical'
      },
      {
        id: 8,
        name: 'Voltage Stabilizers',
        brand: 'V-Guard, Microtek, Luminous',
        description: 'Automatic voltage stabilizers for AC, refrigerator, and home use. Wide input voltage range protection.',
        image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400&h=300&fit=crop',
        features: ['Auto Cut-off', 'LED Display', 'Overload Protection'],
        inStock: true,
        rating: 4.6,
        category: 'electrical'
      },
    ],
  },
  {
    id: 'hardware',
    title: 'Power Tools & Hardware',
    icon: Wrench,
    description: 'Professional-grade tools and hardware for every project',
    products: [
      {
        id: 9,
        name: 'Impact Power Drill',
        brand: 'Bosch, Stanley, Black+Decker',
        description: 'High-torque impact drill for concrete, wood, and metal. Variable speed control with reverse function.',
        image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop',
        features: ['Variable Speed', 'Hammer Function', 'LED Light'],
        inStock: true,
        rating: 4.9,
        category: 'hardware'
      },
      {
        id: 10,
        name: 'Angle Grinder 4"',
        brand: 'Bosch, Makita, DeWalt',
        description: 'Powerful angle grinder for cutting and grinding metal, tiles, and stone. Includes safety guard.',
        image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop',
        features: ['11000 RPM', 'Side Handle', 'Spindle Lock'],
        inStock: true,
        rating: 4.8,
        category: 'hardware'
      },
      {
        id: 11,
        name: 'Professional Tool Kit',
        brand: 'Stanley, Taparia',
        description: 'Complete 108-piece tool kit with wrenches, screwdrivers, pliers, and more in a durable carrying case.',
        image: 'https://images.unsplash.com/photo-1581147036324-c17ac41f4d4e?w=400&h=300&fit=crop',
        features: ['Chrome Vanadium', 'Lifetime Warranty', 'Portable Case'],
        inStock: true,
        rating: 4.7,
        category: 'hardware'
      },
      {
        id: 12,
        name: 'Measuring Tape 5m/8m',
        brand: 'Stanley, Freemans, JCB',
        description: 'Heavy-duty measuring tape with auto-lock and belt clip. Shock-resistant rubberized case.',
        image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop',
        features: ['Auto Lock', 'Belt Clip', 'Shock Resistant'],
        inStock: true,
        rating: 4.6,
        category: 'hardware'
      },
      {
        id: 13,
        name: 'Cordless Screwdriver',
        brand: 'Bosch, Black+Decker',
        description: 'Rechargeable cordless screwdriver with multiple bit set. Compact design for tight spaces.',
        image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop',
        features: ['USB Charging', '45 Bit Set', 'LED Worklight'],
        inStock: true,
        rating: 4.8,
        category: 'hardware'
      },
      {
        id: 14,
        name: 'Combination Pliers Set',
        brand: 'Taparia, Stanley, Elora',
        description: 'Professional quality combination pliers with cutting edge. Insulated handles for electrical work.',
        image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=400&h=300&fit=crop',
        features: ['Insulated 1000V', 'Hardened Steel', 'Ergonomic Grip'],
        inStock: true,
        rating: 4.5,
        category: 'hardware'
      },
      {
        id: 15,
        name: 'Jigsaw Machine',
        brand: 'Bosch, Makita, DeWalt',
        description: 'Variable speed jigsaw for precise curved cuts in wood, metal, and plastic. Includes blade set.',
        image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=400&h=300&fit=crop',
        features: ['Variable Speed', 'Dust Blower', 'Quick Blade Change'],
        inStock: true,
        rating: 4.7,
        category: 'hardware'
      },
      {
        id: 16,
        name: 'Spirit Level Set',
        brand: 'Stanley, Taparia',
        description: 'Professional aluminum spirit level set with magnetic base. Includes 12", 24", and 48" levels.',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop',
        features: ['Magnetic Base', 'Shockproof Vials', 'Aluminum Body'],
        inStock: true,
        rating: 4.6,
        category: 'hardware'
      },
    ],
  },
  {
    id: 'plumbing',
    title: 'Plumbing Supplies',
    icon: Droplets,
    description: 'Quality plumbing materials for leak-free installations',
    products: [
      {
        id: 17,
        name: 'CPVC Pipes & Fittings',
        brand: 'Astral, Supreme, Prince',
        description: 'High-quality CPVC pipes for hot and cold water supply. Complete range of fittings available.',
        image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop',
        features: ['Hot Water Safe', 'UV Resistant', '50 Year Life'],
        inStock: true,
        rating: 4.8,
        category: 'plumbing'
      },
      {
        id: 18,
        name: 'Premium Water Taps',
        brand: 'Parryware, Hindware, Jaquar',
        description: 'Designer bathroom and kitchen taps with ceramic cartridge. Chrome plated for lasting shine.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
        features: ['Ceramic Cartridge', 'Anti-Corrosion', '5 Year Warranty'],
        inStock: true,
        rating: 4.7,
        category: 'plumbing'
      },
      {
        id: 19,
        name: 'Submersible Pump',
        brand: 'Kirloskar, CRI, Texmo',
        description: 'High-efficiency submersible water pumps for borewells. Available in 0.5HP to 5HP capacity.',
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop',
        features: ['Copper Winding', 'Thermal Overload', 'Energy Efficient'],
        inStock: true,
        rating: 4.9,
        category: 'plumbing'
      },
      {
        id: 20,
        name: 'Water Tank Float Valve',
        brand: 'Plastic, SS, Brass',
        description: 'Automatic float valve for overhead tanks. Prevents overflow and water wastage.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        features: ['Auto Shut-off', 'Durable Build', 'Easy Install'],
        inStock: true,
        rating: 4.5,
        category: 'plumbing'
      },
      {
        id: 21,
        name: 'Bathroom Fittings Set',
        brand: 'Hindware, Cera, Parryware',
        description: 'Complete bathroom accessories including towel rod, soap dish, hooks, and more.',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
        features: ['Stainless Steel', 'Rust Proof', 'Modern Design'],
        inStock: true,
        rating: 4.6,
        category: 'plumbing'
      },
      {
        id: 22,
        name: 'Shower Head Set',
        brand: 'Grohe, Jaquar, Kohler',
        description: 'Rain shower and hand shower combo with adjustable flow patterns. Wall mount included.',
        image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
        features: ['Multi-Flow', 'Easy Clean', 'Chrome Finish'],
        inStock: true,
        rating: 4.7,
        category: 'plumbing'
      },
    ],
  },
  {
    id: 'paint',
    title: 'Paints & Accessories',
    icon: PaintBucket,
    description: 'Premium paints and painting accessories for every surface',
    products: [
      {
        id: 23,
        name: 'Interior Emulsion Paint',
        brand: 'Asian Paints, Berger, Nerolac',
        description: 'Washable interior emulsion with low VOC. Available in 1000+ shades with smooth matte finish.',
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop',
        features: ['Washable', 'Low VOC', 'Anti-Fungal'],
        inStock: true,
        rating: 4.8,
        category: 'paint'
      },
      {
        id: 24,
        name: 'Exterior Weather Coat',
        brand: 'Asian Paints, Dulux',
        description: 'All-weather exterior paint with 7-year warranty. UV resistant with dust-resistant formula.',
        image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop',
        features: ['Waterproof', 'UV Resistant', '7 Year Warranty'],
        inStock: true,
        rating: 4.9,
        category: 'paint'
      },
      {
        id: 25,
        name: 'Professional Paint Brush Set',
        brand: 'Asian Paints, Wooster',
        description: 'High-quality bristle brushes in multiple sizes. Perfect for all paint types and finishes.',
        image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=300&fit=crop',
        features: ['Natural Bristle', 'Wooden Handle', 'Long Lasting'],
        inStock: true,
        rating: 4.6,
        category: 'paint'
      },
      {
        id: 26,
        name: 'Paint Roller Kit',
        brand: 'Asian Paints, Stanley',
        description: 'Complete roller kit with tray, extension pole, and multiple roller covers for different textures.',
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop',
        features: ['Lint Free', 'Extension Pole', 'Multiple Covers'],
        inStock: true,
        rating: 4.7,
        category: 'paint'
      },
      {
        id: 27,
        name: 'Wall Putty 20Kg',
        brand: 'Birla White, JK, Asian',
        description: 'White cement-based wall putty for smooth finish. Excellent adhesion and crack resistance.',
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=300&fit=crop',
        features: ['Crack Resistant', 'White Finish', 'Easy Application'],
        inStock: true,
        rating: 4.8,
        category: 'paint'
      },
      {
        id: 28,
        name: 'Wood Primer & Enamel',
        brand: 'Asian Paints, Berger',
        description: 'Premium wood primer and enamel paint for furniture and doors. High gloss durable finish.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        features: ['High Gloss', 'Quick Dry', 'Scratch Resistant'],
        inStock: true,
        rating: 4.6,
        category: 'paint'
      },
    ],
  },
  {
    id: 'safety',
    title: 'Safety Equipment',
    icon: Shield,
    description: 'Industrial safety gear for workplace protection',
    products: [
      {
        id: 29,
        name: 'Safety Helmet',
        brand: 'Karam, 3M, Safari',
        description: 'ISI certified industrial safety helmet with adjustable headband. Impact resistant ABS shell.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
        features: ['ISI Certified', 'Ventilated', 'Adjustable'],
        inStock: true,
        rating: 4.7,
        category: 'safety'
      },
      {
        id: 30,
        name: 'Safety Goggles',
        brand: '3M, Honeywell, Karam',
        description: 'Anti-fog safety goggles with UV protection. Comfortable fit for extended wear.',
        image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=400&h=300&fit=crop',
        features: ['Anti-Fog', 'UV Protection', 'Scratch Resistant'],
        inStock: true,
        rating: 4.6,
        category: 'safety'
      },
      {
        id: 31,
        name: 'Cut Resistant Gloves',
        brand: 'Karam, Honeywell',
        description: 'Level 5 cut resistant gloves with rubber grip. Ideal for handling sharp materials.',
        image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?w=400&h=300&fit=crop',
        features: ['Level 5 Protection', 'Rubber Grip', 'Washable'],
        inStock: true,
        rating: 4.8,
        category: 'safety'
      },
      {
        id: 32,
        name: 'Safety Shoes',
        brand: 'Bata, Woodland, Safari',
        description: 'Steel toe safety shoes with anti-slip sole. Comfortable for all-day wear on site.',
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=300&fit=crop',
        features: ['Steel Toe', 'Anti-Slip', 'Oil Resistant'],
        inStock: true,
        rating: 4.7,
        category: 'safety'
      },
      {
        id: 33,
        name: 'Reflective Safety Vest',
        brand: '3M, Safari, Supreme',
        description: 'High visibility reflective vest with adjustable straps. EN471 certified for road work.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
        features: ['High Visibility', 'Adjustable', 'Breathable Mesh'],
        inStock: true,
        rating: 4.5,
        category: 'safety'
      },
      {
        id: 34,
        name: 'Ear Protection Muffs',
        brand: '3M, Honeywell',
        description: 'Industrial ear muffs with NRR 25dB rating. Foldable design for easy storage.',
        image: 'https://images.unsplash.com/photo-1590935217281-8f102120d683?w=400&h=300&fit=crop',
        features: ['NRR 25dB', 'Foldable', 'Cushioned Pads'],
        inStock: true,
        rating: 4.6,
        category: 'safety'
      },
    ],
  },
];

// ============================================
// PRODUCTS PAGE COMPONENT
// ============================================

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // WhatsApp Owner Number
  const WHATSAPP_NUMBER = '916306459098';

  // Open WhatsApp with product details
  const openWhatsAppEnquiry = (product: Product) => {
    const message = `
Hello Ammaji Electricals! 👋

I'm interested in this product:

📦 *Product Name:* ${product.name}
🏷️ *Brand:* ${product.brand}
📝 *Description:* ${product.description}

Please share the price and availability.

Thank you!
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  // Filter products based on search and category
  const getFilteredProducts = () => {
    let allProducts: Product[] = [];
    
    productCategories.forEach(category => {
      if (activeCategory === 'all' || activeCategory === category.id) {
        allProducts = [...allProducts, ...category.products];
      }
    });

    if (searchQuery) {
      allProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return allProducts;
  };

  const filteredProducts = getFilteredProducts();

  // Render star rating
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* ==================== HERO SECTION ==================== */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <Badge className="mb-4 bg-yellow-500 text-black font-semibold px-4 py-1">
                5000+ Products In Stock
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Quality Products for
                <span className="text-yellow-400 block mt-2">Every Project</span>
              </h1>
              <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-8">
                Shop from India's most trusted brands in electrical, hardware, plumbing & safety equipment
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search products, brands, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-full border-0 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CATEGORY FILTER ==================== */}
        <section className="py-8 bg-white border-b sticky top-0 z-40 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={activeCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setActiveCategory('all')}
                  className="rounded-full"
                >
                  <Package className="w-4 h-4 mr-2" />
                  All Products
                </Button>
                {productCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setActiveCategory(category.id)}
                    className="rounded-full"
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.title}
                  </Button>
                ))}
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PRODUCTS GRID ==================== */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
              </p>
            </div>

            {/* Grid View */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop';
                        }}
                      />
                      {product.inStock && (
                        <Badge className="absolute top-3 left-3 bg-green-500">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          In Stock
                        </Badge>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      <div className="mb-3">
                        {renderRating(product.rating)}
                      </div>
                      
                      <h3 className="font-heading font-bold text-lg text-gray-900 mb-1 line-clamp-1">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-blue-600 font-medium mb-2">
                        {product.brand}
                      </p>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* Enquire Button */}
                      <Button
                        onClick={() => openWhatsAppEnquiry(product)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 rounded-xl"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* List View */}
            {viewMode === 'list' && (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
                  >
                    {/* Product Image */}
                    <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop';
                        }}
                      />
                      {product.inStock && (
                        <Badge className="absolute top-3 left-3 bg-green-500">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          In Stock
                        </Badge>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-heading font-bold text-xl text-gray-900 mb-1">
                              {product.name}
                            </h3>
                            <p className="text-blue-600 font-medium">
                              {product.brand}
                            </p>
                          </div>
                          {renderRating(product.rating)}
                        </div>
                        
                        <p className="text-muted-foreground mb-4">
                          {product.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.features.map((feature, index) => (
                            <Badge key={index} variant="secondary">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Enquire Button */}
                      <Button
                        onClick={() => openWhatsAppEnquiry(product)}
                        className="bg-green-600 hover:bg-green-700 text-white gap-2 w-full md:w-auto"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Enquire on WhatsApp
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter to find what you're looking for
                </p>
                <Button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">
                  Can't find what you need?
                </h2>
                <p className="text-black/80 max-w-xl text-lg">
                  We stock over <strong>5000+ products</strong>. Contact us for specific requirements, bulk orders, or special items.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:6306459098">
                  <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-semibold rounded-full px-8">
                    📞 Call: 6306459098
                  </Button>
                </a>
                <a href={`https://wa.me/916306459098?text=${encodeURIComponent("Hi! I need a product that's not listed on your website.")}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold rounded-full px-8">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TRUST BADGES ==================== */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: '✅', label: 'Genuine Products', desc: '100% Authentic' },
                { icon: '🚚', label: 'Fast Delivery', desc: 'Same Day Available' },
                { icon: '💰', label: 'Best Prices', desc: 'Wholesale Rates' },
                { icon: '🛡️', label: 'Warranty', desc: 'Manufacturer Warranty' },
              ].map((badge, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <h4 className="font-semibold text-gray-900">{badge.label}</h4>
                  <p className="text-sm text-muted-foreground">{badge.desc}</p>
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

export default Products;