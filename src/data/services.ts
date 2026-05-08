export type Service = {
  slug: string;
  name: string;
  short: string;
  full: string;
};

export const services: Service[] = [
  {
    slug: 'real-estate-development',
    name: 'Real Estate Development',
    short: 'Acquire, design, build, deliver — across Lagos and Abuja.',
    full: 'We acquire, design, build, and bring to market residential and commercial properties — most often in Ikeja, Opebi, Gbagada, Surulere, and Ikoyi, with operational reach into Abuja. We sign deals where the numbers work and walk away where they don’t. Every development gets a feasibility study before it gets a foundation.',
  },
  {
    slug: 'turn-key-construction',
    name: 'Turn-Key Construction',
    short: 'One project lead. One scope. One number. Keys at handover.',
    full: 'Land, drawings, and a deadline are usually all we need. We deliver private homes, office buildings, and multi-unit developments at the keys-and-Certificate-of-Occupancy stage, ready to occupy. One project lead. One scope. One number.',
  },
  {
    slug: 'joint-venture-development',
    name: 'Joint-Venture Development',
    short: 'Land, capital, and build experience under one structure.',
    full: 'Land owners with a plot, capital partners with the funds, and us with the build experience. It’s a structure we’ve used to deliver multiple projects in our completed portfolio. We co-invest, co-build, and co-share — under a contract structure designed to align interests instead of test them.',
  },
  {
    slug: 'luxury-sales-and-lettings',
    name: 'Luxury Sales & Lettings',
    short: 'A discreet network for buyers who don’t want listings.',
    full: 'We list, market, and sell our own developments and a curated set of partner properties. The buyers we work with don’t want listings — they want introductions. We run the conversations, the viewings, and the closings, and we maintain a discreet network of clients who match what we sell.',
  },
  {
    slug: 'hospitality-builds',
    name: 'Hospitality Builds',
    short: 'Hotels, short-stay residences, and serviced apartments to operator standard.',
    full: 'Hotels, short-stay residences, and serviced apartments delivered to operator-standard specifications. We’ve taken hospitality groups from concept to keys — site selection, design, construction, fit-out, handover.',
  },
  {
    slug: 'government-and-public-sector',
    name: 'Government & Public-Sector Contracts',
    short: 'Registered with Lagos State and the Federal Government of Nigeria.',
    full: 'We are registered as contractors with both the Lagos State Government and the Federal Government of Nigeria. We hold active positions on public-sector procurement rosters at both levels, with engagements across the Federal Capital Territory and an established footprint with Lagos State agencies. Public-sector work demands tighter procurement compliance, longer bonding tails, and harder schedule discipline. We’re built for it. Capability statements available on request.',
  },
];
