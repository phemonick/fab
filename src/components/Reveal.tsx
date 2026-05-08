'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/cn';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Direction of the reveal motion. */
  direction?: 'up' | 'left' | 'none';
  /** When true, animates only once. */
  once?: boolean;
} & Omit<HTMLMotionProps<'div'>, 'initial' | 'whileInView' | 'transition' | 'viewport'>;

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const offset = direction === 'left' ? { x: 24, y: 0 } : direction === 'up' ? { x: 0, y: 32 } : { x: 0, y: 0 };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once, margin: '-80px' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
