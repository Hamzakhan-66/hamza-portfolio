import { useEffect, useRef } from 'react';

/**
 * useLayeredSeparation — for the About image's editorial
 * collage. Two photo layers sit slightly offset at rest; while
 * the cursor moves inside the container, the front layer drifts
 * toward it and the back layer drifts the opposite way, so the
 * composition subtly separates and realigns. Event-driven only
 * (mousemove while hovering) — no continuous animation loop.
 */
export function useLayeredSeparation(strength = 14) {
  const containerRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const canHover =
      window.matchMedia &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!canHover) return undefined;

    function handleMove(e) {
      const r = container.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;

      if (frontRef.current) {
        frontRef.current.style.transform =
          `translate3d(${(px * strength).toFixed(1)}px,${(py * strength).toFixed(1)}px,0) rotate(-2deg)`;
      }
      if (backRef.current) {
        backRef.current.style.transform =
          `translate3d(${(px * -strength * 0.7).toFixed(1)}px,${(py * -strength * 0.7).toFixed(1)}px,0) rotate(3deg)`;
      }
    }

    function handleLeave() {
      if (frontRef.current) frontRef.current.style.transform = 'translate3d(0,0,0) rotate(-2deg)';
      if (backRef.current) backRef.current.style.transform = 'translate3d(0,0,0) rotate(3deg)';
    }

    container.addEventListener('mousemove', handleMove);
    container.addEventListener('mouseleave', handleLeave);

    return () => {
      container.removeEventListener('mousemove', handleMove);
      container.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength]);

  return { containerRef, frontRef, backRef };
}
