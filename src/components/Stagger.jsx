import { Children } from 'react';
import { useReveal } from '../hooks/useReveal';

/**
 * Stagger — same visible-by-default guarantee as <Reveal>, but
 * for a grid of children that should settle in one after
 * another rather than all at once.
 */
export default function Stagger({ children, className = '', itemClassName = '', ...rest }) {
  const { ref, isIn } = useReveal();
  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className} {...rest}>
      {items.map((child, i) => (
        <div
          key={child.key ?? i}
          className={itemClassName}
          style={{
            transform: isIn ? 'translateY(0) scale(1)' : 'translateY(12px) scale(.98)',
            transition: `transform 0.6s cubic-bezier(.19,1,.22,1) ${i * 0.05}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
