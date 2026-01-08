import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-105 transition-transform">
                {/* <Zap className="w-7 h-7 text-accent animate-spark" /> */}
                <img src="./ammaji_logo.png" alt="logo" className='w-8 h-8 text-accent'/>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-secondary leading-tight">Ammaji</span>
              <span className="text-xs text-muted-foreground font-medium">Electricals & Hardware</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative py-2 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Call Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:6306459098">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 rounded-full px-6">
                <Phone className="w-4 h-4" />
                6306459098
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80 hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:6306459098" className="mt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now: 6306459098
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
