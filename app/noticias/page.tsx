import React from 'react';

export default function NoticiasPage() {
  const posts = [
    { title: 'Primera comuna con PrEP APS', date: '22 Mar, 2026', cat: 'Salud' },
    { title: 'Acreditación CESFAM', date: '19 Mar, 2026', cat: 'Calidad' },
    { title: 'Nuevo CESFAM Santa Julia', date: '15 Mar, 2026', cat: 'Infraestructura' },
    { title: 'Jornada de vacunación masiva', date: '10 Mar, 2026', cat: 'Operativos' },
    { title: 'Capacitación equipos salud', date: '05 Mar, 2026', cat: 'Personal' },
    { title: 'Día de la Salud Primaria', date: '28 Feb, 2026', cat: 'Institucional' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">Prensa y Noticias</h1>
            <p className="text-slate-500">Mantente al día con las últimas novedades de la CMVA.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors">Todos</button>
            <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">Salud</button>
            <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">Educación</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider text-primary-blue shadow-sm">
                  {p.cat}
                </div>
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase">{p.date}</p>
              <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-primary-blue transition-colors">
                {p.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
