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
  /** Display order within the homepage "Featured Work" strip (independent of the index `order`). */
  featuredOrder?: number;
  /** True for premium-tier residences at marquee addresses (e.g. Parkview, Ikoyi). */
  premium?: boolean;
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
    featuredOrder: 1,
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
    featuredOrder: 3,
    order: 3,
  },

  // ============================================
  // PREMIUM — THE GROVE, CENTENARY CITY (Abuja) — ongoing
  // ============================================
  {
    slug: 'the-grove-centenary-city',
    name: 'The Grove, Centenary City',
    cardName: 'The Grove, Abuja',
    location: 'Centenary City',
    city: 'Abuja',
    status: 'ongoing-construction',
    statusLabel: 'Ongoing · Premium',
    sector: 'residential',
    hook: 'A luxury terrace-duplex development at Centenary City, Abuja — five-bedroom homes set against the FCT hills, now rising from foundation to frame.',
    brief:
      'The Grove is a luxury terrace-duplex development inside Centenary City, Abuja — a master-planned address with room to breathe and a skyline of hills to answer to. The brief is unambiguous: five-bedroom duplexes specified and built to a standard that earns the location, with the scale and generosity that buyers at this address expect.',
    build:
      'Five-bedroom terrace duplexes, taken from the ground up. The work shown here is the substructure and frame: a cast ground-floor slab, column starter bars set out and surveyed to the millimetre, and the first columns boxed in timber formwork and poured. Engineering precision is the story at this stage — total-station set-out, disciplined reinforcement, and a column grid laid down to carry the open, light-filled duplex plans to come. Construction is active on site.',
    facts: [
      { label: 'Location', value: 'Centenary City, Abuja, FCT' },
      { label: 'Sector', value: 'Residential — terrace duplexes' },
      { label: 'Units', value: '5-bedroom terrace duplexes' },
      { label: 'Class', value: 'Premium — Luxury' },
      { label: 'Status', value: 'Ongoing — Under Construction' },
    ],
    images: [
      { src: '/projects/the-grove-abuja/01-site-rising.jpg', alt: 'The Grove construction site at Centenary City, Abuja — cast slab and columns rising against the FCT hills' },
      { src: '/projects/the-grove-abuja/02-columns-landscape.jpg', alt: 'Cast concrete columns rising over the Centenary City landscape' },
      { src: '/projects/the-grove-abuja/03-survey-setout.jpg', alt: 'Surveyor setting out column positions with a total station on site' },
      { src: '/projects/the-grove-abuja/04-formwork-detail.jpg', alt: 'Timber column formwork being fixed and braced on site' },
      { src: '/projects/the-grove-abuja/05-columns-progress.jpg', alt: 'Cast columns and reinforcement starter bars across the ground-floor slab' },
    ],
    premium: true,
    order: 4,
  },

  // ============================================
  // PREMIUM — IKOYI II (Prince Tayo Adesanya Street)
  // ============================================
  {
    slug: 'ikoyi-prince-tayo-adesanya',
    name: 'Private Residence, Prince Tayo Adesanya Street',
    cardName: 'Prince Tayo Adesanya, Ikoyi',
    location: 'Prince Tayo Adesanya Street, Parkview, Ikoyi',
    city: 'Lagos',
    status: 'completed',
    statusLabel: 'Completed · Premium',
    sector: 'residential',
    hook: 'A sculptural white three-storey residence at Parkview, Ikoyi — laser-cut timber screens, a signature terracotta gate, and a massing that holds its own on one of Lagos’s most exacting streets.',
    brief:
      'Parkview, Ikoyi sets a standard before a single drawing is made — the address itself is the brief. The ask here was a private residence that reads as architecture rather than inventory: confident from the street, calm inside, and detailed to a level that rewards a second and third look.',
    build:
      'A crisp white volume composed as stacked, shifting masses, fenestrated with deep-set apertures and wrapped in a sculptural three-storey elevation. The street face is screened by bespoke laser-cut panels — a contemporary reading of the mashrabiya — that filter light and privacy without closing the house off. A warm terracotta timber gate signs the entrance against the white render, framed by mature palms and a banded approach. Finishes are specified to the address: imported tile, precise joinery, and metalwork carried through to the smallest reveal.',
    facts: [
      { label: 'Location', value: 'Prince Tayo Adesanya Street, Parkview, Ikoyi, Lagos' },
      { label: 'Sector', value: 'Residential — private residence' },
      { label: 'Class', value: 'Premium' },
      { label: 'Status', value: 'Completed' },
    ],
    images: [
      { src: '/projects/ikoyi-2-tayo-adesanya/01-front-elevation.jpg', alt: 'White three-storey residence with terracotta gate and laser-cut screens at Parkview, Ikoyi' },
      { src: '/projects/ikoyi-2-tayo-adesanya/02-approach.jpg', alt: 'Banded approach to the residence with palm landscaping' },
      { src: '/projects/ikoyi-2-tayo-adesanya/03-lattice-screen-detail.jpg', alt: 'Bespoke laser-cut screen panels filtering the upper-floor elevation' },
      { src: '/projects/ikoyi-2-tayo-adesanya/04-gate-landscaping.jpg', alt: 'Terracotta timber entrance gate framed by mature palms' },
      { src: '/projects/ikoyi-2-tayo-adesanya/05-elevation-alt.jpg', alt: 'Three-quarter view of the residence and its sculptural massing' },
    ],
    premium: true,
    featured: true,
    featuredOrder: 2,
    order: 5,
  },

  // ============================================
  // PREMIUM — IKOYI I (Professor Jubril Aminu Street)
  // ============================================
  {
    slug: 'ikoyi-professor-jubril-aminu',
    name: 'Private Residences, Professor Jubril Aminu Street',
    cardName: 'Professor Jubril Aminu, Ikoyi',
    location: 'Professor Jubril Aminu Street, Parkview, Ikoyi',
    city: 'Lagos',
    status: 'completed',
    statusLabel: 'Completed · Premium',
    sector: 'residential',
    hook: 'Contemporary detached homes on a quiet Parkview close — stone-textured render, timber-screened balconies, and louvred privacy gates, delivered to the Ikoyi standard.',
    brief:
      'A pair of contemporary residences on a tree-lined close inside Parkview, Ikoyi, for buyers who want modern architecture without noise. The brief asked for homes that feel substantial and private from the street, and generous and light-filled within — at a finish level the neighbourhood takes for granted.',
    build:
      'Three-storey volumes in stone-textured render, articulated with deep balconies screened by dark hardwood slats and crowned by a sheltering roof plane. White louvred gates hold privacy at the boundary while keeping the street elevation calm. The palette is deliberately restrained — warm grey, charcoal, and timber — letting proportion and detailing carry the address rather than ornament.',
    facts: [
      { label: 'Location', value: 'Professor Jubril Aminu Street, Parkview, Ikoyi, Lagos' },
      { label: 'Sector', value: 'Residential — private residences' },
      { label: 'Class', value: 'Premium' },
      { label: 'Status', value: 'Completed' },
    ],
    images: [
      { src: '/projects/ikoyi-1-jubril-aminu/01-front-elevation.jpg', alt: 'Contemporary stone-textured residence with timber-screened balcony at Parkview, Ikoyi' },
      { src: '/projects/ikoyi-1-jubril-aminu/02-twin-homes.jpg', alt: 'Pair of detached residences behind white louvred gates' },
      { src: '/projects/ikoyi-1-jubril-aminu/03-facade-detail.jpg', alt: 'Facade detail — hardwood-slat balcony screen and deep apertures' },
      { src: '/projects/ikoyi-1-jubril-aminu/04-estate-context.jpg', alt: 'The residences within the Parkview estate context' },
      { src: '/projects/ikoyi-1-jubril-aminu/05-estate-street.jpg', alt: 'Tree-lined Parkview estate street approaching the residences' },
    ],
    premium: true,
    order: 6,
  },

  // ============================================
  // PREMIUM — IKOYI III (Alade Odunewu Street) — ongoing
  // ============================================
  {
    slug: 'ikoyi-alade-odunewu',
    name: 'Maisonettes & Penthouses, Alade Odunewu Street',
    cardName: 'Alade Odunewu, Ikoyi',
    location: 'Alade Odunewu Street, Parkview, Ikoyi',
    city: 'Lagos',
    status: 'ongoing-construction',
    statusLabel: 'Ongoing · Premium',
    sector: 'residential',
    hook: 'A premium Parkview development rising on site — eight spacious maisonette units crowned by two penthouse apartments, photographed mid-build at Alade Odunewu Street, Ikoyi.',
    brief:
      'Another Parkview, Ikoyi address, and another exacting standard to build to. The brief is a premium multi-unit residence — eight generous maisonettes and two penthouse apartments — designed for scale and light, with wide spans and generous floor-to-floor heights, and a structure engineered to carry open, contemporary plans rather than work around them.',
    build:
      'Ten homes in all: eight spacious maisonette units below, two stunning penthouse apartments above. The reinforced-concrete frame is up — deep beams, a disciplined column grid, and broad structural bays that read the future living spaces before a single wall is set. Timber formwork crowns the roof level; reinforcement is staged on the slabs for the floors still to come. These photographs are an honest record of the work in progress — the bones of a premium development being put up to specification, on site, today.',
    facts: [
      { label: 'Location', value: 'Alade Odunewu Street, Parkview, Ikoyi, Lagos' },
      { label: 'Sector', value: 'Residential — maisonettes & penthouses' },
      { label: 'Units', value: '8 maisonettes · 2 penthouse apartments' },
      { label: 'Class', value: 'Premium' },
      { label: 'Status', value: 'Ongoing — Under Construction' },
    ],
    images: [
      { src: '/projects/ikoyi-3-alade-odunewu/01-structure-rising.jpg', alt: 'Reinforced-concrete structure rising on site at Alade Odunewu Street, Ikoyi' },
      { src: '/projects/ikoyi-3-alade-odunewu/02-structural-frame.jpg', alt: 'Structural frame with column grid and staged reinforcement' },
      { src: '/projects/ikoyi-3-alade-odunewu/03-column-rhythm.jpg', alt: 'Column rhythm across a broad structural bay under construction' },
      { src: '/projects/ikoyi-3-alade-odunewu/04-work-in-progress.jpg', alt: 'Work in progress — formwork, reinforcement, and an open structural plan' },
    ],
    premium: true,
    order: 7,
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
    order: 8,
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
    order: 9,
  },
  {
    slug: 'allen-avenue-ikeja',
    name: 'Three Houses, Allen Avenue',
    cardName: 'Allen Avenue, Ikeja',
    location: 'Allen Avenue, Ikeja',
    city: 'Lagos',
    status: 'completed',
    statusLabel: 'Completed · 2022',
    sector: 'residential',
    year: '2022',
    buildPeriod: 'January 2022 — October 2022',
    hook: 'Three fully detached four-bedroom homes on Allen Avenue, Ikeja. Delivered between January and October 2022.',
    facts: [
      { label: 'Location', value: 'Allen Avenue, Ikeja, Lagos' },
      { label: 'Sector', value: 'Residential — multi-unit' },
      { label: 'Units', value: '3 fully detached · 4 bedrooms each' },
      { label: 'Status', value: 'Completed' },
      { label: 'Build period', value: 'January 2022 — October 2022' },
    ],
    images: [
      { src: '/projects/allen-avenue/01-front.jpg', alt: 'Stone-clad front elevation, Allen Avenue, Ikeja' },
      { src: '/projects/allen-avenue/02-elevation.jpg', alt: 'Side elevation' },
    ],
    order: 10,
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
    order: 11,
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
    order: 12,
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
    order: 13,
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
    order: 14,
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? a.order) - (b.featuredOrder ?? b.order));
export const completedProjects = projects.filter((p) => p.status === 'completed');
export const ongoingProjects = projects.filter((p) => p.status.startsWith('ongoing'));

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
