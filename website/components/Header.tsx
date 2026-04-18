import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-all">
        <div className="text-primary-blue font-black text-2xl tracking-tighter">CMVA</div>
        <div className="hidden md:block h-6 w-px bg-gray-200"></div>
        <div className="hidden md:block text-[10px] text-gray-500 uppercase leading-tight font-medium">
          Corporación Municipal<br />Villa Alemana
        </div>
      </Link>
      
      <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
        <Link href="/salud" className="hover:text-primary-blue transition-colors">Salud</Link>
        <Link href="/programas" className="hover:text-primary-blue transition-colors">Programas</Link>
        <Link href="/ciudadania" className="hover:text-primary-blue transition-colors">Ciudadanía</Link>
        <Link href="/noticias" className="hover:text-primary-blue transition-colors">Noticias</Link>
      </div>

      <Link href="/contacto" className="bg-primary-blue text-white px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-md">
        Contacto
      </Link>
    </nav>
  );
}
