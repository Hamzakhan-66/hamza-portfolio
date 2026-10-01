import { skills } from '../data/site';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import Stagger from './Stagger';
import SkillChip from './SkillChip';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-ivory py-28"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-11">

        <SectionHeader
          num={skills.eyebrowNum}
          eyebrow={skills.eyebrow}
          titleLines={[
            { text: skills.titleLine1 },
            { text: skills.titleLine2, accent: true },
          ]}
          lede={skills.lede}
        />

        <Reveal
          delay={0.1}
          className="mt-14 grid md:grid-cols-2 gap-12"
        >

          {/* LEFT COLUMN */}
          <div>

            {/* Technical Skills */}
            <div className="flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.18em] uppercase text-charcoal-soft mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
              {skills.technicalLabel}
            </div>

            <Stagger className="flex flex-wrap gap-3">
              {skills.technical.map((s) => (
                <SkillChip
                  key={s.label}
                  icon={s.icon}
                  label={s.label}
                />
              ))}
            </Stagger>

            {/* Frameworks */}
            <div className="flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.18em] uppercase text-charcoal-soft mt-10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
              {skills.frameworksLabel}
            </div>

            <Stagger className="flex flex-wrap gap-3">
              {skills.frameworks.map((s) => (
                <SkillChip
                  key={s.label}
                  icon={s.icon}
                  label={s.label}
                />
              ))}
            </Stagger>

          </div>

          {/* RIGHT COLUMN */}
          <div>

            {/* AI / ML Skills */}
            <div className="flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.18em] uppercase text-charcoal-soft mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
              {skills.aiLabel}
            </div>

            <Stagger className="flex flex-wrap gap-3">
              {skills.ai.map((s) => (
                <SkillChip
                  key={s.label}
                  icon={s.icon}
                  label={s.label}
                />
              ))}
            </Stagger>

          </div>

        </Reveal>
      </div>
    </section>
  );
}
