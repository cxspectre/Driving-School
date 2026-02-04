
import React from 'react';

const SEOBlock: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-slate-900 mb-4 underline decoration-blue-600 decoration-2 underline-offset-4">
            Dé Rijschool in Gouda en omstreken
          </h2>
          <div className="text-slate-600 text-sm leading-relaxed space-y-4">
            <p>
              Zoek je een betrouwbare <strong>rijschool in Gouda</strong>? Autorijschool Sediki verzorgt professionele autorijlessen in Gouda, Reeuwijk, Waddinxveen, Haastrecht en Stolwijk. Of je nu je rijbewijs snel wilt halen met een intensieve cursus of liever op je gemak leert autorijden, wij bieden de beste begeleiding voor elk type leerling.
            </p>
            <p>
              Onze focus ligt op een hoge kwaliteit van de <strong>autorijles in Gouda</strong>. We kennen de examenroutes van het CBR in Gouda als geen ander, waardoor we je gericht kunnen voorbereiden op de situaties die je tijdens je praktijkexamen tegenkomt. Met onze moderne lesauto en geduldige instructeur haal jij gegarandeerd met plezier je rijbewijs.
            </p>
            <p>
              Direct beginnen met <strong>rijles in Gouda</strong>? Meld je aan voor een proefles en ontdek waarom wij de favoriete keuze zijn van studenten uit de regio Zuid-Holland.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-4 text-center">Wij lessen o.a. in:</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-blue-600 font-medium">
            <li><i className="fas fa-map-marker-alt mr-2 text-slate-300"></i> Gouda</li>
            <li><i className="fas fa-map-marker-alt mr-2 text-slate-300"></i> Reeuwijk</li>
            <li><i className="fas fa-map-marker-alt mr-2 text-slate-300"></i> Waddinxveen</li>
            <li><i className="fas fa-map-marker-alt mr-2 text-slate-300"></i> Haastrecht</li>
            <li><i className="fas fa-map-marker-alt mr-2 text-slate-300"></i> Stolwijk</li>
            <li><i className="fas fa-map-marker-alt mr-2 text-slate-300"></i> Moordrecht</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SEOBlock;
