import { footer } from '../data/site';

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-11 py-6 flex flex-wrap items-center justify-between gap-4 font-sans text-[11.5px] tracking-[0.06em] text-charcoal">
        <span>{footer.copyright}</span>
        <span>{footer.tagline}</span>
      </div>
    </footer>
  );
}
