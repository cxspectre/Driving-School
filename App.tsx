
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Benefits from './components/Benefits';
import Packages from './components/Packages';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import SEOBlock from './components/SEOBlock';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="over-ons" className="bg-white">
          <Introduction />
        </section>

        <section id="waarom-wij" className="bg-gray-50 py-20">
          <Benefits />
        </section>

        <section id="pakketten" className="bg-white py-20">
          <Packages />
        </section>

        <section id="proces" className="bg-gray-50 py-20">
          <Process />
        </section>

        <section className="bg-white py-20">
          <Testimonials />
        </section>

        <section className="bg-gray-50 border-t border-b border-gray-200">
          <SEOBlock />
        </section>

        <section id="contact" className="bg-white py-20">
          <Contact />
        </section>
      </main>
      <Footer />
      {/* Mobile Floating CTA */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <a 
          href="https://wa.me/31600000000" 
          className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all"
          aria-label="Contact via WhatsApp"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
