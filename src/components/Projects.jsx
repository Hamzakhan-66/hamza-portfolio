import { projects } from '../data/site';
import SectionHeader from './SectionHeader';
import Stagger from './Stagger';
import ProjectCard from './ProjectCard';

export default function Projects() {

  return (
    <section
      id="projects"
      
      className="relative bg-ivory py-28"
      
    >
      <div className="max-w-6xl mx-auto px-6 md:px-11">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeader
            num={projects.eyebrowNum}
            eyebrow={projects.eyebrow}
            titleLines={[{ text: projects.titleLine1 }, { text: projects.titleLine2, accent: true }]}
            lede={projects.lede}
          />
        </div>

        <Stagger
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 [perspective:1500px]"
          itemClassName="h-full"
        >
          {projects.items.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
