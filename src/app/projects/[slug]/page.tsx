import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal } from '@/components/Reveal';
import { ProjectGallery } from '@/components/ProjectGallery';
import { Button } from '@/components/Button';
import { projects, getProject } from '@/data/projects';

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: project.name,
    description: project.hook,
    openGraph: {
      title: project.name,
      description: project.hook,
      images: project.images[0] ? [{ url: project.images[0].src, width: 1200, height: 630 }] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cover = project.images[0];
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink min-h-[80svh]">
        {cover && (
          <>
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="hero-overlay" />
          </>
        )}

        {/* Back link */}
        <div className="relative z-10 pt-28 lg:pt-32">
          <Container wide>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition-colors"
            >
              <ArrowLeft className="h-4 w-4 stroke-[1.5]" aria-hidden />
              <span>All projects</span>
            </Link>
          </Container>
        </div>

        <Container wide className="relative z-10 flex min-h-[60svh] flex-col justify-end pb-16 pt-12 lg:pb-20">
          {project.premium && (
            <div className="mb-5 inline-flex items-center gap-1.5 border border-gold/50 bg-ink/40 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-eyebrow text-gold">
              <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
              Premium Residence
            </div>
          )}
          <Eyebrow className="mb-6">
            {project.statusLabel} · {project.location}
          </Eyebrow>
          <h1 className="display-line text-display-lg text-cream text-balance max-w-4xl">
            {project.name}
          </h1>
          <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-cream/85 text-pretty">
            {project.hook}
          </p>
        </Container>
      </section>

      {/* AT A GLANCE */}
      <section className="border-y border-cream/[0.06] bg-ink-800 py-12 lg:py-14">
        <Container wide>
          <Reveal>
            <p className="text-eyebrow uppercase tracking-eyebrow text-warmgrey-600 mb-8">
              At a glance
            </p>
          </Reveal>
          <dl className="grid grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-3 lg:grid-cols-5">
            {project.facts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 0.06}>
                <dt className="text-eyebrow uppercase tracking-eyebrow text-warmgrey-600 mb-2">
                  {fact.label}
                </dt>
                <dd className="text-cream text-sm leading-snug text-balance">{fact.value}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* BRIEF & BUILD */}
      {(project.brief || project.build) && (
        <section className="py-24 lg:py-32">
          <Container wide>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
              {project.brief && (
                <Reveal className="lg:col-span-6">
                  <Eyebrow className="mb-6">The Brief</Eyebrow>
                  <p className="text-cream/85 leading-relaxed text-pretty max-w-prose">
                    {project.brief}
                  </p>
                </Reveal>
              )}
              {project.build && (
                <Reveal delay={0.15} className="lg:col-span-6">
                  <Eyebrow className="mb-6">The Build</Eyebrow>
                  <p className="text-cream/85 leading-relaxed text-pretty max-w-prose">
                    {project.build}
                  </p>
                </Reveal>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* GALLERY */}
      <section className="py-12 lg:py-16">
        <Container wide>
          <Reveal>
            <Eyebrow className="mb-8">Gallery</Eyebrow>
          </Reveal>
          <ProjectGallery images={project.images} />
        </Container>
      </section>

      {/* RENDER NOTE */}
      {cover?.isRender && (
        <section className="pb-12">
          <Container wide>
            <p className="text-warmgrey-500 text-sm leading-relaxed border-l-2 border-gold/60 pl-4 max-w-2xl">
              The image shown is the approved architectural rendering of the design now being built.
              Construction in progress, May 2026.
            </p>
          </Container>
        </section>
      )}

      {/* NEXT PROJECT */}
      {next && (
        <section className="border-t border-cream/[0.06] py-24 lg:py-32">
          <Container wide>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
              <div>
                <Eyebrow className="mb-4">Next Project</Eyebrow>
                <h2 className="display-line text-display-md text-cream text-balance">
                  {next.name}
                </h2>
              </div>
              <Button href={`/projects/${next.slug}`} variant="ghost">
                View next
              </Button>
            </div>
            <Link href={`/projects/${next.slug}`} className="group relative block aspect-[16/7] overflow-hidden bg-ink-700">
              {next.images[0] && (
                <Image
                  src={next.images[0].src}
                  alt={next.images[0].alt}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-1000 ease-out-cinematic group-hover:scale-[1.03]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-6 right-6">
                <span className="inline-flex items-center gap-2 text-sm text-cream group-hover:text-gold transition-colors">
                  <span>View project</span>
                  <ArrowUpRight className="btn-arrow h-4 w-4 stroke-[1.5]" aria-hidden />
                </span>
              </div>
            </Link>
          </Container>
        </section>
      )}
    </>
  );
}
