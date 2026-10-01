import { useTilt } from '../hooks/useTilt';

export default function SkillChip({ icon, label }) {
  const ref = useTilt();

  return (
    <div
      ref={ref}
      className="spotlight spotlight-sm relative overflow-hidden flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-stone-border font-sans text-sm text-charcoal-soft transition-all duration-300 ease-depth-soft hover:border-burgundy hover:shadow-card"
      style={{
        transform: 'rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateZ(var(--tz,0px))',
        transformStyle: 'preserve-3d',
      }}
    >
      <span className="relative z-[1]" style={{ transform: 'translateZ(16px)' }}>
        {icon}
      </span>
      <span className="relative z-[1]">{label}</span>
    </div>
  );
}
