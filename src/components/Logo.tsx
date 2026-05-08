import Link from 'next/link';
import { cn } from '@/lib/cn';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="FAB Projects Nigeria — home"
      className={cn('group inline-flex items-baseline gap-2 select-none', className)}
    >
      <span className="font-serif text-2xl tracking-tight text-cream transition-colors duration-300 group-hover:text-gold">
        FAB
      </span>
      <span className="hidden text-xs uppercase tracking-eyebrow text-warmgrey-500 transition-colors duration-300 group-hover:text-cream sm:inline">
        · Projects Nigeria
      </span>
    </Link>
  );
}
