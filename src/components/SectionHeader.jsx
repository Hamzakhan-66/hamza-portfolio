import SplitText from './SplitText';
import Reveal from './Reveal';

/**
 * SectionHeader — the shared editorial "masthead" used at the
 * top of every section: a faint oversized index numeral behind
 * a small eyebrow label, then a large word-revealed heading.
 * Centralising this keeps every section's identity consistent
 * without repeating markup five times.
 */
export default function SectionHeader({
  num,
  eyebrow,
  titleLines,
  lede,
  align = 'left',
}) {
  return (
    <div className={`relative isolate ${align === 'left' ? '' : 'text-center mx-auto'}`}>
      <span
        aria-hidden="true"
        className="pointer-events-none select-none -z-10 absolute -top-10 -left-2 font-sans font-bold text-burgundy/[0.06] leading-none text-[7rem] md:text-[9rem]"
      >
        {num}
      </span>

      <Reveal className="relative">
        <div className="flex items-center gap-3 font-sans text-[11px] font-semibold tracking-[0.28em] uppercase text-burgundy mb-6">
          <span className="w-6 h-px bg-burgundy" />
          {eyebrow}
        </div>

        <h2 className="font-sans font-semibold text-[2.6rem] leading-[1.02] md:text-6xl tracking-[-0.02em] text-charcoal">
          {titleLines.map((line, i) => (
            <SplitText
              key={line.text}
              as="span"
              className="block"
              wordClassName={line.accent ? 'text-charcoal-muted2 font-serif italic font-normal' : ''}
              text={line.text}
              baseDelayMs={i * 90}
            />
          ))}
        </h2>

        {lede && (
          <p className="mt-6 text-lg leading-relaxed text-charcoal-soft max-w-lg">{lede}</p>
        )}
      </Reveal>
    </div>
  );
}
