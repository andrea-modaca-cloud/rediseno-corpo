'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Play } from 'lucide-react';

const slides = [
  {
    id: 1,
    provider: 'youtube',
    url: 'qNbMjGkl1ls',
    title: 'Transformando Villa Alemana',
    subtitle: 'Conoce los avances y proyectos que están mejorando nuestra comuna.',
    cta: 'Ver Gestión'
  },
  {
    id: 2,
    provider: 'native',
    url: 'https://cdn.pixabay.com/video/2016/09/13/5152-183742416_large.mp4',
    title: 'Salud de Calidad',
    subtitle: 'Atención primaria moderna y cercana para toda la comunidad.',
    cta: 'Nuestros Centros'
  },
  {
    id: 3,
    provider: 'native',
    url: 'https://cdn.pixabay.com/video/2021/04/12/70796-538161746_large.mp4',
    title: 'Educación del Futuro',
    subtitle: 'Innovación y compromiso en nuestros liceos y escuelas.',
    cta: 'Ver Colegios'
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000); // Dar más tiempo a los videos de YouTube
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
            {slides[current].provider === 'youtube' ? (
              <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${slides[current].url}?autoplay=1&mute=1&loop=1&playlist=${slides[current].url}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&enablejsapi=1`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw] border-none"
                  allow="autoplay; encrypted-media"
                />
              </div>
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                src={slides[current].url}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-black/20 z-10" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-gold/20 backdrop-blur-md border border-primary-gold/30 text-primary-gold text-[10px] font-black uppercase tracking-[0.2em]">
                Gestión en Video
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] drop-shadow-2xl">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 font-medium leading-relaxed drop-shadow-lg max-w-xl">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-red text-white px-8 py-4 rounded-2xl text-base font-black hover:scale-105 transition-all shadow-xl shadow-primary-red/20 active:scale-95">
                  {slides[current].cta}
                </button>
                <a 
                  href={`https://www.youtube.com/watch?v=${slides[current].provider === 'youtube' ? slides[current].url : ''}`}
                  target="_blank"
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-2xl text-base font-bold hover:bg-white/20 transition-all active:scale-95"
                >
                  <Play className="w-4 h-4 fill-white" />
                  Ver en YouTube
                </a>
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
