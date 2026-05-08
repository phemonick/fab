'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { Container } from './Container';
import { cn } from '@/lib/cn';
import type { Project } from '@/data/projects';

type Filter =
  | 'all'
  | 'completed'
  | 'ongoing'
  | 'residential'
  | 'public-sector'
  | 'lagos-ikeja'
  | 'lagos-gbagada'
  | 'lagos-ikoyi'
  | 'lagos-surulere'
  | 'abuja';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'completed', label: 'Completed' },
  { id: 'ongoing', label: 'Ongoing' },
  { id: 'residential', label: 'Residential' },
  { id: 'public-sector', label: 'Public Sector' },
  { id: 'lagos-ikeja', label: 'Ikeja' },
  { id: 'lagos-gbagada', label: 'Gbagada' },
  { id: 'lagos-ikoyi', label: 'Ikoyi' },
  { id: 'lagos-surulere', label: 'Surulere' },
];

function matches(project: Project, filter: Filter): boolean {
  if (filter === 'all') return true;
  if (filter === 'completed') return project.status === 'completed';
  if (filter === 'ongoing') return project.status.startsWith('ongoing');
  if (filter === 'residential') return project.sector === 'residential';
  if (filter === 'public-sector') return project.sector === 'public-sector';
  if (filter === 'lagos-ikeja') return /Ikeja|Opebi/i.test(project.location);
  if (filter === 'lagos-gbagada') return /Gbagada/i.test(project.location);
  if (filter === 'lagos-ikoyi') return /Ikoyi|Parkview/i.test(project.location);
  if (filter === 'lagos-surulere') return /Surulere/i.test(project.location);
  if (filter === 'abuja') return /Abuja|FCT/i.test(project.city);
  return true;
}

export function ProjectsIndex({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = useMemo(
    () =>
      projects.filter((p) => matches(p, filter)).sort((a, b) => a.order - b.order),
    [projects, filter],
  );

  return (
    <section className="py-16 lg:py-24">
      <Container wide>
        {/* Filter chips */}
        <div className="mb-12 lg:mb-16 flex flex-wrap gap-2 -mx-1 overflow-x-auto pb-2">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  'inline-flex items-center px-4 py-2 text-sm tracking-wide whitespace-nowrap transition-all duration-300 ease-out-cinematic border',
                  active
                    ? 'bg-cream text-ink border-cream'
                    : 'border-cream/15 text-warmgrey-400 hover:border-cream/40 hover:text-cream',
                )}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {visible.length === 0 && (
          <p className="text-warmgrey-500 text-center py-24">
            No projects match this filter yet. Try another.
          </p>
        )}
      </Container>
    </section>
  );
}
