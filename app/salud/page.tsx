import React from 'react';

export default function SaludPage() {
  const centros = [
    { name: 'CESFAM Lusitania', addr: 'Calle Bellavista 1228, Miraflores', status: 'Acreditado' },
    { name: 'CESFAM Prof. Eugenio Cienfuegos', addr: 'Av. El Sauce s/n', status: 'Acreditado' },
    { name: 'CESFAM Dr. Juan Carlos Baeza', addr: 'Calle Limache 1490', status: 'En Proceso' },
    { name: 'CESFAM Gómez Carreño', addr: 'Av. Gómez Carreño s/n', status: 'En Proceso' }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-black py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-red/10 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <h1 className="text-5xl font-black mb-6">Salud Pública</h1>
          <p className="text-slate-400 max-w-2xl text-lg font-medium">
            Gestionamos la Red de Atención Primaria de Salud de la comuna, brindando servicios de calidad y cercanía a todos nuestros vecinos.
          </p>
        </div>
      </div>

      <section className="py-24 max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl font-black text-black">Centros de Salud Familiar (CESFAM)</h2>
          <span className="text-primary-red font-bold text-sm uppercase tracking-widest cursor-pointer hover:underline">Ver todos en mapa →</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {centros.map((c, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-black text-black group-hover:text-primary-red transition-colors">{c.name}</h3>
                  <p className="text-sm text-slate-500 mt-2 font-medium flex items-center gap-2">📍 {c.addr}</p>
                </div>
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${c.status === 'Acreditado' ? 'bg-green-100 text-green-700' : 'bg-primary-gold/20 text-black'}`}>
                  {c.status}
                </span>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-black text-white py-4 rounded-2xl text-sm font-black hover:bg-primary-red transition-all shadow-lg shadow-black/10">Agendar Cita</button>
                <button className="flex-1 border-2 border-slate-100 py-4 rounded-2xl text-sm font-bold hover:bg-slate-50 transition-all">Ver Detalles</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>

  );
}
