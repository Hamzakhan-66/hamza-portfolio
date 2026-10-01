import { useReveal } from '../hooks/useReveal';

/**
 * Reveal — wraps a block that should gently settle into place
 * on scroll. Content is ALWAYS visible (opacity stays 1); only
 * a small translateY is animated. This is a deliberate choice:
 * an earlier iteration of this portfolio hid content behind
 * opacity:0 pending a JS trigger, and that trigger silently
 * failing made whole sections disappear. Never repeat that.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, ...rest }) {
  const { ref, isIn } = useReveal();

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        transform: isIn ? 'translateY(0)' : 'translateY(16px)',
        transition: `transform 0.8s cubic-bezier(.19,1,.22,1) ${delay}s`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
