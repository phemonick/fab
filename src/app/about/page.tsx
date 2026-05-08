import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Operating since 2012, FAB Projects Nigeria Limited (RC 1828657) develops, builds, and delivers across Lagos and Abuja. Registered contractor — Lagos State + Federal Government.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About FAB Projects"
        title="Quiet ambition, built into every plot."
        subtitle="A Nigerian property developer specializing in luxury residential, commercial real estate, and government-sector delivery. Continuously operational since 2012, formally incorporated as FAB Projects Nigeria Limited in 2021, and growing on the strength of completed work."
        image={{ src: '/projects/victoria-court/05-terrace-detail.jpg', alt: 'Victoria Court terrace detail' }}
        graded={false}
      />

      {/* STORY */}
      <section className="py-24 lg:py-32">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow className="mb-6">Our Story</Eyebrow>
                <h2 className="display-line text-display-md text-cream text-balance">
                  Built brick by brick.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8 space-y-7 text-cream/85 leading-relaxed text-pretty max-w-prose">
              <Reveal delay={0.1}>
                <p>
                  The firm started where many Lagos property stories start — with one developer, one site,
                  and the conviction that the city&apos;s appetite for proper housing was outrunning its supply.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p>
                  The work began in <span className="text-cream">2012</span>. Olanrewaju Akeem Oladele,
                  after fourteen years across multiple Nigerian banks, left finance to build something
                  more permanent than a balance sheet. The first projects were small — semi-detached
                  residences in Opebi, terraces in Ikeja — but they set the tone: imported finishes,
                  careful joinery, and the kind of detailing that made a buyer return for the next plot.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <p>
                  By the time the firm was formally incorporated as FAB Projects Nigeria Limited on
                  August 16, 2021 — Corporate Affairs Commission registration RC 1828657 — the
                  underlying practice had already delivered multiple multi-unit residential projects
                  across Ikeja, Ogba, and Gbagada. Incorporation didn&apos;t change the work; it formalized
                  a record that had been written in concrete and timber for almost a decade.
                </p>
              </Reveal>
              <Reveal delay={0.34}>
                <p>
                  The flagship of the residential portfolio,{' '}
                  <span className="text-cream">Victoria Court Estate</span> in Opebi, was handed over on
                  October 31, 2024 — fifteen units across detached, semi-detached, and terrace formats,
                  named in honor of the late Mrs. Jesutomi Omotola Victoria Oladele.
                </p>
              </Reveal>
              <Reveal delay={0.42}>
                <p>
                  Today, the active pipeline runs across two ongoing developments: a six-unit fully
                  detached residence at <span className="text-cream">Obaro Close, Millennium Estate, Gbagada</span>,
                  currently in the finishing phase, and a 48-unit multi-story residential development
                  under construction in <span className="text-cream">Surulere</span>. Alongside the
                  residential work, FAB Projects is registered as a contractor with both the Lagos
                  State Government and the Federal Government of Nigeria, with an active footprint in
                  Abuja and the Federal Capital Territory.
                </p>
              </Reveal>
              <Reveal delay={0.5}>
                <p>
                  Twenty specialized staff and thirty contract personnel deliver the work. Reports go
                  out every Friday. Photographs follow them. The work travels by referral. The
                  buildings stay standing. The clients come back.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* APPROACH */}
      <section className="border-t border-cream/[0.06] py-24 lg:py-32 bg-ink-800">
        <Container wide>
          <div className="max-w-2xl mb-16">
            <Reveal>
              <Eyebrow className="mb-6">How we deliver</Eyebrow>
              <h2 className="display-line text-display-md text-cream text-balance">
                One team, three steps, every project.
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-px bg-cream/[0.06] border border-cream/[0.06] md:grid-cols-3">
            {site.approach.map((step, i) => (
              <Reveal
                key={step.step}
                delay={i * 0.1}
                className="bg-ink p-8 lg:p-10"
              >
                <span className="font-serif text-gold/70 text-sm tabular-nums">{step.step}</span>
                <h3 className="font-serif text-2xl text-cream mt-4 mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-warmgrey-400 leading-relaxed text-pretty">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="py-24 lg:py-32 border-t border-cream/[0.06]">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow className="mb-6">What we hold</Eyebrow>
                <h2 className="display-line text-display-md text-cream text-balance">
                  Eight values. One standard.
                </h2>
              </Reveal>
            </div>
            <ul className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
              {site.values.map((v, i) => (
                <Reveal key={v.word} delay={i * 0.04} className="border-l border-gold/40 pl-5">
                  <h3 className="font-serif text-xl text-cream leading-tight mb-2">{v.word}</h3>
                  <p className="text-sm text-warmgrey-400 leading-relaxed text-pretty">{v.sentence}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* GEOGRAPHY */}
      <section className="border-t border-cream/[0.06] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-0 opacity-25">
          <Image src="/stock/skyline/01-lekki-bridge.jpg" alt="" fill sizes="100vw" className="object-cover image-graded" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <Container wide className="relative z-10">
          <div className="max-w-2xl mb-16">
            <Reveal>
              <Eyebrow className="mb-6">Where we work</Eyebrow>
              <h2 className="display-line text-display-md text-cream text-balance">
                Lagos, Abuja, and the institutions that procure them.
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {site.geography.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.1} className="border-t border-cream/15 pt-6">
                <h3 className="font-serif text-2xl text-cream leading-tight mb-3">{g.title}</h3>
                <p className="text-sm text-warmgrey-400 leading-relaxed text-pretty">{g.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* REGISTRATIONS */}
      <section className="border-t border-cream/[0.06] py-24 lg:py-32">
        <Container wide>
          <div className="max-w-2xl mb-12">
            <Reveal>
              <Eyebrow className="mb-6">Registrations & Credentials</Eyebrow>
              <h2 className="display-line text-display-md text-cream text-balance">
                Registered, vetted, and active.
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {site.registrations.map((r, i) => (
              <Reveal key={r.label} delay={i * 0.08} className="border border-cream/10 bg-ink p-6 hover:border-gold/40 transition-colors duration-500">
                <div className="text-eyebrow uppercase tracking-eyebrow text-warmgrey-600 mb-3">
                  {r.label}
                </div>
                <div className="text-cream font-medium">{r.value}</div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Reveal>
              <Button href="/contact" variant="primary">
                Request capability statement
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
