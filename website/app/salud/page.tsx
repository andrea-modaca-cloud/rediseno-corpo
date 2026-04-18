import React from 'react';

export default function SaludPage() {
  const centros = [
    { name: 'CESFAM Lusitania', addr: 'Calle Bellavista 1228, Miraflores', status: 'Acreditado' },
    { name: 'CESFAM Prof. Eugenio Cienfuegos', addr: 'Av. El Sauce s/n', status: 'Acreditado' },
    { name: 'CESFAM Dr. Juan Carlos Baeza', addr: 'Calle Limache 1490', status: 'En Proceso' },
    { name: 'CESFAM Gómez Carreño', addr: 'Av. Gómez Carreño s/n', status: 'En Proceso' }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-primary-blue py-20 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-4xl font-black mb-4">Área de Salud</h1>
          <p className="text-blue-100 max-w-2xl">
            Gestionamos la Red de Atención Primaria de Salud de la comuna, brindando servicios de calidad y cercanía a todos nuestros vecinos.
          </p>
        </div>
      </div>

      <section className="py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-2xl font-bold mb-10 text-gray-800">Centros de Salud Familiar (CESFAM)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {centros.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-black text-primary-blue">{c.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">📍 {c.addr}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${c.status === 'Acreditado' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {c.status}
                </span>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-primary-blue text-white py-3 rounded-xl text-sm font-bold">Agendar Cita</button>
                <button className="flex-1 border border-slate-200 py-3 rounded-xl text-sm font-bold hover:bg-slate-50">Ver Mapa</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
