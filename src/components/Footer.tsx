import Link from 'next/link';
import { site } from '@/data/site';
import { Container } from './Container';
import { Logo } from './Logo';

const COLS = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Services', href: '/services' },
    ],
  },
  {
    heading: 'Projects',
    links: [
      { label: 'Victoria Court Estate', href: '/projects/victoria-court-estate' },
      { label: 'Surulere Residences', href: '/projects/surulere-residences' },
      { label: 'Millennium Estate', href: '/projects/millennium-estate-obaro-close' },
      { label: 'All projects', href: '/projects' },
    ],
  },
  {
    heading: 'Sectors',
    links: [
      { label: 'Residential', href: '/projects?sector=residential' },
      { label: 'Joint Venture', href: '/services#joint-venture-development' },
      { label: 'Government & Public Sector', href: '/services#government-and-public-sector' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-cream/[0.06] bg-ink">
      <Container wide className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-md text-pretty text-warmgrey-400 leading-relaxed">
              {site.tagline} · Lagos · Abuja · Since {site.founded}.
            </p>
            <div className="mt-8 space-y-2 text-sm text-warmgrey-500">
              {site.contact.address.line1 && <p>{site.contact.address.line1}</p>}
              {site.contact.address.line2 && <p>{site.contact.address.line2}</p>}
              {site.contact.address.line3 && <p>{site.contact.address.line3}</p>}
              <p>{site.contact.address.city}</p>
            </div>
            <div className="mt-6 flex flex-col gap-1.5 text-sm">
              <a className="text-cream hover:text-gold transition-colors" href={`tel:${site.contact.phones[0].replace(/\s/g, '')}`}>
                {site.contact.phones[0]}
              </a>
              <a className="text-cream hover:text-gold transition-colors" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {COLS.map((col) => (
              <div key={col.heading}>
                <p className="text-eyebrow uppercase tracking-eyebrow text-warmgrey-600 mb-5">
                  {col.heading}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-warmgrey-400 hover:text-cream transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/[0.06]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-warmgrey-600 leading-relaxed text-balance max-w-3xl">
              © {new Date().getFullYear()} {site.name}. {site.rc}. Registered with the Corporate
              Affairs Commission. Registered contractor — Lagos State Government and the Federal
              Government of Nigeria. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
