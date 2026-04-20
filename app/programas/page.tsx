import React from 'react';

export default function ProgramasPage() {
  const hitos = [
    { year: '2023', title: 'Plan de Digitalización', desc: 'Inicio de la modernización de registros clínicos.' },
    { year: '2024', title: 'Nuevos CESFAM', desc: 'Inauguración de infraestructura en sectores rurales.' },
    { year: '2025', title: 'Prevención VIH - PrEP', desc: 'Lanzamiento del programa de prevención masiva.' },
    { year: '2026', title: 'Salud 100% Digital', desc: 'Meta de telemedicina y agendamiento total.' }
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="bg-black py-24 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <span className="text-primary-gold font-black text-xs uppercase tracking-[0.2em] mb-4 inline-block">Plan Estratégico</span>
          <h1 className="text-5xl font-black">Nuestra Gestión</h1>
        </div>
      </div>

      <section className="py-24 max-w-4xl mx-auto px-8">
        <div className="space-y-12">
          {hitos.map((h, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-black border-2 border-primary-gold flex items-center justify-center text-primary-gold font-black text-xl group-hover:bg-primary-red group-hover:border-primary-red group-hover:text-white transition-all shadow-xl">
                  {h.year.slice(2)}
                </div>
                {i !== hitos.length - 1 && <div className="w-1 h-full bg-slate-100 my-4"></div>}
              </div>
              <div className="pb-12 border-b border-slate-50 w-full">
                <h3 className="text-2xl font-black text-black mb-3">{h.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
