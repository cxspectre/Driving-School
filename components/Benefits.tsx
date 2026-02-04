
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Niet zomaar een <br />
            <span className="text-blue-600">rijschool.</span>
          </h2>
        </div>
        <p className="text-slate-500 max-w-sm font-medium">
          Wij hebben de traditionele rijles opnieuw uitgevonden met focus op persoonlijke psychologie en moderne verkeersinzichten.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Bento Card */}
        <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden bento-card group">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/40 transition-all duration-700"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
              <i className="fas fa-brain text-2xl text-amber-400"></i>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Focus op Rij-Psychologie</h3>
              <p className="text-slate-400 max-w-md text-lg">
                We kijken verder dan alleen de pedalen. We trainen je in verkeersinzicht en rust, zodat je ook na je examen met 100% vertrouwen rijdt.
              </p>
            </div>
          </div>
        </div>

        {/* Small Bento Card */}
        <div className="bg-amber-400 rounded-[2.5rem] p-10 text-slate-900 bento-card flex flex-col justify-between">
          <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center mb-8">
            <i className="fas fa-map-location-dot text-2xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Gouda Specialist</h3>
            <p className="text-slate-800/70 font-medium">
              Geen examenverrassingen. Wij trainen op de exacte routes van het CBR Gouda.
            </p>
          </div>
        </div>

        {/* Medium Bento Card */}
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm bento-card flex flex-col justify-between">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
            <i className="fas fa-calendar-check text-2xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Flexibele Regie</h3>
            <p className="text-slate-500 font-medium">
              Jij bepaalt het tempo. Plan je lessen via onze app of direct bij je instructeur.
            </p>
          </div>
        </div>

        {/* Medium Bento Card 2 */}
        <div className="md:col-span-2 bg-blue-600 rounded-[2.5rem] p-10 text-white bento-card group relative overflow-hidden">
          <div className="absolute -left-10 top-0 w-32 h-full bg-white/5 skew-x-12"></div>
          <div className="flex flex-col md:flex-row gap-8 items-center h-full">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-car-side text-4xl"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Moderne Lesvoertuigen</h3>
              <p className="text-blue-100/80 font-medium">
                Rij in de nieuwste modellen uitgerust met alle veiligheidssystemen en hulpmiddelen. Comfortabel en veilig leren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
