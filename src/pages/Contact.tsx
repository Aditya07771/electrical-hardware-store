import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MapPin, Phone, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = encodeURIComponent(
      `*New Inquiry from Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}`
    );
    
    window.open(`https://wa.me/916306459098?text=${message}`, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your inquiry will be sent via WhatsApp for faster response.",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'General Inquiry',
      message: '',
    });
  };

  const whatsappMessage = encodeURIComponent("Hi! I'm interested in your products at Ammaji Electricals.");

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
              We'd love to hear from you. Visit our store or reach out to us!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Send Us a <span className="text-primary">Message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone"
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email (Optional)
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option>General Inquiry</option>
                      <option>Product Query</option>
                      <option>Bulk Order</option>
                      <option>Price Quote</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you need..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 h-12">
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
                  </Button>
                </form>
              </div>

              {/* Contact Info & Map */}
              <div className="order-1 lg:order-2">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Visit Our <span className="text-primary">Store</span>
                </h2>
                
                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] mb-8">
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

                {/* Contact Cards */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Store Address</h3>
                      <p className="text-muted-foreground text-sm">
                        361/1, Chandan Layout, Gaddige Main Road,<br />
                        Bogadi, Mysore - 570026, Karnataka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:6306459098" className="text-primary font-semibold hover:underline">
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
                      <p className="text-muted-foreground text-sm">
                        Mon - Sat: 9:00 AM - 8:00 PM<br />
                        Sunday: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
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
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
