import React from 'react';

export default function ProgramasPage() {
  const hitos = [
    { year: '2023', title: 'Plan de Digitalización', desc: 'Inicio de la modernización de registros clínicos.' },
    { year: '2024', title: 'Nuevos CESFAM', desc: 'Inauguración de infraestructura en sectores rurales.' },
    { year: '2025', title: 'Prevención VIH - PrEP', desc: 'Lanzamiento del programa de prevención masiva.' },
    { year: '2026', title: 'Salud 100% Digital', desc: 'Meta de telemedicina y agendamiento total.' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-primary-green py-20 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-4xl font-black mb-4">Programas Estratégicos</h1>
          <p className="text-green-500 bg-white/10 inline-block px-4 py-1 rounded text-sm font-bold mb-4">Gestión 2023-2026</p>
        </div>
      </div>

      <section className="py-20 max-w-4xl mx-auto px-8">
        <div className="space-y-12">
          {hitos.map((h, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary-green flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform shadow-lg">
                  {h.year.slice(2)}
                </div>
                {i !== hitos.length - 1 && <div className="w-1 h-full bg-slate-100 my-2"></div>}
              </div>
              <div className="pb-12 border-b border-slate-50 w-full">
                <h3 className="text-xl font-black text-gray-900 mb-2">{h.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
