import Image from 'next/image';
import { Container } from './Container';
import { Eyebrow } from './Eyebrow';
import { cn } from '@/lib/cn';

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: { src: string; alt: string };
  /** Apply the warm-desaturate grade to the background image. */
  graded?: boolean;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  graded = true,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-ink',
        image ? 'min-h-[70svh]' : 'min-h-[50svh]',
        className,
      )}
    >
      {image && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className={cn('object-cover object-center', graded && 'image-graded')}
          />
          <div className="hero-overlay" />
        </>
      )}

      <Container wide className="relative z-10 flex min-h-[50svh] flex-col justify-end pb-16 pt-32 sm:pb-20 lg:pb-24">
        <Eyebrow className="mb-6 sm:mb-8">{eyebrow}</Eyebrow>
        <h1 className="display-line text-display-lg text-cream text-balance max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-cream/80 text-pretty">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
