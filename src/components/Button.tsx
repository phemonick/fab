import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
};

type LinkProps = CommonProps & { href: string; type?: never };
type ButtonProps = CommonProps & { href?: never; type?: 'button' | 'submit' };

const styles: Record<Variant, string> = {
  primary:
    'bg-gold text-ink hover:bg-gold-400 focus-visible:bg-gold-400',
  secondary:
    'border border-cream/20 text-cream hover:bg-cream hover:text-ink focus-visible:bg-cream focus-visible:text-ink',
  ghost:
    'text-cream hover:text-gold focus-visible:text-gold',
};

const base =
  'group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out-cinematic';

export function Button(props: LinkProps | ButtonProps) {
  const { children, variant = 'primary', className, showArrow = true } = props;
  const arrow = showArrow ? (
    <ArrowUpRight className="btn-arrow h-4 w-4 stroke-[1.5]" aria-hidden />
  ) : null;
  const cls = cn(base, styles[variant], className);

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={cls}>
        <span>{children}</span>
        {arrow}
      </Link>
    );
  }

  return (
    <button type={props.type ?? 'button'} className={cls}>
      <span>{children}</span>
      {arrow}
    </button>
  );
}
