import React from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import NewsSection from '@/components/NewsSection';
import { ShieldCheck, Stethoscope, GraduationCap, Users } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-slate-50">
      {/* Hero Section with Video Carousel */}
      <HeroCarousel />

      {/* Services Highlight */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-gold/5 rounded-l-[10rem] -z-10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-red font-black text-xs uppercase tracking-widest mb-4 inline-block tracking-[0.2em]">Nuestros Pilares</span>
            <h2 className="text-4xl lg:text-5xl font-black text-black">Servicios a la Comunidad</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="w-8 h-8"/>, title: 'Atención Primaria', color: 'bg-black', text: 'Salud cercana y de calidad para todos.' },
              { icon: <GraduationCap className="w-8 h-8"/>, title: 'Educación Pública', color: 'bg-primary-red', text: 'Formando el futuro de Villa Alemana.' },
              { icon: <Users className="w-8 h-8"/>, title: 'Atención Ciudadana', color: 'bg-primary-gold', text: 'Resolviendo tus dudas y necesidades.' },
              { icon: <Stethoscope className="w-8 h-8"/>, title: 'Programas Especiales', color: 'bg-black', text: 'Iniciativas innovadoras en salud.' }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-300 group">
                <div className={`${s.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-black text-black mb-4">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.text}</p>
                <div className="h-1 w-12 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-primary-red transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News and Press Section */}
      <NewsSection />

      {/* Stats Section / Social Proof */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Usuarios en Salud', value: '85k+' },
              { label: 'Estudiantes', value: '12k+' },
              { label: 'Centros de Salud', value: '4' },
              { label: 'Establecimientos', value: '15' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl lg:text-6xl font-black text-primary-gold mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

