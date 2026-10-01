import { useState } from 'react';
import { about } from '../data/site';
import { useLayeredSeparation } from '../hooks/useLayeredSeparation';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import AboutModal from './AboutModal';

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const { containerRef, frontRef, backRef } = useLayeredSeparation(16);

  return (
    <section id="about" className="relative bg-ivory py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-11">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeader
              num={about.eyebrowNum}
              eyebrow={about.eyebrow}
              titleLines={[{ text: about.title }]}
            />

            <Reveal delay={0.08} className="mt-6 space-y-4 text-charcoal-soft leading-relaxed max-w-md">
              {about.intro.map((item, i) => {
                if (item.strong) {
                  return (
                    <p key={i} className="font-semibold text-charcoal font-sans text-lg">
                      {item.strong}
                    </p>
                  );
                }
                if (item.quote) {
                  return (
                    <p key={i} className="pl-5 border-l-2 border-burgundy font-serif italic text-xl text-charcoal leading-snug">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  );
                }
                return <p key={i}>{item.text}</p>;
              })}

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                aria-haspopup="dialog"
                className="group mt-4 inline-flex items-center gap-2 font-sans text-xs font-bold tracking-[0.16em] uppercase text-burgundy border-b border-burgundy pb-1 transition-all duration-200 hover:text-charcoal hover:border-charcoal hover:gap-3"
              >
                {about.seeMoreLabel}
                <span aria-hidden="true">→</span>
              </button>
            </Reveal>
          </div>

          {/* Signature interaction — an editorial collage, distinct
              from the hero's mask reveal. Two crops of the same
              portrait sit offset and slightly rotated; moving the
              cursor across the composition lets them drift apart
              and realign, like loose photographs on a light table. */}
          <Reveal delay={0.16}>
            <div ref={containerRef} className="relative flex justify-center py-10">
              <div
                ref={backRef}
                className="absolute w-40 h-52 md:w-48 md:h-64 rounded-[4px] overflow-hidden border border-stone-border shadow-soft transition-transform duration-500 ease-depth-soft"
                style={{ transform: 'translate3d(0,0,0) rotate(3deg)', left: '52%', top: '4%' }}
              >
                <img
                  src="/assets/images/about.jpeg"
                  alt=""
                  className="w-full h-full object-cover object-top opacity-90"
                  style={{ filter: 'sepia(0.15) saturate(0.7)' }}
                />
                <div className="absolute inset-0 bg-olive/20" />
              </div>

              <div
                ref={frontRef}
                className="relative w-52 h-64 md:w-64 md:h-80 rounded-[4px] overflow-hidden border border-stone-border shadow-soft bg-card transition-transform duration-500 ease-depth-soft"
                style={{ transform: 'translate3d(0,0,0) rotate(-2deg)' }}
              >
                <img
                  src="/assets/images/about.jpeg"
                  alt="About Hamza"
                  className="w-full h-full object-cover"
                />
              </div>

              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-[-2deg] font-sans text-[10px] tracking-[0.3em] uppercase text-charcoal-muted2 bg-ivory px-3 py-1 border border-stone-line"
              >
                Fig. 02 — Portrait
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <AboutModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
