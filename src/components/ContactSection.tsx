import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in your products at Ammaji Electricals.");
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Our <span className="text-primary">Store</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Come visit us at our store in Bogadi, Mysore
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.8559!2d76.6!3d12.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE4JzAwLjAiTiA3NsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Store Address</h3>
                <p className="text-muted-foreground">
                  361/1, Chandan Layout,<br />
                  Gaddige Main Road, Bogadi,<br />
                  Mysore - 570026, Karnataka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:6306459098" className="text-primary font-semibold text-lg hover:underline">
                  6306459098
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Working Hours</h3>
                <p className="text-muted-foreground">
                  Mon - Sat: 9:00 AM - 8:00 PM<br />
                  Sunday: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a href="tel:6306459098" className="flex-1">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold gap-2 h-12">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <a 
                href={`https://wa.me/916306459098?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold gap-2 h-12">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
