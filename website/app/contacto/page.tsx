import React from 'react';

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <span className="text-primary-red font-black text-xs uppercase tracking-[0.2em] mb-4 inline-block">Habla con nosotros</span>
          <h1 className="text-6xl font-black text-black mb-8 leading-tight">¿En qué podemos ayudarte?</h1>
          <p className="text-slate-500 mb-16 text-lg font-medium leading-relaxed max-w-lg">
            Estamos aquí para escucharte. Si tienes dudas, sugerencias o necesitas información específica sobre nuestros servicios, utiliza este formulario.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="group">
              <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-primary-gold text-2xl shadow-xl group-hover:bg-primary-red group-hover:text-white transition-all duration-300">📍</div>
              <div className="mt-6">
                <h4 className="font-extrabold text-black text-lg">Dirección</h4>
                <p className="text-sm text-slate-500 mt-2 font-medium">Av. Quinta 050, Villa Alemana.</p>
              </div>
            </div>
            <div className="group">
              <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-primary-gold text-2xl shadow-xl group-hover:bg-primary-red group-hover:text-white transition-all duration-300">📞</div>
              <div className="mt-6">
                <h4 className="font-extrabold text-black text-lg">Teléfono</h4>
                <p className="text-sm text-slate-500 mt-2 font-medium">+56 32 324 3447</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 lg:p-16 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200">
          <form className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Nombre Completo</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:outline-none focus:border-primary-red focus:bg-white transition-all text-sm font-medium" placeholder="Tu nombre" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Email</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:outline-none focus:border-primary-red focus:bg-white transition-all text-sm font-medium" placeholder="tu@email.com" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Asunto de interés</label>
              <select className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:outline-none focus:border-primary-red focus:bg-white transition-all text-sm font-medium appearance-none">
                <option>Consulta General</option>
                <option>Sugerencia</option>
                <option>Reclamo</option>
                <option>Felicitación</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Mensaje o Comentario</label>
              <textarea rows={5} className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:outline-none focus:border-primary-red focus:bg-white transition-all text-sm font-medium" placeholder="¿Cómo podemos apoyarte?"></textarea>
            </div>
            <button className="w-full bg-black text-white py-5 rounded-2xl font-black text-sm hover:bg-primary-red shadow-xl shadow-black/10 transition-all transform hover:-translate-y-1 active:scale-95">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
