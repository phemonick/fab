import { cn } from '@/lib/cn';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** When true, lifts the max-width to the wider editorial measure (88rem). */
  wide?: boolean;
};

export function Container({ children, className, wide = false }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-5 sm:px-8 lg:px-12',
        wide ? 'max-w-wide' : 'max-w-screen-xl',
        className,
      )}
    >
      {children}
    </div>
  );
}
