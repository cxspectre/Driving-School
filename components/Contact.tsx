
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Contact Info */}
        <div className="md:w-2/5 p-10 lg:p-16 text-white bg-slate-900">
          <h2 className="text-3xl font-bold mb-6">Neem contact op</h2>
          <p className="text-slate-400 mb-10">
            Vragen over onze pakketten of wil je direct een proefles inplannen? We horen graag van je.
          </p>
          
          <div className="space-y-8">
            <a href="tel:+31600000000" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <p className="text-sm text-slate-400">Bel ons direct</p>
                <p className="font-bold text-lg">06 0000 0000</p>
              </div>
            </a>
            
            <a href="https://wa.me/31600000000" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                <i className="fab fa-whatsapp text-xl"></i>
              </div>
              <div>
                <p className="text-sm text-slate-400">Stuur een WhatsApp</p>
                <p className="font-bold text-lg">Snelle reactie</p>
              </div>
            </a>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className="text-sm text-slate-400">E-mail ons</p>
                <p className="font-bold text-lg underline decoration-blue-600">info@autorijschoolsediki.nl</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="md:w-3/5 p-10 lg:p-16 bg-white">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Voornaam</label>
                <input 
                  type="text" 
                  placeholder="Bijv. Jan"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Achternaam</label>
                <input 
                  type="text" 
                  placeholder="Jansen"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">E-mailadres</label>
              <input 
                type="email" 
                placeholder="uw@email.nl"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Type aanvraag</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none bg-white">
                <option>Proefles aanvragen</option>
                <option>Vraag over pakketten</option>
                <option>Algemene vraag</option>
                <option>Terugbelverzoek</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Bericht (optioneel)</label>
              <textarea 
                rows={4} 
                placeholder="Hoe kunnen we je helpen?"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none resize-none"
              ></textarea>
            </div>
            
            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
              Verstuur aanvraag
            </button>
            <p className="text-center text-xs text-slate-400">
              We nemen binnen 24 uur contact met je op.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
