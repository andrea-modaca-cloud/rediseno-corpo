# Fase 2: Análisis de Implementación - CMVA 2026

## 🏗️ Arquitectura de Información
El sitio se divide en una estructura clara y jerárquica:
- **INICIO:** Hero audiovisual, servicios destacados, noticias y acceso rápido.
- **SALUD:** Directorio de CESFAM (Lusitania, Baeza Bustos, etc.) con mapas y horarios.
- **PROGRAMAS:** Línea de tiempo de hitos institucionales (Acreditación, PrEP VIH).
- **CIUDADANÍA:** Preguntas frecuentes, formularios descargables y chatbot de atención.

## 🎨 Identidad Visual y Diseño
- **Paleta de Colores:** Azul Institucional (`#0055BB`) y Verde Salud (`#00A86B`) sobre fondos limpios (`#F5F5F5`).
- **Tipografía:** Poppins/Inter para títulos y Open Sans para cuerpo, optimizando legibilidad y carga.
- **Multimedia:** Uso de formatos WebP/MP4 comprimidos (máx 2MB por video) y Lazy Loading.

## 🛠️ Stack Tecnológico Seleccionado
- **Framework:** Next.js 14+ (App Router).
- **Estilos:** Tailwind CSS 3+.
- **Componentes:** Shadcn/ui (basado en Radix UI para accesibilidad).
- **Animaciones:** Framer Motion para transiciones sutiles (300ms).
- **Hosting:** Vercel (recomendado para performance y SEO).

## ⚡ Rendimiento y SEO
- **Metas Técnicas:** LCP < 2.5s, CLS < 0.1.
- **SEO:** Marcado Schema (HealthCare), meta-etiquetas dinámicas por página y Sitemap optimizado.
