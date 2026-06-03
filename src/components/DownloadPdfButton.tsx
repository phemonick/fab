'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { printPageAsPdf } from '@/lib/print';
import { cn } from '@/lib/cn';

type Props = {
  className?: string;
  label?: string;
};

/**
 * Triggers a high-fidelity print-to-PDF of the current page using the browser's
 * native print engine. Hidden from the printed output itself (`print:hidden`).
 */
export function DownloadPdfButton({ className, label = 'Download PDF' }: Props) {
  const [busy, setBusy] = useState(false);

  const onClick = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await printPageAsPdf();
    } finally {
      // Re-enable shortly after the print dialog has been invoked.
      setTimeout(() => setBusy(false), 600);
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={busy}
      aria-label="Download this page as a PDF"
      className={cn(
        'print:hidden group inline-flex items-center gap-2 text-xs uppercase tracking-eyebrow',
        'text-warmgrey-400 hover:text-cream transition-colors disabled:opacity-60',
        className,
      )}
    >
      {busy ? (
        <Loader2 className="h-4 w-4 animate-spin stroke-[1.5]" aria-hidden />
      ) : (
        <Download className="h-4 w-4 stroke-[1.5] transition-transform group-hover:translate-y-0.5" aria-hidden />
      )}
      <span>{busy ? 'Preparing…' : label}</span>
    </button>
  );
}
