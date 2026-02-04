
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Onze Aanpak', href: '#waarom-wij' },
    { name: 'Pakketten', href: '#pakketten' },
    { name: 'Stappenplan', href: '#proces' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 px-6 py-4`}>
      <div className={`container mx-auto max-w-6xl transition-all duration-500 ${scrolled ? 'glass rounded-full px-8 py-3 shadow-2xl translate-y-2' : 'bg-transparent py-4'}`}>
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <span className="text-white font-black text-xl">S</span>
            </div>
            <span className={`font-extrabold text-xl tracking-tighter text-slate-900`}>
              SED<span className="text-blue-600">IKI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-slate-900 font-bold text-sm tracking-wide transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200"
            >
              Gratis Intake
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars-staggered'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-500 flex flex-col items-center justify-center ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <button 
          className="absolute top-8 right-8 text-3xl"
          onClick={() => setIsOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-4xl font-black text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl"
            onClick={() => setIsOpen(false)}
          >
            Gratis Intake
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
