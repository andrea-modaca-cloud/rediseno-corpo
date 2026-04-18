import React from 'react';

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h1 className="text-4xl font-black text-slate-900 mb-6">Contáctanos</h1>
          <p className="text-slate-500 mb-12">
            Estamos aquí para escucharte. Si tienes dudas, sugerencias o necesitas información específica, utiliza este formulario.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary-blue text-xl shadow-sm">📍</div>
              <div>
                <h4 className="font-bold text-slate-800">Dirección Central</h4>
                <p className="text-sm text-slate-500 mt-1">Av. Quinta 050, Villa Alemana, Región de Valparaíso.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-primary-green text-xl shadow-sm">📞</div>
              <div>
                <h4 className="font-bold text-slate-800">Teléfono Sugerencias</h4>
                <p className="text-sm text-slate-500 mt-1">+56 32 324 3447</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-100 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Nombre</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-blue transition-colors text-sm" placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-blue transition-colors text-sm" placeholder="tu@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Asunto</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-blue transition-colors text-sm bg-white">
                <option>Consulta General</option>
                <option>Sugerencia</option>
                <option>Reclamo</option>
                <option>Felicitación</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Mensaje</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-blue transition-colors text-sm" placeholder="¿En qué podemos ayudarte?"></textarea>
            </div>
            <button className="w-full bg-primary-blue text-white py-4 rounded-xl font-black text-sm hover:opacity-90 shadow-lg shadow-blue-500/20 transition-all">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
