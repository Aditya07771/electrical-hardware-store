import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Award, Shield, Zap, Package, Clock, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="./hero-store.png"
          alt="Ammaji Hardware & Electricals Store" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Spark decorations */}
        <Zap className="absolute top-32 right-1/4 w-8 h-8 text-accent/40 animate-spark" />
        <Zap className="absolute bottom-40 left-1/4 w-6 h-6 text-primary/30 animate-spark" style={{ animationDelay: '0.7s' }} />
        <Zap className="absolute top-1/2 right-20 w-10 h-10 text-accent/35 animate-spark" style={{ animationDelay: '1.4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 mb-8 animate-slide-up backdrop-blur-sm">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Established 2023 • Mysore</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up leading-tight drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">Your Trusted Partner for</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-md">
              Quality Electricals & Hardware
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl animate-slide-up leading-relaxed drop-shadow-md font-medium" style={{ animationDelay: '0.2s' }}>
            From a single switch to complete home wiring solutions — discover 5000+ products from 50+ trusted brands, all under one roof.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/products">
              <Button size="lg" className="primary-gradient text-white font-semibold gap-2 rounded-full px-8 h-14 text-lg glow-shadow hover:scale-105 transition-all duration-300 shadow-lg">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:6306459098">
              <Button size="lg" className="bg-white text-secondary font-semibold rounded-full px-8 h-14 text-lg gap-2 transition-all duration-300 group hover:bg-white/90 shadow-lg">
                <Phone className="w-5 h-5 group-hover:animate-ring text-primary" />
                Call Us Now
              </Button>
            </a>
          </div>

          {/* ============================================ */}
          {/* FIXED TRUST INDICATORS - VERSION 1: Glass Card */}
          {/* ============================================ */}
          {/* TRUST INDICATORS - VERSION 3: Minimal */}
{/* Trust Indicators - Single Line Mobile */}
<div 
  className="mt-10 animate-slide-up" 
  style={{ animationDelay: '0.4s' }}
>
  <div 
    className="flex items-center gap-4 sm:gap-8 overflow-x-auto scrollbar-hide pb-2"
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
  >
    {/* Years Trust */}
    <div className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-accent group-hover:bg-accent/30 transition-all duration-300">
        <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-accent" />
      </div>
      <div>
        <div className="text-xl sm:text-3xl md:text-4xl font-heading font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          15+
        </div>
        <div className="text-xs sm:text-sm text-white font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] whitespace-nowrap">
          Years Trust
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="w-px h-10 sm:h-16 bg-white/30 flex-shrink-0" />

    {/* Products */}
    <div className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary group-hover:bg-primary/30 transition-all duration-300">
        <Package className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
      </div>
      <div>
        <div className="text-xl sm:text-3xl md:text-4xl font-heading font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          5000+
        </div>
        <div className="text-xs sm:text-sm text-white font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] whitespace-nowrap">
          Products
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="w-px h-10 sm:h-16 bg-white/30 flex-shrink-0" />

    {/* Brands */}
    <div className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-accent group-hover:bg-accent/30 transition-all duration-300">
        <Building2 className="w-5 h-5 sm:w-7 sm:h-7 text-accent" />
      </div>
      <div>
        <div className="text-xl sm:text-3xl md:text-4xl font-heading font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          50+
        </div>
        <div className="text-xs sm:text-sm text-white font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] whitespace-nowrap">
          Brands
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;