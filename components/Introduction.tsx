
import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Kwaliteit en persoonlijke aandacht staan centraal
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-left items-center">
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Bij Autorijschool Sediki staat één ding voorop: dat jij met een veilig en zelfverzekerd gevoel de weg op gaat. Als kleinschalige rijschool in Gouda bieden wij de rust en persoonlijke aandacht die nodig is om je rijbewijs op een prettige manier te halen.
            </p>
            <p>
              Of je nu voor het eerst achter het stuur stapt of al wat ervaring hebt, wij stemmen onze lessen af op jouw tempo en leerstijl. Geen haastwerk, maar degelijke instructies die blijven hangen.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-inner">
            <blockquote className="italic text-slate-700 mb-4 text-lg">
              "Mijn doel is niet alleen om je te laten slagen voor je examen, maar om van jou een bewuste en veilige verkeersdeelnemer te maken."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-user text-blue-600"></i>
              </div>
              <div>
                <p className="font-bold text-slate-900">M. Sediki</p>
                <p className="text-sm text-slate-500">Eigenaar & Instructeur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
