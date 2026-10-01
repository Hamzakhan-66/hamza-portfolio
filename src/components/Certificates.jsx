import { certificates } from '../data/site';
import SectionHeader from './SectionHeader';
import Stagger from './Stagger';
import CertificateCard from './CertificateCard';

export default function Certificates() {

  return (
    <section
      id="certificates"
      
      className="relative bg-ivory py-28"
      
    >
      <div className="max-w-6xl mx-auto px-6 md:px-11">
        <SectionHeader
          num={certificates.eyebrowNum}
          eyebrow={certificates.eyebrow}
          titleLines={[
            { text: certificates.titleLine1 },
            { text: certificates.titleLine2, accent: true },
          ]}
          lede={certificates.lede}
        />

        <Stagger className="mt-14 grid sm:grid-cols-2 gap-5 [perspective:1500px]">
          {certificates.items.map((c) => (
            <CertificateCard key={c.title} {...c} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
