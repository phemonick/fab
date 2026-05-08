'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { cn } from '@/lib/cn';

const NAV = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-cinematic',
          scrolled
            ? 'bg-ink/85 backdrop-blur-md border-b border-cream/[0.06]'
            : 'bg-gradient-to-b from-ink/70 to-transparent',
        )}
      >
        <div className="mx-auto flex max-w-wide items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={isActive(item.href)}
                className={cn(
                  'nav-link text-sm font-medium tracking-wide',
                  isActive(item.href) ? 'text-cream' : 'text-warmgrey-400 hover:text-cream',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" variant="secondary">
              Start a project
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-cream"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-opacity duration-500',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-ink" />
        <nav
          aria-label="Mobile primary"
          className="relative flex h-full flex-col justify-between px-6 pb-12 pt-24"
        >
          <ul className="flex flex-col gap-2">
            {NAV.map((item, i) => (
              <li
                key={item.href}
                className={cn(
                  'transition-all duration-700 ease-out-cinematic',
                  open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                )}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'block py-3 font-serif text-4xl leading-none tracking-tight',
                    isActive(item.href) ? 'text-cream' : 'text-warmgrey-400',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={cn(
              'transition-all duration-700 ease-out-cinematic',
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            )}
            style={{ transitionDelay: open ? '480ms' : '0ms' }}
          >
            <p className="text-eyebrow uppercase tracking-eyebrow text-warmgrey-600 mb-3">Get in touch</p>
            <a href="tel:+2348023283351" className="block text-cream text-lg">
              +234 802 328 3351
            </a>
            <a href="mailto:info@buildwithfab.com" className="block text-warmgrey-400 mt-1">
              info@buildwithfab.com
            </a>
            <div className="mt-6">
              <Button href="/contact" variant="primary" className="w-full justify-center">
                Start a project
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
