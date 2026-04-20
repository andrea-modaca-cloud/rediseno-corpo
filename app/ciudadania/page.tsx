import React from 'react';

export default function CiudadaniaPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-black py-24 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-red/5 to-transparent"></div>
        <h1 className="text-5xl font-black mb-6">Portal Ciudadano</h1>
        <p className="text-slate-400 font-medium tracking-wide">Transparencia y recursos para todos los vecinos.</p>
      </div>

      <section className="py-24 max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black mb-12 text-black">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                '¿Cómo agendar una cita?',
                '¿Qué documentos necesito para inscribirme?',
                '¿Cuáles son los horarios de atención?',
                '¿Cómo solicitar mis exámenes?'
              ].map((q, i) => (
                <details key={i} className="group bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-primary-red/20 transition-all cursor-pointer">
                  <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
                    {q}
                    <span className="group-open:rotate-180 transition-transform text-primary-red font-black text-xs">▼</span>
                  </summary>
                  <p className="mt-6 text-sm text-slate-500 leading-relaxed font-medium">
                    Puedes realizar este trámite de forma presencial en tu CESFAM más cercano o a través de nuestra plataforma online con tu Clave Única.
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="bg-black rounded-[3rem] p-10 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-red/20 rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="relative z-10">
              <span className="bg-primary-gold text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 inline-block">Online</span>
              <h3 className="text-3xl font-black mb-6">Asistente Virtual</h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-10">
                Hola, soy tu asistente digital de la CMVA. ¿En qué puedo ayudarte hoy? Podemos agendar citas o resolver dudas básicas.
              </p>
            </div>
            <button className="bg-white text-black py-4 rounded-2xl font-black text-sm hover:bg-primary-red hover:text-white transition-all relative z-10">
              Iniciar Chat
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
