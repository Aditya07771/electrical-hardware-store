import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Categories from '@/components/Categories';
import Brands from '@/components/Brands';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <Brands />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
