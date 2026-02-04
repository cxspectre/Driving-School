
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Hoe werkt het?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-8">Jouw weg naar het roze pasje</h2>
          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex relative group">
                {/* Connector line */}
                {index !== PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-blue-100 group-hover:bg-blue-200 transition-colors"></div>
                )}
                
                <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600 z-10 transition-transform group-hover:scale-110">
                  {index + 1}
                </div>
                
                <div className="ml-8 pb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/2 bg-blue-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative car icon background */}
          <div className="absolute -right-10 -bottom-10 opacity-10 transform -rotate-12">
            <i className="fas fa-car text-[200px]"></i>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Klaar voor de start?</h3>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Begin vandaag nog met je proefles en ervaar onze persoonlijke aanpak. In Gouda en omstreken zijn wij jouw partner op de weg.
          </p>
          
          <ul className="space-y-4 mb-10">
            <li className="flex items-center space-x-3">
              <i className="fas fa-check-circle text-blue-300"></i>
              <span>Geen wachtlijst</span>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fas fa-check-circle text-blue-300"></i>
              <span>Lestijden in overleg</span>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fas fa-check-circle text-blue-300"></i>
              <span>Moderne lesauto</span>
            </li>
          </ul>
          
          <a href="#contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg transform hover:-translate-y-1">
            Meld je direct aan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Process;
