import { useTilt } from '../hooks/useTilt';

export default function ProjectCard({ icon, title, description, href, index }) {
  const ref = useTilt();
  const num = String(index + 1).padStart(2, '0');

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full min-h-[240px] overflow-hidden rounded-2xl border border-stone-border bg-card transition-[border-color,box-shadow] duration-300 hover:border-burgundy hover:shadow-card"
      style={{
        transform: 'rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateZ(var(--tz,0px))',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Base face */}
      <div className="relative z-[1] flex h-full flex-col gap-4 p-6">
        <div className="flex items-start justify-between">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-stone-light text-2xl"
            style={{ transform: 'translateZ(24px)' }}
          >
            {icon}
          </div>
          <span className="font-sans text-xs tracking-[0.2em] text-charcoal-muted2">{num}</span>
        </div>

        <h3 className="font-sans font-semibold text-lg text-charcoal" style={{ transform: 'translateZ(12px)' }}>
          {title}
        </h3>

        <p className="text-sm text-charcoal-soft leading-relaxed flex-1">{description}</p>

        <span className="self-end font-sans text-sm text-burgundy transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </div>

      {/* Signature interaction — the ink reveal. A burgundy
          "case study" face masks in from wherever the cursor
          entered the card (--px/--py tracked by useTilt). */}
      <div className="ink-reveal absolute inset-0 z-[2] flex flex-col justify-between bg-burgundy p-6 text-ivory">
        <span className="font-sans text-xs tracking-[0.2em] text-white/60">{num}</span>
        <div>
          <h3 className="font-sans font-semibold text-xl mb-2">{title}</h3>
          <p className="text-sm text-ivory-soft/85 leading-relaxed mb-5">{description}</p>
          <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-wide">
            View Project
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </span>
        </div>
      </div>
    </a>
  );
}
