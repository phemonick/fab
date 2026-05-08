'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ProjectImage } from '@/data/projects';
import { cn } from '@/lib/cn';

type Props = { images: ProjectImage[] };

export function ProjectGallery({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  // Sync embla to clicked index when lightbox opens
  useEffect(() => {
    if (lightboxIndex !== null && emblaApi) emblaApi.scrollTo(lightboxIndex);
  }, [lightboxIndex, emblaApi]);

  // Keyboard nav
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') emblaApi?.scrollPrev();
      if (e.key === 'ArrowRight') emblaApi?.scrollNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, emblaApi]);

  if (images.length === 0) {
    return (
      <div className="grid place-items-center py-24 border border-dashed border-cream/15 text-warmgrey-500 text-sm">
        Project photography to come.
      </div>
    );
  }

  return (
    <>
      {/* Editorial mosaic — first image full-width, then a 2-column rhythm */}
      <div className="grid gap-3 sm:gap-4">
        <button
          onClick={() => setLightboxIndex(0)}
          className="group relative block w-full aspect-[16/9] overflow-hidden bg-ink-700"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-1000 ease-out-cinematic group-hover:scale-[1.03]"
          />
          {images[0].isRender && (
            <div className="absolute top-4 right-4 bg-ink/85 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-eyebrow text-cream">
              Architectural Render
            </div>
          )}
        </button>

        {images.length > 1 && (
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {images.slice(1).map((img, idx) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(idx + 1)}
                className={cn(
                  'group relative block aspect-[4/3] overflow-hidden bg-ink-700',
                  // Make every 3rd item span 2 columns for editorial rhythm
                  (idx + 1) % 3 === 0 && 'col-span-2 aspect-[16/9]',
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out-cinematic group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Project gallery"
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-10 inline-flex h-12 w-12 items-center justify-center text-cream hover:text-gold transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label="Previous"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center text-cream hover:text-gold transition-colors"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center text-cream hover:text-gold transition-colors"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div ref={emblaRef} className="overflow-hidden h-full">
            <div className="flex h-full">
              {images.map((img) => (
                <div
                  key={img.src}
                  className="relative flex-[0_0_100%] h-full grid place-items-center px-12 py-16"
                >
                  <div className="relative w-full h-full max-w-6xl mx-auto">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
