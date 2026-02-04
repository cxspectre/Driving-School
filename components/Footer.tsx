
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg text-slate-900">Autorijschool Sediki</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Jouw professionele partner op de weg in Gouda en omstreken. Veiligheid, rust en kwaliteit voor elke leerling.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-pink-600 hover:border-pink-600 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Navigatie</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#over-ons" className="hover:text-blue-600 transition-colors">Over ons</a></li>
              <li><a href="#pakketten" className="hover:text-blue-600 transition-colors">Lespakketten</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt w-5 text-blue-600"></i>
                <span>Gouda, Zuid-Holland</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone w-5 text-blue-600"></i>
                <span>06 0000 0000</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope w-5 text-blue-600"></i>
                <span>info@autorijschoolsediki.nl</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Openingstijden</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex justify-between">
                <span>Ma - Vr:</span>
                <span className="font-medium">08:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Zaterdag:</span>
                <span className="font-medium">09:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Zondag:</span>
                <span className="font-medium text-slate-400">Gesloten</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Autorijschool Sediki. Alle rechten voorbehouden.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600 transition-colors">Algemene voorwaarden</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
