import React from 'react';

export default function CiudadaniaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-20 text-white text-center">
        <h1 className="text-4xl font-black mb-4">Ciudadanía Informada</h1>
        <p className="text-slate-400">Transparencia y recursos para todos los vecinos.</p>
      </div>

      <section className="py-20 max-w-4xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-slate-800">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                '¿Cómo agendar una cita?',
                '¿Qué documentos necesito para inscribirme?',
                '¿Cuáles son los horarios de atención?',
                '¿Cómo solicitar mis exámenes?'
              ].map((q, i) => (
                <details key={i} className="group bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:border-primary-blue/30 transition-all cursor-pointer">
                  <summary className="font-bold text-sm list-none flex justify-between items-center text-slate-700">
                    {q}
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                    Puedes realizar este trámite de forma presencial en tu CESFAM más cercano o a través de nuestra plataforma online con tu Clave Única.
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="bg-primary-blue rounded-3xl p-8 text-white flex flex-col justify-between shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div>
              <h3 className="text-xl font-black mb-4">Asistente Virtual</h3>
              <p className="text-sm text-blue-100 leading-relaxed mb-8">
                Hola, soy tu asistente digital. ¿En qué puedo ayudarte hoy? Podemos agendar citas o resolver dudas básicas.
              </p>
            </div>
            <button className="bg-white text-primary-blue py-3 rounded-xl font-black text-sm hover:bg-blue-50 transition-colors">
              Iniciar Chat
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
