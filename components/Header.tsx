import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/3 bg-black"></div>
        <div className="h-full w-1/3 bg-[#E30613]"></div>
        <div className="h-full w-1/3 bg-[#FFED00]"></div>
      </div>
      <nav className="flex items-center justify-between px-8 py-4 bg-white/95 backdrop-blur-md shadow-sm">
        <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-all">
          <div className="text-black font-black text-2xl tracking-tighter">CMVA</div>
          <div className="hidden md:block h-6 w-px bg-gray-200"></div>
          <div className="hidden md:block text-[10px] text-gray-500 uppercase leading-tight font-medium">
            Corporación Municipal<br />Villa Alemana
          </div>
        </Link>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
          <Link href="/salud" className="hover:text-primary-red transition-colors">Salud</Link>
          <Link href="/programas" className="hover:text-primary-red transition-colors">Programas</Link>
          <Link href="/ciudadania" className="hover:text-primary-red transition-colors">Ciudadanía</Link>
          <Link href="/noticias" className="hover:text-primary-red transition-colors">Noticias</Link>
        </div>

        <Link href="/contacto" className="bg-primary-black text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-primary-red transition-all shadow-md">
          Contacto
        </Link>
      </nav>
    </header>
  );
}
