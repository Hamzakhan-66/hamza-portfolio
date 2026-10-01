import { useEffect, useState } from 'react';
import { socials } from '../data/site';

export default function SocialRail() {
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById('contact');

    function update() {
      if (!contactSection) return;
      const rect = contactSection.getBoundingClientRect();
      const vh = window.innerHeight;
      // Dark mode only while the contact section actually
      // covers the middle of the screen.
      setOnDark(rect.top < vh * 0.65 && rect.bottom > vh * 0.35);
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="hidden md:flex fixed z-[9999] right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
      <span className={`w-px h-10 ${onDark ? 'bg-white/35' : 'bg-stone-line'}`} />
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.external ? '_blank' : undefined}
          rel={s.external ? 'noopener noreferrer' : undefined}
          aria-label={s.label}
          className={`w-8 h-8 flex items-center justify-center rounded-md text-[17px] transition-all duration-200 hover:-translate-y-0.5
            ${
              onDark
                ? 'text-[#f3ead9] hover:bg-white/10 hover:text-white'
                : 'text-charcoal-soft hover:bg-stone-border hover:text-charcoal'
            }`}
        >
          <i className={s.icon} />
        </a>
      ))}
    </div>
  );
}
