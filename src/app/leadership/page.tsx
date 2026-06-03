import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal } from '@/components/Reveal';
import { executives } from '@/data/executives';

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Led by HRH Dr. Shehu Usman Chindo-Yamusa III, Dr. Ibrahim Ameh, Olanrewaju Akeem Oladele (CEO), and Oluwafemi Adekunle (COO). The council that signs the work.',
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="The Council"
        title="The people who sign the work."
        subtitle="A board that brings traditional authority, international business, executive leadership, and operational delivery into the same room. Every project the firm signs, the council stands behind."
        image={{ src: '/stock/architecture/04-concrete-stairs.jpg', alt: '' }}
      />

      <section className="py-24 lg:py-32">
        <Container wide>
          <div className="space-y-24 lg:space-y-32">
            {executives.map((exec, i) => (
              <Reveal key={exec.slug}>
                <article className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-4">
                    <span className="font-serif text-gold/70 text-sm tabular-nums">
                      0{i + 1}
                    </span>
                    {exec.honorific && (
                      <p className="mt-6 text-cream/70 text-sm tracking-wide">{exec.honorific}</p>
                    )}
                    <h2 className="font-serif text-3xl lg:text-4xl text-cream leading-tight mt-2 text-balance">
                      {exec.name}
                    </h2>
                    <p className="mt-3 text-warmgrey-400 text-sm leading-snug">{exec.title}</p>
                  </div>
                  <div className="lg:col-span-8 space-y-5 text-cream/85 leading-relaxed text-pretty max-w-prose">
                    {exec.paragraphs.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing strip */}
      <section className="relative overflow-hidden border-t border-cream/[0.06]">
        <div className="absolute inset-0 -z-0 opacity-25">
          <Image src="/stock/architecture/01-concrete-line.jpg" alt="" fill sizes="100vw" className="object-cover image-graded" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <Container wide className="relative z-10 py-20 lg:py-28 text-center">
          <Eyebrow className="mb-6 justify-center">The Standard</Eyebrow>
          <p className="display-line text-display-sm text-cream text-balance max-w-3xl mx-auto">
            The work travels by referral. The buildings stay standing. The clients come back.
          </p>
        </Container>
      </section>
    </>
  );
}
