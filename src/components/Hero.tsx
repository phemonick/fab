'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Button } from './Button';
import { Eyebrow } from './Eyebrow';
import { Container } from './Container';

type HeroSlide = { src: string; alt: string };

/**
 * Cinematic hero rotation. A deliberate mix of FAB's own flagship work and
 * curated atmospheric imagery — never captioned as a specific project, so the
 * curated frames read as mood, not portfolio. Crossfade + slow Ken-Burns zoom.
 */
const SLIDES: HeroSlide[] = [
  { src: '/projects/ikoyi-2-tayo-adesanya/01-front-elevation.jpg', alt: 'FAB Projects residence at Parkview, Ikoyi — white massing with laser-cut screens and a terracotta gate' },
  { src: '/stock/hero/02-villa-twilight.jpg', alt: 'A modern residence glowing warm at twilight' },
  { src: '/stock/hero/03-pool-home.jpg', alt: 'Contemporary home with a mirror-still infinity pool' },
  { src: '/projects/obaro-close-millennium/01-cube-detail.jpg', alt: 'FAB Projects residence at Millennium Estate, Gbagada — dark cedar cube on a white concrete frame' },
  { src: '/stock/hero/04-lagos-golden-hour.jpg', alt: 'Lagos at golden hour' },
];

const INTERVAL = 6500;

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (i: number) => setIndex((i + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    if (SLIDES.length <= 1) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      {/* Background slideshow — crossfade + slow zoom */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }}
          >
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { scale: 1.08 }}
              animate={reduce ? undefined : { scale: 1 }}
              transition={{ duration: (INTERVAL + 1500) / 1000, ease: 'linear' }}
            >
              <Image
                src={SLIDES[index].src}
                alt={SLIDES[index].alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/*
        Multi-stop scrim. Desktop uses a left "text panel" gradient so the
        image breathes on the right; mobile/tablet uses a vertical gradient so
        the image stays visible up top while the headline stays legible at the
        base. A shared bottom darken anchors the subtitle/buttons on all sizes.
      */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            'linear-gradient(96deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.78) 28%, rgba(10,10,10,0.45) 52%, rgba(10,10,10,0.18) 72%, rgba(10,10,10,0) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,10,0.18) 0%, rgba(10,10,10,0.02) 26%, rgba(10,10,10,0.42) 64%, rgba(10,10,10,0.88) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.85) 100%)',
        }}
      />

      {/* Hairline detail along the right edge — editorial accent */}
      <div aria-hidden className="absolute top-0 bottom-0 right-0 w-px bg-cream/[0.06] hidden lg:block" />

      {/* Hero content */}
      <Container wide className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:pb-20 lg:pb-24">
        <div className="max-w-2xl xl:max-w-3xl animate-fade-up [animation-delay:200ms]">
          <Eyebrow className="mb-6 sm:mb-8">Lagos · Abuja · Since 2012</Eyebrow>
          <h1 className="display-line text-[2rem] leading-[1.08] sm:text-display-lg sm:leading-none text-cream text-pretty md:text-balance">
            Homes built to outlast<br className="hidden md:block" /> the trend cycle.
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end animate-fade-up [animation-delay:500ms]">
          <p className="lg:col-span-7 max-w-xl text-base sm:text-lg leading-relaxed text-cream/90 text-pretty">
            FAB Projects develops, builds, and delivers across Lagos and Abuja — from the flagship
            Victoria Court Estate in Opebi to a 48-unit residential build in Surulere and ongoing
            developments at Millennium Estate, Gbagada. Fourteen years of continuous delivery, one
            standard.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 lg:col-span-5 lg:justify-end">
            <Button href="/projects" variant="primary" className="w-full sm:w-auto justify-center">
              Explore the portfolio
            </Button>
            <Button href="/contact" variant="secondary" className="w-full sm:w-auto justify-center">
              Speak with our team
            </Button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="mt-12 flex items-center gap-3 animate-fade-up [animation-delay:700ms]">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              className="group relative h-6 py-2"
            >
              <span
                className={
                  'block h-px transition-all duration-500 ease-out-cinematic ' +
                  (i === index
                    ? 'w-10 bg-gold'
                    : 'w-6 bg-cream/30 group-hover:bg-cream/60')
                }
              />
            </button>
          ))}
        </div>
      </Container>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 right-6 z-10 hidden text-[10px] uppercase tracking-eyebrow text-warmgrey-500 sm:block animate-fade-in [animation-delay:1200ms]">
        <div className="flex items-center gap-3">
          <span>Scroll</span>
          <motion.span
            aria-hidden
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            className="block h-8 w-px bg-cream/40"
          />
        </div>
      </div>
    </section>
  );
}
