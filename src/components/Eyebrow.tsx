import { cn } from '@/lib/cn';

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-eyebrow uppercase tracking-eyebrow font-medium text-gold',
        className,
      )}
    >
      <span aria-hidden className="block h-px w-8 bg-gold/60" />
      <span>{children}</span>
    </span>
  );
}
