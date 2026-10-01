import { useTilt } from '../hooks/useTilt';

export default function EducationCard({ icon, years, title, description }) {
  const ref = useTilt();

  return (
    <div
      ref={ref}
      className="relative overflow-hidden flex flex-col gap-3 p-6 rounded-2xl bg-card border border-stone-border transition-[border-color,box-shadow] duration-300 hover:border-burgundy hover:shadow-card"
      style={{
        transform: 'rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateZ(var(--tz,0px))',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="w-11 h-11 flex items-center justify-center rounded-full bg-stone-light text-xl"
        style={{ transform: 'translateZ(24px)' }}
      >
        {icon}
      </div>
      <div className="font-sans text-xs font-semibold tracking-[0.1em] uppercase text-burgundy">
        {years}
      </div>
      <h3 className="font-sans font-semibold text-lg text-charcoal" style={{ transform: 'translateZ(12px)' }}>
        {title}
      </h3>
      <p className="text-sm text-charcoal-soft leading-relaxed">{description}</p>
    </div>
  );
}
