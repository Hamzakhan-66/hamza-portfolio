import { useReveal } from '../hooks/useReveal';

/**
 * SplitText — an editorial word-by-word reveal.
 * Same safety guarantee as <Reveal>: opacity is never 0.
 * Words are always legible; only a masked translateY slide
 * is animated once the parent is in view (or immediately,
 * bounded by useReveal's own safety-net timeout).
 */
export default function SplitText({
  text,
  as: Tag = 'span',
  className = '',
  wordClassName = '',
  staggerMs = 55,
  baseDelayMs = 0,
}) {
  const { ref, isIn } = useReveal();
  const words = text.split(' ');

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom pb-[0.08em]">
          <span
            aria-hidden="true"
            className={`inline-block ${wordClassName}`}
            style={{
              transform: isIn ? 'translateY(0)' : 'translateY(112%)',
              transition: `transform 0.85s cubic-bezier(.19,1,.22,1) ${
                (baseDelayMs + i * staggerMs) / 1000
              }s`,
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </Tag>
  );
}
