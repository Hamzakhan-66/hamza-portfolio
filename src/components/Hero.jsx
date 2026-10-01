import { profile } from '../data/site';
import { useImageTilt } from '../hooks/useImageTilt';
import { useMagnetic } from '../hooks/useMagnetic';
import Reveal from './Reveal';
import SplitText from './SplitText';

export default function Hero() {
  const workBtnRef = useMagnetic(85, 0.3);
  const cvBtnRef = useMagnetic(85, 0.3);
  const tiltRef = useImageTilt({ maxTilt: 4, maxShift: 10 });

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-24 hero-glow"
    >
      {/* Editorial texture */}
      <span
        aria-hidden="true"
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 font-sans text-[11px] tracking-[0.5em] uppercase text-charcoal/10 select-none pointer-events-none"
        style={{ writingMode: 'vertical-rl' }}
      >
        {profile.role} — {profile.tagline}
      </span>

      <div className="max-w-6xl mx-auto px-6 md:px-11 relative z-[2]">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <Reveal>
              <div className="flex items-center gap-3 font-sans text-[11px] font-semibold tracking-[0.3em] uppercase text-charcoal-muted mb-8">
                {profile.eyebrow}
                <span className="w-10 h-px bg-stone" />
              </div>
            </Reveal>

            <h1
              className="name-depth relative font-sans font-semibold leading-[0.88] tracking-[-0.03em] text-charcoal"
              style={{ fontSize: 'clamp(3.2rem, 9vw, 6rem)' }}
            >
              <SplitText
                as="span"
                className="block"
                text={profile.firstName}
                staggerMs={45}
              />

              <SplitText
                as="span"
                className="block text-burgundy"
                text={profile.lastName}
                staggerMs={45}
                baseDelayMs={90}
              />
            </h1>

            <Reveal delay={0.2}>
              <div className="inline-flex items-center gap-2.5 mt-8 px-4 py-1.5 rounded-full border border-stone-border font-sans text-[11px] font-medium tracking-[0.16em] uppercase text-charcoal-soft">
                <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                {profile.role}
              </div>

              <p className="mt-7 text-xl leading-relaxed text-charcoal-soft font-serif">
                {profile.lede}
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-10">
                {/* View Work */}
                <a
                  ref={workBtnRef}
                  href="#projects"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-burgundy text-ivory font-sans text-sm font-semibold tracking-wide transition-all duration-300 ease-depth-soft hover:bg-burgundy-dark hover:shadow-[0_18px_34px_-16px_rgba(100,28,40,.45)]"
                  style={{
                    transform:
                      'translate3d(var(--mx,0px),var(--my,0px),0)',
                  }}
                >
                  View My Work

                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>

                {/* Download CV */}
                <a
                  ref={cvBtnRef}
                  href={profile.resumeUrl}
                  download
                  className="ink-underline inline-flex items-center gap-2 py-4 font-sans text-sm font-semibold tracking-wide text-charcoal transition-colors duration-200 hover:text-burgundy"
                  style={{
                    transform:
                      'translate3d(var(--mx,0px),var(--my,0px),0)',
                  }}
                >
                  Download CV ⬇
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — HERO IMAGE */}
          <Reveal
            delay={0.16}
            className="relative flex flex-col items-center justify-center"
          >
            <div
              ref={tiltRef}
              className="relative w-64 h-64 md:w-[22rem] md:h-[22rem]"
              style={{ perspective: '1200px' }}
            >
              {/* Background image layer */}
              <div
                aria-hidden="true"
                className="hero-frame-alt absolute inset-0 translate-x-4 translate-y-5 overflow-hidden bg-burgundy"
              >
                <img
                  src="/assets/images/hero.jpeg"
                  alt=""
                  className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                />
              </div>

              {/* Main image */}
              <div
                className="hero-frame relative w-full h-full overflow-hidden shadow-soft border border-stone-border"
                style={{
                  transform:
                    'translate3d(var(--shift-x,0px),var(--shift-y,0px),0) ' +
                    'rotateX(var(--tilt-x,0deg)) rotateY(var(--tilt-y,0deg))',
                  transformStyle: 'preserve-3d',
                  transition:
                    'transform 0.5s cubic-bezier(.19,1,.22,1)',
                }}
              >
                <img
                  src="/assets/images/hero.jpeg"
                  alt="Hamza Khan"
                  className="w-full h-full object-cover object-center scale-[1.06]"
                  style={{ objectPosition: 'center -80px' }}
                />
              </div>
            </div>

            {/* Hero tagline */}
            <div className="relative left-20 top-20 flex items-center gap-3 font-sans text-[11px] font-semibold tracking-[0.3em] uppercase text-charcoal-muted mb-8">
              <span className="text-burgundy">✦</span>
              {profile.tagline}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
