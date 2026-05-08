export type Executive = {
  slug: string;
  name: string;
  title: string;
  /** Optional short pre-title shown above the name (e.g. honorific). */
  honorific?: string;
  /** Multi-paragraph bio. */
  paragraphs: string[];
  /** Order on the leadership page. */
  order: number;
};

export const executives: Executive[] = [
  {
    slug: 'shehu-usman-chindo-yamusa-iii',
    honorific: 'HRH. Dr.',
    name: 'Shehu Usman Chindo-Yamusa III',
    title: 'Chairman · Emir of Keffi, Nasarawa State',
    paragraphs: [
      'The Emir of Keffi, Nasarawa State. President of the Keffi Emirate Council, Deputy Chairman of the Nasarawa State Council of Emirs and Chiefs, and Chancellor of Nasarawa State University.',
      'Before his ascension, Dr. Chindo-Yamusa served as the Nasarawa State Coordinator for UNICEF’s community animation mandate, overseeing borehole construction across every local government area in the state. He sits as a member of the Northern State Council of Chiefs and Emirs and represented the North Central geo-political zone on the Committee on the New Partnership for African Development (NEPAD), with national steering committee membership covering Benue, Plateau, Niger, Nasarawa, Kogi, and Kwara states.',
      'A member of the Nigerian Bar Association and a Fellow of the Chartered Institute of Management, he is the author of academic books and journals on minerals law, the Islamic legal framework for shareholders and directors, sustainable development, renewable energy, and global warming. The Learned Emir has presented scholarly papers at the United Nations headquarters in New York. As Chairman of FAB Projects, he provides the strategic and institutional anchoring the firm draws on in its public-sector work — particularly across Northern Nigeria and the Federal Capital Territory.',
    ],
    order: 1,
  },
  {
    slug: 'ibrahim-ameh',
    honorific: 'Dr.',
    name: 'Ibrahim Ameh',
    title: 'Executive Director',
    paragraphs: [
      'A UK-based industrialist, lawyer, and Business Finance Consultant. Founder, Chief Executive, and Chairman of First Platinum Group — a conglomerate that includes First Platinum Care, Vintage Health Care, Poverty Alleviators, ANSA Worldwide Charity, and Mid-Atlantic Petroleum, Gas & Minerals (MAPEG).',
      'A philanthropist and motivational speaker, Dr. Ameh is the author of Leader That Makes The Leader and Packaged for Promotion, and a regular voice on success, leadership, and wealth creation. He is a supporter of Save the Children and Amnesty International, a member of the Chartered Institute of Management Professional, and a seasoned project manager with experience across major property and construction projects in the United Kingdom.',
      'As Executive Director, he brings a global lens and a finance-first discipline to the firm’s investment, joint-venture, and capital-allocation decisions.',
    ],
    order: 2,
  },
  {
    slug: 'olanrewaju-akeem-oladele',
    name: 'Olanrewaju Akeem Oladele',
    title: 'Chief Executive Officer',
    paragraphs: [
      'The founder and chief executive. A career banker for fourteen years across multiple Nigerian financial institutions before he left the desk in 2011 to start a development firm with one site, one drawing, and a clear standard. By 2012 the practice was building. By 2021 it was formally incorporated as FAB Projects Nigeria Limited. By 2024 the firm had handed over Victoria Court Estate, its flagship private development.',
      'A philanthropist by orientation and a builder by discipline, he leads the firm’s strategy, commercial relationships, and capital structure — across the residential portfolio, the commercial book, the joint-venture pipeline, and the government-sector engagements with both Lagos State and the federal government. He is the executive most clients meet first and the one most projects close with. He believes the work speaks first and the developer second — a position the firm’s record has earned the right to hold.',
    ],
    order: 3,
  },
  {
    slug: 'oluwafemi-adekunle',
    name: 'Oluwafemi Adekunle',
    title: 'Chief Operating Officer',
    paragraphs: ['Chief Operating Officer.'],
    order: 4,
  },
];
