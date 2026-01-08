import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden hero-gradient min-h-[90vh] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Spark decorations */}
        <Zap className="absolute top-32 right-1/4 w-8 h-8 text-accent/30 animate-spark" />
        <Zap className="absolute bottom-40 left-1/4 w-6 h-6 text-accent/20 animate-spark" style={{ animationDelay: '0.5s' }} />
        <Zap className="absolute top-1/2 right-20 w-10 h-10 text-accent/25 animate-spark" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8 animate-slide-up">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Trusted Since 2010</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-secondary-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Powering Mysore's
            <span className="block mt-2">
              <span className="text-gradient">Homes & Dreams</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Your One-Stop Shop for Quality Electricals & Hardware. From a single switch to complete home wiring solutions, we've got everything you need under one roof.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 rounded-full px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold rounded-full px-8 h-14 text-lg backdrop-blur-sm">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">15+</div>
              <div className="text-sm text-secondary-foreground/70">Years Trust</div>
            </div>
            <div className="text-center border-x border-secondary-foreground/20">
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">5000+</div>
              <div className="text-sm text-secondary-foreground/70">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">50+</div>
              <div className="text-sm text-secondary-foreground/70">Brands</div>
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
