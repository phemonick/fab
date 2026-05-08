import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { cn } from '@/lib/cn';

type ProjectCardProps = {
  project: Project;
  /** Layout variant */
  size?: 'default' | 'large';
  className?: string;
};

export function ProjectCard({ project, size = 'default', className }: ProjectCardProps) {
  const cover = project.images[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        'group relative block overflow-hidden bg-ink-700',
        size === 'large' ? 'aspect-[4/5] sm:aspect-[3/4]' : 'aspect-[4/5]',
        className,
      )}
    >
      {cover ? (
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes={size === 'large' ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'}
          className="object-cover transition-transform duration-1000 ease-out-cinematic group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center text-warmgrey-600 text-xs uppercase tracking-eyebrow">
          Photography to come
        </div>
      )}

      {/* Render badge on top-right when applicable */}
      {cover?.isRender && (
        <div className="absolute top-4 right-4 z-10 bg-ink/80 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-eyebrow text-cream">
          Architectural Render
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="text-eyebrow uppercase tracking-eyebrow text-gold mb-3">
          {project.statusLabel}
        </p>
        <h3 className="font-serif text-2xl sm:text-3xl leading-tight text-cream mb-1.5">
          {project.cardName ?? project.name}
        </h3>
        <p className="text-sm text-warmgrey-400 mb-5">{project.location}, {project.city}</p>
        <p className="text-sm text-cream/80 leading-relaxed line-clamp-2 mb-6">
          {project.hook}
        </p>
        <span className="inline-flex items-center gap-2 text-sm text-cream group-hover:text-gold transition-colors">
          <span>View project</span>
          <ArrowUpRight className="btn-arrow h-4 w-4 stroke-[1.5]" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
