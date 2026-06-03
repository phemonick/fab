const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/** Resolve once every <img> currently in the DOM has finished loading (or errored). */
async function waitForImages(): Promise<void> {
  const imgs = Array.from(document.images);
  await Promise.all(
    imgs.map((img) =>
      img.complete && img.naturalWidth > 0
        ? Promise.resolve()
        : new Promise<void>((res) => {
            img.addEventListener('load', () => res(), { once: true });
            img.addEventListener('error', () => res(), { once: true });
          }),
    ),
  );
}

/**
 * Prepare the page for a faithful print/PDF, then open the browser's
 * print dialog (where the user chooses "Save as PDF").
 *
 * The site lazy-loads images and reveals sections on scroll (IntersectionObserver),
 * so we first walk the whole document top-to-bottom to trigger every reveal and
 * force all images to load — otherwise the PDF would show blank sections and
 * empty image frames.
 */
export async function printPageAsPdf(): Promise<void> {
  const originalScroll = window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const step = Math.max(320, Math.floor(window.innerHeight * 0.8));

  // Walk down to trigger scroll-reveal animations + lazy image loads.
  for (let y = 0; y <= docHeight; y += step) {
    window.scrollTo(0, y);
    await wait(70);
  }
  window.scrollTo(0, docHeight);
  await wait(120);

  await waitForImages();

  // Back to where the reader was.
  window.scrollTo(0, originalScroll);
  await wait(180);

  window.print();
}
