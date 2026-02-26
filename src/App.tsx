import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { FeaturedWork } from './components/layout/FeaturedWork';
import { PhotographySection } from './components/layout/PhotographySection';
import { Services } from './components/layout/Services';
import { Process } from './components/layout/Process';
import { About } from './components/layout/About';
import { Testimonials } from './components/layout/Testimonials';
import { Contact } from './components/layout/Contact';
import { Footer } from './components/layout/Footer';
import { FloatingQuoteButton } from './components/ui/FloatingQuoteButton';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <FeaturedWork />
        <PhotographySection />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingQuoteButton />
    </div>
  );
}

export default App;
