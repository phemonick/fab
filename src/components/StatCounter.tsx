'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

type StatProps = {
  number: string;
  label: string;
};

/** Strips one trailing "+" so we can animate a numeric count and re-append the symbol. */
function parseNumber(input: string): { value: number; suffix: string } {
  const match = input.match(/^(\d+)([+\D]*)$/);
  if (!match) return { value: 0, suffix: input };
  return { value: Number(match[1]), suffix: match[2] };
}

export function StatCounter({ number, label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayed, setDisplayed] = useState<string>('');
  const reduce = useReducedMotion();
  const { value, suffix } = parseNumber(number);

  useEffect(() => {
    if (hasAnimated) return;
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setHasAnimated(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.5 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) {
      setDisplayed(number);
      return;
    }
    if (reduce || value === 0) {
      setDisplayed(number);
      return;
    }
    const start = performance.now();
    const duration = 1400;
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.floor(value * eased);
      setDisplayed(`${current}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplayed(`${value}${suffix}`);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hasAnimated, number, reduce, suffix, value]);

  return (
    <div ref={ref} className="border-t border-cream/[0.08] pt-6">
      <div className="font-serif text-5xl sm:text-6xl text-cream leading-none tracking-tight tabular-nums">
        {displayed || number}
      </div>
      <div className="mt-3 text-xs uppercase tracking-eyebrow text-warmgrey-500 leading-snug">
        {label}
      </div>
    </div>
  );
}
