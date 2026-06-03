import Image from 'next/image';
import { Container } from '../Container';
import { Eyebrow } from '../Eyebrow';
import { Button } from '../Button';
import { Reveal } from '../Reveal';

export function AboutStrip() {
  return (
    <section className="relative py-24 lg:py-32" id="about">
      <Container wide>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow className="mb-8">About FAB Projects</Eyebrow>
              <h2 className="display-line text-display-md text-cream text-balance">
                A Lagos firm with a national footprint.
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="mt-12 hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/stock/architecture/03-curved-concrete.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 0px, 33vw"
                  className="object-cover image-graded"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 space-y-6 text-cream/85 leading-relaxed text-pretty max-w-prose">
            <Reveal delay={0.1}>
              <p>
                FAB Projects Nigeria Limited is a wholly indigenous engineering and property
                development firm. The work began in 2012 under the leadership of{' '}
                <span className="text-cream">Olanrewaju Akeem Oladele</span>, who left a fourteen-year
                banking career to start the practice. The firm was formally incorporated as FAB
                Projects Nigeria Limited on August 16, 2021, with the Corporate Affairs Commission
                registration number RC 1828657.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                We design, build, and deliver residential estates, commercial buildings, and
                public-sector projects — and we do all three under one roof, with one project lead
                per build, from groundbreaking to keys. Our work is concentrated in the high-value
                corridors of Lagos: Ikeja, Opebi, Gbagada, Surulere, and Ikoyi. We maintain an
                operational presence in Abuja for federal-sector engagements and select private
                commissions.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p>
                The firm is registered as a contractor with{' '}
                <span className="text-cream">both the Lagos State Government and the Federal Government of Nigeria</span>,
                with an active position on public-sector procurement rosters at both levels. Twenty
                specialized staff and thirty contract personnel deliver the work.
              </p>
            </Reveal>
            <Reveal delay={0.4} className="pt-4">
              <Button href="/about" variant="ghost">
                Read more about us
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
