import Link from 'next/link';
import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <Container wide className="min-h-[80svh] flex flex-col justify-center py-32">
      <Eyebrow className="mb-6">404</Eyebrow>
      <h1 className="display-line text-display-lg text-cream text-balance max-w-3xl">
        This plot isn&apos;t on our books.
      </h1>
      <p className="mt-6 max-w-xl text-cream/80 leading-relaxed text-pretty">
        The page you&apos;re looking for has moved or doesn&apos;t exist. Try the homepage, or browse the portfolio.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/" variant="primary">Back to home</Button>
        <Button href="/projects" variant="ghost">Browse projects</Button>
      </div>
    </Container>
  );
}
