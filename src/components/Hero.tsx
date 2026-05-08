'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from './Button';
import { Eyebrow } from './Eyebrow';
import { Container } from './Container';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      {/* Background image with subtle slow zoom */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/projects/obaro-close-millennium/01-cube-detail.jpg"
          alt="Detail of an FAB Projects residence at Millennium Estate, Gbagada — dark cedar cube on white concrete frame"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/*
        Multi-stop scrim — creates a deliberate "text panel" on the left
        + a bottom darken for the subtitle/buttons.
        Built as two stacked layers so we can tune them independently.
      */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(96deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.78) 28%, rgba(10,10,10,0.45) 52%, rgba(10,10,10,0.18) 72%, rgba(10,10,10,0) 100%)',
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
          <h1 className="display-line text-display-lg text-cream text-balance">
            Homes built to outlast<br className="hidden md:block" /> the trend cycle.
          </h1>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end animate-fade-up [animation-delay:500ms]">
          <p className="lg:col-span-7 max-w-xl text-base sm:text-lg leading-relaxed text-cream/90 text-pretty">
            FAB Projects develops, builds, and delivers across Lagos and Abuja — from the flagship
            Victoria Court Estate in Opebi to a 48-unit residential build in Surulere and ongoing
            developments at Millennium Estate, Gbagada. Fourteen years of continuous delivery, one
            standard.
          </p>

          <div className="flex flex-wrap items-center gap-3 lg:col-span-5 lg:justify-end">
            <Button href="/projects" variant="primary">
              Explore the portfolio
            </Button>
            <Button href="/contact" variant="secondary">
              Speak with our team
            </Button>
          </div>
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
