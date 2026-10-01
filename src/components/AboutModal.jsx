import { useEffect, useRef } from 'react';
import { about } from '../data/site';

export default function AboutModal({ open, onClose }) {
  const closeRef = useRef(null);
  const lastFocused = useRef(null);

  useEffect(() => {
    if (open) {
      lastFocused.current = document.activeElement;
      document.body.classList.add('overflow-hidden');
      closeRef.current?.focus();
    } else {
      document.body.classList.remove('overflow-hidden');
      lastFocused.current?.focus?.();
    }
  }, [open]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape' && open) onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-8 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300 ${
        open ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        className="relative max-w-xl w-full max-h-[80vh] overflow-y-auto bg-card rounded-2xl p-9 shadow-card transition-transform duration-400 ease-depth"
        style={{
          transform: open
            ? 'perspective(1000px) translateY(0) rotateX(0deg) scale(1)'
            : 'perspective(1000px) translateY(24px) rotateX(6deg) scale(.96)',
        }}
      >
        <button
          ref={closeRef}
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl text-charcoal-muted hover:text-burgundy transition-colors"
        >
          &times;
        </button>

        <div className="flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-charcoal-muted mb-4">
          <span className="text-burgundy font-semibold">{about.modal.eyebrowNum}</span>
          <span className="w-8 h-px bg-olive" />
          {about.modal.eyebrow}
        </div>

        <h3 id="modalTitle" className="font-sans text-2xl font-bold text-charcoal mb-5">
          {about.modal.title}
        </h3>

        <div className="space-y-4 text-charcoal-soft leading-relaxed">
          {about.modal.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <p className="pl-4 border-l-2 border-burgundy italic text-charcoal">
            &ldquo;{about.modal.quote}&rdquo;
          </p>

          {about.modal.closingParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
