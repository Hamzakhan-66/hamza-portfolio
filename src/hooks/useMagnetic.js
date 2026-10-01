import { useEffect, useRef } from 'react';

/**
 * useMagnetic — pulls an element gently toward the cursor
 * when it passes nearby, easing back with a CSS transition.
 */
export function useMagnetic(radius = 85, strength = 0.3) {
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
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius) {
        const pull = (1 - dist / radius) * strength;
        el.style.setProperty('--mx', `${(dx * pull).toFixed(2)}px`);
        el.style.setProperty('--my', `${(dy * pull).toFixed(2)}px`);
      } else {
        el.style.setProperty('--mx', '0px');
        el.style.setProperty('--my', '0px');
      }
    }

    function handleLeave() {
      el.style.setProperty('--mx', '0px');
      el.style.setProperty('--my', '0px');
    }

    window.addEventListener('mousemove', handleMove, { passive: true });
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [radius, strength]);

  return ref;
}
