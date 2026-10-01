import { useTilt } from '../hooks/useTilt';

export default function CertificateCard({ title, org, date, href }) {
  const ref = useTilt();

  return (
    <div
      ref={ref}
      className="relative overflow-hidden flex flex-col justify-between gap-5 p-6 rounded-2xl bg-card border border-stone-border transition-[border-color,box-shadow] duration-300 hover:border-burgundy hover:shadow-card"
      style={{
        transform: 'rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateZ(var(--tz,0px))',
        transformStyle: 'preserve-3d',
      }}
    >
      <div style={{ transform: 'translateZ(12px)' }}>
        <h3 className="font-sans font-semibold text-lg text-charcoal leading-snug">{title}</h3>
        <div className="mt-2 text-sm text-charcoal-muted">{org}</div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className="text-charcoal-muted">{date}</span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="ink-underline font-sans font-semibold tracking-wide text-burgundy hover:text-charcoal transition-colors"
        >
          View Credential ↗
        </a>
      </div>
    </div>
  );
}
