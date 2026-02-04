
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#FDFDFF]">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blob"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-amber-50 rounded-full blob"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-slate-900 text-white px-4 py-1.5 rounded-full mb-8 font-semibold text-xs tracking-wider uppercase">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>Nu plekken vrij in Gouda</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
            Word de baas op <br />
            <span className="text-blue-600 underline decoration-amber-400 decoration-4 underline-offset-8">de weg.</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
            Rijles bij Sediki is geen 'lesje', het is een investering in levenslange veiligheid. Persoonlijk, relaxed en resultaatgericht.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#contact" 
              className="group bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-center hover:bg-slate-800 transition-all shadow-2xl flex items-center justify-center space-x-3 overflow-hidden relative"
            >
              <span className="relative z-10">Start je Proefles</span>
              <i className="fas fa-arrow-right relative z-10 group-hover:translate-x-1 transition-transform"></i>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a 
              href="#pakketten" 
              className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold text-center hover:border-slate-900 transition-all flex items-center justify-center"
            >
              Bekijk Pakketten
            </a>
          </div>

          <div className="mt-16 flex items-center space-x-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-white shadow-sm" 
                  src={`https://i.pravatar.cc/150?u=${i}`} 
                  alt="Student" 
                />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-amber-400 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                +400
              </div>
            </div>
            <div>
              <div className="flex text-amber-500 text-xs mb-1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-sm font-bold text-slate-900">4.9/5 op Google Reviews</p>
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="relative z-20 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
              alt="Premium Driving Experience" 
              className="rounded-[2rem] w-full h-[500px] object-cover"
            />
            {/* Floating Glass Card */}
            <div className="absolute -left-12 bottom-12 glass p-6 rounded-3xl shadow-xl animate-bounce-slow max-w-[200px]">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  <i className="fas fa-check"></i>
                </div>
                <span className="font-bold text-slate-900 text-sm">Geslaagd!</span>
              </div>
              <p className="text-xs text-slate-500 leading-tight">Lucas haalde gisteren zijn rijbewijs in één keer!</p>
            </div>
          </div>
          {/* Decorative background shapes */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-100 rounded-full -z-10 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
