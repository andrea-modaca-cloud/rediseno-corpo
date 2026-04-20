'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Play } from 'lucide-react';

const slides = [
  {
    id: 1,
    type: 'video',
    url: 'https://cdn.pixabay.com/video/2016/09/13/5152-183742416_large.mp4',
    title: 'Transformando la Salud Pública',
    subtitle: 'Nuevos CESFAM para una mejor atención en Villa Alemana.',
    cta: 'Nuestros Centros'
  },
  {
    id: 2,
    type: 'video',
    url: 'https://cdn.pixabay.com/video/2021/04/12/70796-538161746_large.mp4',
    title: 'Educación de Excelencia',
    subtitle: 'Innovación y compromiso con el futuro de nuestros niños.',
    cta: 'Ver Colegios'
  },
  {
    id: 3,
    type: 'video',
    url: 'https://cdn.pixabay.com/video/2023/10/01/183115-870020165_large.mp4',
    title: 'Comunidad Participativa',
    subtitle: 'Construyendo juntos una ciudad más humana y solidaria.',
    cta: 'Participa Aquí'
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              src={slides[current].url}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-black/20 z-10" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-gold/20 backdrop-blur-md border border-primary-gold/30 text-primary-gold text-xs font-black uppercase tracking-widest">
                Gestión 2026
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
                {slides[current].title}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 font-medium leading-relaxed drop-shadow-lg">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-red text-white px-10 py-4 rounded-2xl text-lg font-black hover:scale-105 transition-all shadow-xl shadow-primary-red/20">
                  {slides[current].cta}
                </button>
                <button className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all">
                  <Play className="w-5 h-5 fill-white" />
                  Ver Video
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-4">
        <button 
          onClick={prevSlide}
          className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-10 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              current === i ? 'w-12 bg-primary-gold' : 'w-6 bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
