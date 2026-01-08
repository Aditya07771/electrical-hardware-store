import { Link } from 'react-router-dom';
import { Zap, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-secondary-foreground">Ammaji</span>
                <span className="text-xs text-secondary-foreground/70">Electricals & Hardware</span>
              </div>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for quality electrical and hardware products in Mysore since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'Services', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {['Wiring & Cables', 'Switches & Sockets', 'LED Lighting', 'Power Tools', 'Plumbing', 'Safety Equipment'].map((product) => (
                <li key={product}>
                  <Link 
                    to="/products"
                    className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <span className="text-secondary-foreground/80 text-sm">
                  361/1, Chandan Layout, Gaddige Main Road, Bogadi, Mysore - 570026
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:6306459098" className="text-secondary-foreground/80 hover:text-accent text-sm">
                  6306459098
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  Mon-Sat: 9AM-8PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © 2024 Ammaji Electricals & Hardware. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-secondary-foreground/60 hover:text-accent text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-foreground/60 hover:text-accent text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
