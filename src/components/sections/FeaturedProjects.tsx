import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../Container';
import { Eyebrow } from '../Eyebrow';
import { ProjectCard } from '../ProjectCard';
import { Reveal } from '../Reveal';
import { featuredProjects } from '@/data/projects';

export function FeaturedProjects() {
  return (
    <section className="py-24 lg:py-32" id="projects">
      <Container wide>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12 lg:mb-16">
          <div>
            <Reveal>
              <Eyebrow className="mb-6">Featured Work</Eyebrow>
              <h2 className="display-line text-display-md text-cream text-balance">
                The portfolio in three buildings.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm text-cream hover:text-gold transition-colors"
            >
              <span>See all projects</span>
              <ArrowUpRight className="btn-arrow h-4 w-4 stroke-[1.5]" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
