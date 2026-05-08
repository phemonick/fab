import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Office in Ogba, Lagos. Talk to us about a private commission, joint venture, public-sector procurement, or press request.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a Conversation"
        title="Tell us about the project."
        subtitle="Private commission, joint venture, public-sector procurement, or press — we read every message."
        image={{ src: '/stock/skyline/02-lagos-lagoon.jpg', alt: '' }}
      />

      <section className="py-24 lg:py-32">
        <Container wide>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow className="mb-6">Project Enquiry</Eyebrow>
                <h2 className="display-line text-display-md text-cream text-balance mb-12">
                  Send us the brief.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>

            {/* Details */}
            <aside className="lg:col-span-5 space-y-12">
              <Reveal delay={0.15}>
                <div>
                  <p className="text-eyebrow uppercase tracking-eyebrow text-warmgrey-600 mb-4">
                    Office
                  </p>
                  <p className="text-cream leading-relaxed">
                    {site.contact.address.line1}<br />
                    {site.contact.address.line2}<br />
                    {site.contact.address.line3}<br />
                    {site.contact.address.city}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div>
                  <p className="text-eyebrow uppercase tracking-eyebrow text-warmgrey-600 mb-4">
                    Phone
                  </p>
                  <div className="space-y-1.5">
                    {site.contact.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s/g, '')}`}
                        className="block text-cream hover:text-gold transition-colors"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div>
                  <p className="text-eyebrow uppercase tracking-eyebrow text-warmgrey-600 mb-4">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-cream hover:text-gold transition-colors"
                  >
                    {site.contact.email}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div>
                  <p className="text-eyebrow uppercase tracking-eyebrow text-warmgrey-600 mb-4">
                    Hours
                  </p>
                  <div className="space-y-1.5 text-cream/85 text-sm leading-relaxed">
                    {site.contact.hours.map((h) => (
                      <p key={h}>{h}</p>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.35}>
                <div className="border-t border-cream/[0.08] pt-8">
                  <p className="text-eyebrow uppercase tracking-eyebrow text-gold mb-4">
                    Public-Sector Enquiries
                  </p>
                  <p className="text-cream/85 text-sm leading-relaxed text-pretty">
                    FAB Projects Nigeria Limited is a registered contractor with the Lagos State
                    Government and the Federal Government of Nigeria. For tender notifications,
                    capability statement requests, or pre-qualification documentation, please write
                    to{' '}
                    <a href={`mailto:${site.contact.email}`} className="text-cream hover:text-gold transition-colors">
                      {site.contact.email}
                    </a>{' '}
                    with &ldquo;Procurement&rdquo; in the subject line.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
