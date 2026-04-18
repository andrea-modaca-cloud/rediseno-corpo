import React from 'react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 border-b-4 border-primary-green">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/80 via-primary-blue/20 to-primary-green/40 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-xl leading-tight">
            Tu Salud es Nuestra <span className="text-primary-green">Prioridad</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-2xl mx-auto drop-shadow-md">
            Acceso equitativo a servicios de salud primaria de calidad para toda la comunidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary-green text-white px-10 py-4 rounded-xl text-lg font-black hover:scale-105 transition-all shadow-lg w-full sm:w-auto">
              Agendar Cita
            </button>
            <button className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all w-full sm:w-auto">
              Buscar Centro
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
          <div className="text-[10px] text-white font-bold uppercase tracking-widest">Nuestros Servicios</div>
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-12 text-gray-900">Servicios Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { icon: '🏥', title: 'Atención Integral', desc: 'Consultas de medicina general, pediatría y ginecología.' },
              { icon: '💊', title: 'Prevención', desc: 'Programas de inmunización y control de salud preventiva.' },
              { icon: '🦷', title: 'Odontología', desc: 'Limpiezas, restauraciones y prevención de caries.' }
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-blue/30 hover:shadow-xl transition-all group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                <a href="#" className="font-bold text-primary-blue text-sm hover:underline">Conocer más →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
