import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ProjectsIndex } from '@/components/ProjectsIndex';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse the FAB Projects portfolio across Lagos and Abuja — completed multi-unit residences, the Victoria Court Estate flagship, ongoing developments at Millennium Estate and Surulere, and more.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Portfolio"
        title={
          <>
            One firm. A portfolio of completed homes,<br className="hidden md:block" /> and premium developments now rising.
          </>
        }
        subtitle="Filter the work by status, sector, or location — from Ikeja and Gbagada to Parkview, Ikoyi and Centenary City, Abuja."
        image={{
          src: '/projects/victoria-court/03-terrace-front.jpg',
          alt: 'Victoria Court terrace, Opebi',
        }}
        graded={false}
      />
      <ProjectsIndex projects={projects} />
    </>
  );
}
