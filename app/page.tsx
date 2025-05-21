import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { Templates } from '@/components/landing/templates';
import { Testimonials } from '@/components/landing/testimonials';
import { FAQ } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';
import { Navbar } from '@/components/landing/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Templates />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}