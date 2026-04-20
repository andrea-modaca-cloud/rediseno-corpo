import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  { 
    title: 'Villa Alemana se convierte en la primera comuna con estrategia PrEP en APS', 
    date: '22 Mar, 2026', 
    category: 'Salud',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800'
  },
  { 
    title: 'Nuevos laboratorios de tecnología en liceos municipales refuerzan educación técnica', 
    date: '19 Mar, 2026', 
    category: 'Educación',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800'
  },
  { 
    title: 'Corporación Municipal inicia proceso de acreditación de calidad en todos sus CESFAM', 
    date: '15 Mar, 2026', 
    category: 'Salud',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800'
  }
];

const pressRelease = {
  title: 'CMVA lanza programa de Modernización Digital 2026',
  excerpt: 'La iniciativa busca digitalizar el 100% de los trámites de salud y educación para facilitar el acceso a los vecinos de la comuna.',
  date: '24 Mar, 2026',
  type: 'Nota de Prensa Oficial'
};

export default function NewsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Press Release Featured */}
        <div className="mb-20 bg-black rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-slate-200">
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 text-primary-gold font-black text-xs uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-gold animate-pulse"></span>
              {pressRelease.type}
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
              {pressRelease.title}
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              {pressRelease.excerpt}
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-black hover:bg-primary-red hover:text-white transition-all group flex items-center gap-2">
                Leer Nota Completa
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-slate-500 font-bold text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {pressRelease.date}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-slate-800 relative min-h-[400px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>

        {/* Regular News Grid */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-black text-black mb-4">Actualidad CMVA</h2>
            <p className="text-slate-500 max-w-xl font-medium">
              Explora las noticias más relevantes sobre nuestra gestión institucional en Salud y Educación.
            </p>
          </div>
          <button className="text-primary-red font-black flex items-center gap-2 hover:gap-4 transition-all whitespace-nowrap">
            Ver todas las noticias <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {news.map((item, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 relative shadow-lg shadow-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-primary-red shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-3 text-slate-400 font-bold text-[11px] mb-4 uppercase tracking-widest">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <h3 className="text-2xl font-black text-black leading-tight group-hover:text-primary-red transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
