import Image from 'next/image';
import { Container } from '../Container';
import { Eyebrow } from '../Eyebrow';
import { Button } from '../Button';
import { Reveal } from '../Reveal';

export function GovernmentCapability() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <Image
          src="/stock/architecture/04-concrete-stairs.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover image-bw opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
      </div>

      <Container wide className="relative z-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow className="mb-6">Government & Institutional</Eyebrow>
              <h2 className="display-line text-display-md text-cream text-balance mb-8">
                Trusted by ministries.<br className="hidden md:block" />Vetted on procurement.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-cream/85 leading-relaxed text-pretty max-w-2xl">
                FAB Projects Nigeria Limited is a registered contractor with both the{' '}
                <span className="text-cream">Lagos State Government</span> and the{' '}
                <span className="text-cream">Federal Government of Nigeria</span>. We hold active
                positions on public-sector procurement rosters at both levels, with engagements
                across the Federal Capital Territory and an established footprint with Lagos State
                agencies.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-5 text-warmgrey-400 leading-relaxed max-w-2xl">
                Public-sector work demands a different discipline: tighter compliance, harder
                bonding, longer cycles, and zero room for cost overrun. We&apos;ve built our process
                around those constraints — and our private clients benefit from the same rigor.
              </p>
            </Reveal>
            <Reveal delay={0.35} className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="/contact" variant="primary">
                Discuss a public-sector project
              </Button>
              <Button href="/services#government-and-public-sector" variant="ghost">
                Learn more
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal direction="left" delay={0.2} className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md ml-auto">
              {[
                { label: 'CAC Registration', value: 'RC 1828657' },
                { label: 'Lagos State', value: 'Registered contractor' },
                { label: 'Federal Government', value: 'Registered contractor' },
                { label: 'Operational since', value: '2012' },
              ].map((c) => (
                <div key={c.label} className="border border-cream/10 bg-ink/60 backdrop-blur p-5">
                  <div className="text-eyebrow uppercase tracking-eyebrow text-warmgrey-600 mb-3">
                    {c.label}
                  </div>
                  <div className="text-cream text-sm font-medium leading-snug">
                    {c.value}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
