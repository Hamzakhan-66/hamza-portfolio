import { useEffect, useRef } from 'react';

/**
 * useTilt — physically-responsive card tilt.
 * Sets --rx / --ry / --tz / --px / --py CSS custom properties
 * on the element itself so all the actual `transform` /
 * `background` values live in CSS (see index.css / tailwind
 * classes), not in inline styles fighting the stylesheet.
 */
export function useTilt() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const canHover =
      window.matchMedia &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!canHover) return undefined;

    function handleMove(e) {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--ry', `${(px * 12).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${(-py * 12).toFixed(2)}deg`);
      el.style.setProperty('--tz', '20px');
      el.style.setProperty('--px', `${((px + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty('--py', `${((py + 0.5) * 100).toFixed(1)}%`);
    }

    function handleLeave() {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--tz', '0px');
    }

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return ref;
}
