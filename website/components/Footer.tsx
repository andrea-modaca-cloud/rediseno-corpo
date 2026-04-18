import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="text-white font-black text-3xl tracking-tighter mb-4">CMVA</div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Mejorando la calidad de vida de los habitantes de Villa Alemana a través de servicios de excelencia en salud y educación.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-primary-green">Accesos Rápidos</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><a href="/salud" className="hover:text-white transition-colors">Centros de Salud</a></li>
            <li><a href="/programas" className="hover:text-white transition-colors">Programas Sociales</a></li>
            <li><a href="/ciudadania" className="hover:text-white transition-colors">Portal Ciudadano</a></li>
            <li><a href="/noticias" className="hover:text-white transition-colors">Prensa y Noticias</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-primary-green">Contacto</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>📍 Av. Quinta 050, Villa Alemana</li>
            <li>📞 +56 32 324 3447</li>
            <li>✉️ contacto@cmva.cl</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-primary-green">Horario de Atención</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Lunes a Jueves: 08:30 - 17:30<br />
            Viernes: 08:30 - 16:30
          </p>
          <div className="mt-8 flex gap-4">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue transition-all cursor-pointer">f</div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue transition-all cursor-pointer">t</div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue transition-all cursor-pointer">i</div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-8 mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        © 2026 Corporación Municipal de Villa Alemana. Todos los derechos reservados.
      </div>
    </footer>
  );
}
