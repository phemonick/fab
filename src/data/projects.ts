export type ProjectStatus =
  | 'completed'
  | 'ongoing-finishing'
  | 'ongoing-construction'
  | 'ongoing-design'
  | 'upcoming';

export type ProjectSector = 'residential' | 'commercial' | 'mixed-use' | 'public-sector';

export type ProjectImage = {
  src: string;
  alt: string;
  /** When true, image is an architectural rendering, not a photograph. */
  isRender?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  /** Short label used on cards (often shorter than full name). */
  cardName?: string;
  location: string;
  city: string;
  status: ProjectStatus;
  statusLabel: string;
  sector: ProjectSector;
  year?: string;
  buildPeriod?: string;
  /** A single hook line, used on cards. */
  hook: string;
  /** Multi-paragraph "the brief" copy. */
  brief?: string;
  /** Multi-paragraph "the build" copy. */
  build?: string;
  facts: { label: string; value: string }[];
  images: ProjectImage[];
  /** True for the 3 featured projects shown on the homepage. */
  featured?: boolean;
  /** Display order on the projects index. */
  order: number;
};

export const projects: Project[] = [
  // ============================================
  // FLAGSHIP — VICTORIA COURT
  // ============================================
  {
    slug: 'victoria-court-estate',
    name: 'Victoria Court Estate',
    cardName: 'Victoria Court Estate',
    location: 'Opebi, Ikeja',
    city: 'Lagos',
    status: 'completed',
    statusLabel: 'Completed · 2024',
    sector: 'residential',
    year: '2024',
    hook: 'A fifteen-unit private estate of detached, semi-detached, and terrace homes — handed over October 31, 2024 in honor of the late Mrs. Jesutomi Omotola Victoria Oladele.',
    brief:
      'A private mini-estate in one of Lagos’s most pressured residential corridors, designed to hold three categories of buyer in a single development without compromising the experience of any of them. The land was modest by estate standards. The expectation, set by the surrounding addresses on Opebi, was not.',
    build:
      'Fifteen units across detached, semi-detached, and terrace formats, threaded around a shared central spine. The estate gateway carries the Victoria Court name in laser-cut floral steel — a private signature, not a marketing one. Detached homes face the perimeter; the terrace block sits along the rear boundary; semi-detached units close the loop. Imported finishes throughout, with tile, joinery, and metalwork specified to match the brief and the address. Handed over on October 31, 2024 in a private commissioning ceremony.',
    facts: [
      { label: 'Location', value: 'Opebi, Ikeja, Lagos' },
      { label: 'Sector', value: 'Residential — private estate' },
      { label: 'Units', value: '5 detached · 4 semi-detached · 6 terrace' },
      { label: 'Status', value: 'Completed' },
      { label: 'Handover', value: 'October 31, 2024' },
    ],
    images: [
      { src: '/projects/victoria-court/01-entrance-archway.jpg', alt: 'Victoria Court Estate gateway with laser-cut floral steel panels' },
      { src: '/projects/victoria-court/03-terrace-front.jpg', alt: 'Three-quarter view of a Victoria Court terrace with balcony and glass railing' },
      { src: '/projects/victoria-court/04-terrace-front-alt.jpg', alt: 'Victoria Court terrace alternative angle' },
      { src: '/projects/victoria-court/05-terrace-detail.jpg', alt: 'Victoria Court terrace detail' },
      { src: '/projects/victoria-court/06-facade-detail.jpg', alt: 'Victoria Court facade detail' },
      { src: '/projects/victoria-court/07-side-elevation.jpg', alt: 'Victoria Court side elevation' },
      { src: '/projects/victoria-court/08-perimeter.jpg', alt: 'Victoria Court perimeter and approach' },
    ],
    featured: true,
    order: 1,
  },

  // ============================================
  // ONGOING — SURULERE (48 units)
  // ============================================
  {
    slug: 'surulere-residences',
    name: 'Surulere Residences',
    cardName: 'Surulere Residences',
    location: 'Surulere',
    city: 'Lagos',
    status: 'ongoing-construction',
    statusLabel: 'Ongoing · Under Construction',
    sector: 'residential',
    hook: 'A 48-unit residential development for the Surulere mainland market — three-bedroom apartments at scale. Designed, financed, and currently rising on site.',
    brief:
      'Surulere is a mainland market with its own logic: dense, generationally rooted, and home to buyers who know the neighborhood block by block. The brief asked for a residential development that read as contemporary without breaking with the street’s character — and that priced honestly for a market that asks hard questions about value-per-square-meter.',
    build:
      'Forty-eight three-bedroom apartments across a multi-story block, in white render with orange accent banding and lavender-tinted concrete fields. The design phase is complete and approved; construction is currently active on site. The image on this page is the approved architectural rendering of the design now being built.',
    facts: [
      { label: 'Location', value: 'Surulere, Lagos' },
      { label: 'Sector', value: 'Residential — multi-unit apartment block' },
      { label: 'Units', value: '48 three-bedroom apartments' },
      { label: 'Status', value: 'Ongoing — Under Construction' },
    ],
    images: [
      {
        src: '/projects/surulere/01-render-approved-design.jpg',
        alt: 'Approved architectural rendering of the Surulere Residences development',
        isRender: true,
      },
    ],
    featured: true,
    order: 2,
  },

  // ============================================
  // ONGOING — MILLENNIUM ESTATE (Obaro Close, 6 units)
  // ============================================
  {
    slug: 'millennium-estate-obaro-close',
    name: 'Six Detached Houses, Obaro Close',
    cardName: 'Millennium Estate, Gbagada',
    location: 'Obaro Close, Millennium Estate, Gbagada',
    city: 'Lagos',
    status: 'ongoing-finishing',
    statusLabel: 'Ongoing · Finishing',
    sector: 'residential',
    hook: 'Six fully detached houses on a single Gbagada site — modernist mass in dark cedar cladding, white concrete, and blue-glazed apertures. Currently in the finishing phase.',
    brief:
      'Millennium Estate, Gbagada, asked for six detached houses that read modern from the street and disciplined from inside — built to a specification that would hold against the estate’s existing top-tier inventory.',
    build:
      'A three-storey volume in white concrete, clad in dark vertical cedar, fenestrated with white-framed apertures filled with blue-tinted glazing. Horizontal hardwood-slat pergolas mark the upper-floor balconies. Internal staircases are glass-balustraded, switchbacking through a top-lit double-height void. The development is now in the finishing phase — joinery, glazing, and lighting installation in progress.',
    facts: [
      { label: 'Location', value: 'Obaro Close, Millennium Estate, Gbagada, Lagos' },
      { label: 'Sector', value: 'Residential — multi-unit detached' },
      { label: 'Units', value: '6 fully detached houses' },
      { label: 'Status', value: 'Ongoing — Finishing phase' },
    ],
    images: [
      { src: '/projects/obaro-close-millennium/01-cube-detail.jpg', alt: 'Dark cedar-clad volume with white concrete frame and glass balcony' },
      { src: '/projects/obaro-close-millennium/04-slats.jpg', alt: 'Horizontal hardwood-slat pergola detail' },
      { src: '/projects/obaro-close-millennium/02-window-detail.jpg', alt: 'White concrete with blue-glazed apertures' },
      { src: '/projects/obaro-close-millennium/03-facade-up.jpg', alt: 'Looking up at the building’s wood-clad upper volume' },
      { src: '/projects/obaro-close-millennium/05-windows.jpg', alt: 'Window pattern detail' },
    ],
    featured: true,
    order: 3,
  },

  // ============================================
  // PARKVIEW (Ikoyi) — 8 units, 2 per block
  // ============================================
  {
    slug: 'parkview-residences',
    name: 'Parkview Residences',
    cardName: 'Parkview Residences',
    location: 'Parkview, Ikoyi',
    city: 'Lagos',
    status: 'completed',
    statusLabel: 'Completed',
    sector: 'residential',
    hook: 'Eight semi-detached homes across four blocks of two — at one of Ikoyi’s most coveted addresses.',
    brief:
      'Parkview is an Ikoyi address that does not need an introduction. The brief was simple to state and difficult to deliver: eight semi-detached homes, two per block, at the standard Ikoyi expects.',
    build:
      'Four blocks of two semi-detached units each — eight homes in total — designed and finished to the specification a Parkview address demands. Imported tile and joinery, careful glazing, and a finishing palette that matches the neighborhood without copying it.',
    facts: [
      { label: 'Location', value: 'Parkview Estate, Ikoyi, Lagos' },
      { label: 'Sector', value: 'Residential — semi-detached' },
      { label: 'Units', value: '8 semi-detached homes (4 blocks × 2 units)' },
      { label: 'Status', value: 'Completed' },
    ],
    images: [
      // Reuse the interiors as gallery placeholders since we have no Parkview photography yet.
      { src: '/projects/interiors/01-master-bedroom.jpg', alt: 'Premium interior — master bedroom' },
      { src: '/projects/interiors/04-kitchen.jpg', alt: 'Premium interior — kitchen' },
      { src: '/projects/interiors/05-master-bath.jpg', alt: 'Premium interior — master bathroom' },
    ],
    order: 4,
  },

  // ============================================
  // COMPLETED MULTI-UNIT
  // ============================================
  {
    slug: 'allen-house-lopez-close',
    name: 'Allen House',
    cardName: 'Allen House',
    location: '5 Lopez Close, Opebi',
    city: 'Lagos',
    status: 'completed',
    statusLabel: 'Completed',
    sector: 'residential',
    hook: 'A twin duplex with a private courtyard pool, vertical garden, and floor-to-ceiling glazing — one of our quietest favorites.',
    brief:
      'A twin-house duplex on a constrained Opebi plot, with the rare ask: a private swimming pool, a green wall, and the feeling of more land than the plot survey suggests. The clients wanted a pair of homes that read as one architectural gesture from the street and as two private residences from inside.',
    build:
      'Twin three-bedroom duplexes oriented to share a private courtyard pool. Vertical garden treatment along the rear wall, floor-to-ceiling glazing on the living level, water-feature tile spilling along the pool’s long edge. Finishing palette: warm white, charcoal, walnut, and Italian marble.',
    facts: [
      { label: 'Location', value: '5 Lopez Close, Opebi, Ikeja, Lagos' },
      { label: 'Sector', value: 'Residential — semi-detached' },
      { label: 'Units', value: '2 semi-detached' },
      { label: 'Status', value: 'Completed' },
    ],
    images: [
      { src: '/projects/allen-house/01-pool.jpg', alt: 'Private courtyard pool with vertical garden and water feature' },
      { src: '/projects/allen-house/02-front.jpg', alt: 'Front elevation of the duplex' },
      { src: '/projects/allen-house/04-courtyard.jpg', alt: 'Courtyard view' },
    ],
    order: 5,
  },
  {
    slug: 'medina-estate-gbagada',
    name: 'Three Houses, Medina Estate',
    cardName: 'Medina Estate',
    location: '10 Sesan Oshilloye Street, Medina Estate, Gbagada',
    city: 'Lagos',
    status: 'completed',
    statusLabel: 'Completed · 2022',
    sector: 'residential',
    year: '2022',
    buildPeriod: 'January 2022 — October 2022',
    hook: 'Three fully detached four-bedroom homes inside Medina Estate, Gbagada. Delivered between January and October 2022.',
    facts: [
      { label: 'Location', value: '10 Sesan Oshilloye Street, Medina Estate, Gbagada, Lagos' },
      { label: 'Sector', value: 'Residential — multi-unit' },
      { label: 'Units', value: '3 fully detached · 4 bedrooms each' },
      { label: 'Status', value: 'Completed' },
      { label: 'Build period', value: 'January 2022 — October 2022' },
    ],
    images: [
      { src: '/projects/medina-estate/01-front.jpg', alt: 'Stone-clad front elevation at 10 Sesan Oshilloye Street' },
      { src: '/projects/medina-estate/02-elevation.jpg', alt: 'Side elevation' },
    ],
    order: 6,
  },
  {
    slug: 'talabi-estate-ikeja',
    name: 'Four Terraces, Talabi Estate',
    cardName: 'Talabi Estate',
    location: '40 Talabi Street, Talabi Estate, Ikeja',
    city: 'Lagos',
    status: 'completed',
    statusLabel: 'Completed · 2018',
    sector: 'residential',
    year: '2018',
    buildPeriod: 'June 2018 — December 2018',
    hook: 'Four four-bedroom terraces inside Talabi Estate, off Adeniyi Jones — a Lagos address that doesn’t forgive a corner cut.',
    facts: [
      { label: 'Location', value: '40 Talabi Street, Talabi Estate, off Adeniyi Jones, Ikeja, Lagos' },
      { label: 'Sector', value: 'Residential — multi-unit terrace' },
      { label: 'Units', value: '4 four-bedroom terraces' },
      { label: 'Status', value: 'Completed' },
      { label: 'Build period', value: 'June 2018 — December 2018' },
    ],
    images: [
      { src: '/projects/talabi-estate/01-street-elevation.jpg', alt: 'Street elevation behind slatted black privacy gate' },
      { src: '/projects/talabi-estate/02-detail.jpg', alt: 'Upper-floor detail' },
      { src: '/projects/talabi-estate/03-balconies.jpg', alt: 'Balcony rhythm across the terrace block' },
      { src: '/projects/talabi-estate/04-side.jpg', alt: 'Side elevation' },
    ],
    order: 7,
  },
  {
    slug: 'wura-esan-weara-estate',
    name: 'Four Terraces, WEARA Estate',
    cardName: 'WEARA Estate',
    location: '4b Wura Esan Street, WEARA Estate, Ikeja',
    city: 'Lagos',
    status: 'completed',
    statusLabel: 'Completed',
    sector: 'residential',
    hook: 'Four terraces threaded into the WEARA Estate fabric, off Adeniyi Jones, Ikeja.',
    facts: [
      { label: 'Location', value: '4b Wura Esan Street, WEARA Estate, off Adeniyi Jones, Ikeja, Lagos' },
      { label: 'Sector', value: 'Residential — multi-unit terrace' },
      { label: 'Units', value: '4 terraces' },
      { label: 'Status', value: 'Completed' },
    ],
    images: [],
    order: 8,
  },
  {
    slug: 'dideolu-estate-ogba',
    name: 'Two Semi-Detached, Dideolu Estate',
    cardName: 'Dideolu Estate',
    location: '7 Bolodeoku Street, Dideolu Estate, Ogba',
    city: 'Lagos',
    status: 'completed',
    statusLabel: 'Completed',
    sector: 'residential',
    hook: 'A pair of semi-detached homes at 7 Bolodeoku Street, Dideolu Estate, Ogba.',
    facts: [
      { label: 'Location', value: '7 Bolodeoku Street, Dideolu Estate, Ogba, Lagos' },
      { label: 'Sector', value: 'Residential — semi-detached' },
      { label: 'Units', value: '2 semi-detached' },
      { label: 'Status', value: 'Completed' },
    ],
    images: [],
    order: 9,
  },
  {
    slug: 'beckley-avenue-millennium-estate',
    name: 'Three Duplexes, 12 Beckley Avenue',
    cardName: 'Beckley Avenue, Millennium',
    location: '12 Beckley Avenue, Millennium Estate, Gbagada',
    city: 'Lagos',
    status: 'completed',
    statusLabel: 'Completed',
    sector: 'residential',
    hook: 'Three fully detached five-bedroom duplexes inside Millennium Estate, Gbagada — the kind of build that travels by reference.',
    facts: [
      { label: 'Location', value: '12 Beckley Avenue, Millennium Estate, Gbagada, Lagos' },
      { label: 'Sector', value: 'Residential — multi-unit' },
      { label: 'Units', value: '3 fully detached · 5 bedrooms each' },
      { label: 'Status', value: 'Completed' },
    ],
    images: [],
    order: 10,
  },
];

export const featuredProjects = projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
export const completedProjects = projects.filter((p) => p.status === 'completed');
export const ongoingProjects = projects.filter((p) => p.status.startsWith('ongoing'));

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
