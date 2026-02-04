
import React from 'react';
import { PACKAGES } from '../constants';

const Packages: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4 block">Investering</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Kies jouw tempo.</h2>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
          Duidelijke prijzen, geen verborgen kosten. Elk pakket is inclusief onze premium begeleiding en toegang tot de leerling-app.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 items-stretch">
        {PACKAGES.map((pkg, index) => (
          <div 
            key={index} 
            className={`relative p-10 rounded-[2.5rem] border-2 transition-all duration-500 flex flex-col h-full bg-white group ${
              pkg.recommended 
              ? 'border-blue-600 shadow-[0_32px_64px_-15px_rgba(37,99,235,0.15)] scale-105 z-10' 
              : 'border-slate-100 shadow-sm hover:border-slate-300'
            }`}
          >
            {pkg.recommended && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                Beste Keuze
              </div>
            )}
            
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6">{pkg.name}</h3>
            
            <div className="flex flex-col mb-10">
              <span className="text-5xl font-black text-slate-900 mb-1">{pkg.price}</span>
              <span className="text-slate-400 font-bold text-sm tracking-wide uppercase">Totaal pakket</span>
            </div>
            
            <div className="flex items-center space-x-3 mb-8 p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                <i className="fas fa-clock"></i>
              </div>
              <span className="font-bold text-slate-900">{pkg.lessons} x 60 minuten</span>
            </div>
            
            <ul className="space-y-5 mb-12 flex-grow">
              {pkg.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start text-sm font-semibold text-slate-600">
                  <i className={`fas ${pkg.recommended ? 'fa-circle-check text-blue-600' : 'fa-check text-slate-300'} mt-0.5 mr-4 text-lg`}></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contact" 
              className={`w-full py-5 rounded-2xl font-black text-center transition-all tracking-wide uppercase text-sm ${
                pkg.recommended 
                  ? 'bg-blue-600 text-white hover:bg-slate-900 shadow-lg shadow-blue-200' 
                  : 'bg-slate-900 text-white hover:bg-blue-600'
              }`}
            >
              Meld je aan
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 p-8 rounded-3xl bg-slate-900 text-white">
        <div className="flex -space-x-2">
          <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-amber-400 flex items-center justify-center font-bold">A</div>
          <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-500 flex items-center justify-center font-bold">B</div>
        </div>
        <p className="font-bold text-center md:text-left">Betaal in 3 termijnen zonder extra kosten. <span className="text-blue-400 underline ml-2 cursor-pointer">Hoe werkt het?</span></p>
      </div>
    </div>
  );
};

export default Packages;
