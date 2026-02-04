
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Wat leerlingen zeggen</h2>
        <div className="flex justify-center items-center space-x-1 text-yellow-400">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <span className="text-slate-900 font-bold ml-2">4.9 / 5 sterren op Google</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <i key={i} className="fas fa-star text-sm"></i>
              ))}
            </div>
            <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-xs text-slate-500">{testimonial.date}</p>
              </div>
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
