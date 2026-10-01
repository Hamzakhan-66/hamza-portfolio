import { useEffect, useRef, useState } from 'react';

/**
 * useReveal — a small IntersectionObserver-driven "settle in"
 * flag for scroll reveals.
 *
 * IMPORTANT: this hook is intentionally NOT a visibility gate.
 * `isVisible` starts `true`. Consumers should use it only to
 * toggle a *subtle* transform (e.g. translateY), never opacity
 * to 0. That guarantees content is always visible and readable
 * even if IntersectionObserver is unsupported, JS is slow to
 * hydrate, or any other edge case occurs — animation only ever
 * adds polish on top of content that was already there.
 */
export function useReveal(options) {
  const ref = useRef(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setIsIn(true);
      return undefined;
    }

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setIsIn(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIn(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px', ...options }
    );

    observer.observe(el);

    // Safety net: never let a reveal get permanently stuck.
    const fallback = window.setTimeout(() => setIsIn(true), 1800);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, isIn };
}
