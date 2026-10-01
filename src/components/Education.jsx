import { education } from '../data/site';
import SectionHeader from './SectionHeader';
import Stagger from './Stagger';
import EducationCard from './EducationCard';

export default function Education() {

  return (
    <section
      id="education"
      
      className="relative bg-ivory py-28"
      
    >
      <div className="max-w-6xl mx-auto px-6 md:px-11">
        <SectionHeader
          num={education.eyebrowNum}
          eyebrow={education.eyebrow}
          titleLines={[{ text: education.title }]}
          lede={education.lede}
        />

        <div className="relative mt-16 mb-8 h-px bg-stone-line">
          {education.items.map((_, i) => (
            <span
              key={i}
              className="absolute -top-1 w-2 h-2 rounded-full bg-burgundy animate-[pulse-ring_2.8s_ease-in-out_infinite]"
              style={{
                left: `${(i / (education.items.length - 1)) * 84 + 4}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        <Stagger className="grid sm:grid-cols-3 gap-5 [perspective:1500px]">
          {education.items.map((e) => (
            <EducationCard key={e.title} {...e} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
