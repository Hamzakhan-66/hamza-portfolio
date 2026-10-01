import { useEffect, useRef, useState } from 'react';
import { navLinks, profile } from '../data/site';

// The original navLinks (src/data/site.js) intentionally starts at
// "About" — Home was handled by the old logo mark. The floating dock
// has no separate logo, so Home is restored here as the first stop.
// Everything else is read straight from navLinks; nothing is
// hardcoded or renamed.
const dockLinks = [{ label: 'Home', href: '#home' }, ...navLinks];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState('#home');
  const [open, setOpen] = useState(false);
  const [indicator, setIndicator] = useState({ top: 0, height: 0, opacity: 0 });
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Active-section detection — identical strategy to the previous
  // navbar (scroll offset threshold), just sourced from dockLinks.
  useEffect(() => {
    const sections = dockLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    function handleScroll() {
      let idx = 0;
      sections.forEach((section, i) => {
        if (window.scrollY >= section.offsetTop - 140) {
          idx = i;
        }
      });
      setActiveHref(dockLinks[idx]?.href ?? dockLinks[0].href);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Same "morphing indicator" idea as before, re-tuned for a
  // vertical stack: a slim burgundy bar glides to the active row.
  useEffect(() => {
    const list = listRef.current;
    if (!list || activeHref === '#contact') {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const activeEl = list.querySelector(`a[href="${activeHref}"]`);
    if (!activeEl) return;

    setIndicator({
      top: activeEl.offsetTop,
      height: activeEl.offsetHeight,
      opacity: 1,
    });
  }, [activeHref, open]);

  // Escape closes the dock; focus returns to the toggle.
  useEffect(() => {
    if (!open) return undefined;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    function handlePointerDown(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    firstLinkRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [open]);

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <div
      ref={rootRef}
      className="fixed top-5 right-5 md:top-8 md:right-9 z-[9999] flex flex-col items-end"
    >
      <button
        ref={toggleRef}
        type="button"
        aria-label={open ? 'Close navigation' : `Open navigation — ${profile.logoInitials}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="floating-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-ivory/90 backdrop-blur-md border border-stone-border shadow-soft transition-all duration-300 ease-depth-soft hover:border-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border border-burgundy/0 group-hover:border-burgundy/25 transition-colors duration-300"
        />
        {/* Signature toggle glyph — a 2x2 grid of dots that
            contracts into a slim burgundy cross when the dock
            opens. No bounce, no spin, just a quiet cross-fade. */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`absolute w-4 h-4 transition-all duration-300 ease-depth-soft ${
            open ? 'opacity-0 scale-75 rotate-45' : 'opacity-100 scale-100 rotate-0'
          }`}
        >
          <circle cx="7" cy="7" r="1.6" className="fill-charcoal" />
          <circle cx="17" cy="7" r="1.6" className="fill-charcoal" />
          <circle cx="7" cy="17" r="1.6" className="fill-charcoal" />
          <circle cx="17" cy="17" r="1.6" className="fill-charcoal" />
        </svg>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`absolute w-4 h-4 transition-all duration-300 ease-depth-soft ${
            open ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-45'
          }`}
        >
          <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="1.6" className="text-burgundy" strokeLinecap="round" />
          <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.6" className="text-burgundy" strokeLinecap="round" />
        </svg>
      </button>

      <nav
        id="floating-nav-panel"
        aria-label="Primary"
        className={`mt-3 w-52 origin-top-right rounded-2xl border border-stone-border bg-ivory/95 backdrop-blur-md shadow-card transition-all duration-300 ease-depth-soft ${
          open
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-1.5 pointer-events-none'
        }`}
      >
        <ul ref={listRef} className="relative flex flex-col py-3 px-2">
          <span
            aria-hidden="true"
            className="absolute left-0 w-[2px] rounded-full bg-burgundy transition-all duration-500"
            style={{
              transform: `translateY(${indicator.top}px)`,
              height: indicator.height,
              opacity: open ? indicator.opacity : 0,
              transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)',
            }}
          />
          {dockLinks.map((link, i) => {
            const isActive = activeHref === link.href;
            const isContact = link.href === '#contact';
            return (
              <li key={link.href} className={isContact ? 'mt-2 pt-2 border-t border-stone-line' : undefined}>
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={handleLinkClick}
                  className={
                    isContact
                      ? 'flex items-center justify-between gap-2 mx-1 my-1 px-4 py-2.5 rounded-full bg-burgundy text-ivory font-sans text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 hover:bg-burgundy-dark'
                      : `flex items-center gap-2 pl-5 pr-4 py-2.5 font-sans text-[12px] tracking-[0.14em] uppercase font-medium transition-colors duration-200 hover:text-charcoal ${
                          isActive ? 'text-charcoal' : 'text-charcoal-muted'
                        }`
                  }
                >
                  {link.label}
                  {isContact && <span aria-hidden="true">↗</span>}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
