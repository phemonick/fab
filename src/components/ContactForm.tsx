'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';

const PROJECT_TYPES = [
  'Private home',
  'Joint venture',
  'Acquisition',
  'Government / Public sector',
  'Press',
  'Other',
];
const LOCATIONS = ['Lagos', 'Abuja', 'FCT', 'Other Nigeria', 'International'];

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    // mailto fallback — reliable, no backend required for v1
    const data = new FormData(e.currentTarget);
    const subject = `Project inquiry: ${data.get('projectType') ?? 'General'}`;
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone') || '—'}`,
      `Project type: ${data.get('projectType')}`,
      `Location: ${data.get('location')}`,
      '',
      `${data.get('message')}`,
    ].join('\n');

    const href = `mailto:info@buildwithfab.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;

    // Optimistically mark as sent — user's email client takes it from here
    setTimeout(() => setStatus('sent'), 600);
  }

  const inputCls =
    'w-full bg-transparent border-b border-cream/15 py-3 px-0 text-cream placeholder:text-warmgrey-600 focus:border-gold focus:outline-none transition-colors';
  const labelCls = 'block text-eyebrow uppercase tracking-eyebrow text-warmgrey-600 mb-2';

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>Your name</label>
          <input id="name" name="name" type="text" required className={inputCls} placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email</label>
          <input id="email" name="email" type="email" required className={inputCls} placeholder="you@domain.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone <span className="text-warmgrey-700 normal-case tracking-normal">— optional</span></label>
          <input id="phone" name="phone" type="tel" className={inputCls} placeholder="+234" />
        </div>
        <div>
          <label htmlFor="projectType" className={labelCls}>Project type</label>
          <select id="projectType" name="projectType" required defaultValue="" className={cn(inputCls, 'appearance-none')}>
            <option value="" disabled>Choose one</option>
            {PROJECT_TYPES.map((t) => <option className="bg-ink" key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="location" className={labelCls}>Location</label>
          <select id="location" name="location" required defaultValue="" className={cn(inputCls, 'appearance-none')}>
            <option value="" disabled>Choose one</option>
            {LOCATIONS.map((l) => <option className="bg-ink" key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>Tell us more</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(inputCls, 'resize-none')}
          placeholder="Site address, timeline, budget — whatever you have."
        />
      </div>

      <div className="flex flex-wrap items-center gap-6 pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex items-center gap-2 bg-gold text-ink hover:bg-gold-400 disabled:opacity-60 px-7 py-4 text-sm font-medium tracking-wide transition-colors"
        >
          <span>
            {status === 'sending' ? 'Opening your email…' : status === 'sent' ? 'Message ready' : 'Send message'}
          </span>
          <ArrowUpRight className="btn-arrow h-4 w-4 stroke-[1.5]" aria-hidden />
        </button>
        {status === 'sent' && (
          <p className="text-sm text-warmgrey-400">
            We&apos;ll be in touch within two business days.
          </p>
        )}
      </div>

      <p className="text-xs text-warmgrey-600 leading-relaxed pt-4">
        By sending, you agree to be contacted by FAB Projects regarding your enquiry. We don&apos;t share details with third parties.
      </p>
    </form>
  );
}
