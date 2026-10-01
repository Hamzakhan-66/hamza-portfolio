import { useEffect, useRef } from 'react';

/**
 * useImageTilt — a deliberately small, elegant response to the
 * cursor: a few degrees of rotation and a few pixels of shift,
 * only computed on mousemove while hovering (no global,
 * always-on requestAnimationFrame loop). This replaces the
 * earlier continuous hero-parallax system, which read more like
 * a generic "3D portfolio" effect than a restrained editorial
 * one.
 */
export function useImageTilt({ maxTilt = 5, maxShift = 8 } = {}) {
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
      el.style.setProperty('--tilt-x', `${(-py * maxTilt).toFixed(2)}deg`);
      el.style.setProperty('--tilt-y', `${(px * maxTilt).toFixed(2)}deg`);
      el.style.setProperty('--shift-x', `${(px * maxShift).toFixed(1)}px`);
      el.style.setProperty('--shift-y', `${(py * maxShift).toFixed(1)}px`);
      el.style.setProperty('--px', `${((px + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty('--py', `${((py + 0.5) * 100).toFixed(1)}%`);
    }

    function handleLeave() {
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
      el.style.setProperty('--shift-x', '0px');
      el.style.setProperty('--shift-y', '0px');
    }

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [maxTilt, maxShift]);

  return ref;
}
