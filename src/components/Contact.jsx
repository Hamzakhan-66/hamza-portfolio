import { useState } from 'react';
import { contact } from '../data/site';
import { useMagnetic } from '../hooks/useMagnetic';
import Reveal from './Reveal';
import SplitText from './SplitText';

const INITIAL = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

/** Small inline status banner shown below the submit button */
function StatusBanner({ status }) {
  if (!status) return null;

  const styles = {
    success: {
      wrapper:
        'flex items-start gap-3 rounded-xl px-4 py-3 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300',
      icon: 'fa-solid fa-circle-check mt-0.5 text-emerald-400',
      text: "Your message was sent! I'll get back to you soon. 🎉",
    },

    error: {
      wrapper:
        'flex items-start gap-3 rounded-xl px-4 py-3 bg-red-500/20 border border-red-400/30 text-red-300',
      icon: 'fa-solid fa-circle-exclamation mt-0.5 text-red-400',
      text: 'Something went wrong. Please try again or email me directly.',
    },

    sending: {
      wrapper:
        'flex items-center gap-3 rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-ivory-soft',
      icon: 'fa-solid fa-circle-notch animate-spin',
      text: 'Sending…',
    },
  };

  const s = styles[status];

  return (
    <div className={s.wrapper} role="status" aria-live="polite">
      <i className={s.icon} />
      <span className="text-sm leading-snug">{s.text}</span>
    </div>
  );
}

export default function Contact() {
  const sendRef = useMagnetic(85, 0.3);

  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  // ── Validation ──────────────────────────────────────────────
  function validate() {
    const errs = {};

    if (!fields.name.trim()) {
      errs.name = 'Name is required.';
    }

    if (!fields.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = 'Enter a valid email address.';
    }

    if (!fields.subject.trim()) {
      errs.subject = 'Subject is required.';
    }

    if (!fields.message.trim()) {
      errs.message = 'Message cannot be empty.';
    }

    return errs;
  }

  // ── Field change handler ─────────────────────────────────────
  function handleChange(fieldName, value) {
    setFields((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    if (errors[fieldName]) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: undefined,
      }));
    }
  }

  // ── Submit ───────────────────────────────────────────────────
  async function handleSend(e) {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          subject: fields.subject,
          message: fields.message,
        }),
      });

      // API se response safely read karo
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'Failed to send message'
        );
      }

      setStatus('success');
      setFields(INITIAL);
      setErrors({});

      setTimeout(() => {
        setStatus(null);
      }, 6000);

    } catch (err) {
      console.error('Contact form error:', err);

      setStatus('error');

      setTimeout(() => {
        setStatus(null);
      }, 6000);
    }
  }

  const isSending = status === 'sending';

  function inputCls(field) {
    return [
      'w-full px-4 py-3 rounded-lg bg-white/10 placeholder-ivory-soft/60 text-ivory',
      'outline-none focus:bg-white/15 transition-colors',
      errors[field] ? 'ring-1 ring-red-400/70' : '',
    ].join(' ');
  }

  return (
    <section
      id="contact"
      className="relative bg-burgundy text-ivory py-28 overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none select-none -z-10 absolute -bottom-16 -right-6 font-sans font-bold text-white/[0.04] leading-none text-[11rem] md:text-[16rem]"
      >
        07
      </span>

      <div className="max-w-6xl mx-auto px-6 md:px-11 relative z-[1]">

        <Reveal>
          <div className="inline-block font-sans text-[11px] font-semibold tracking-[0.28em] uppercase bg-white/10 px-4 py-1.5 rounded-full mb-7">
            {contact.badge}
          </div>

          <h2 className="font-sans font-semibold text-5xl md:text-6xl tracking-[-0.02em] leading-[0.95] mb-16">
            <SplitText text={contact.title} staggerMs={45} />
          </h2>
        </Reveal>

        <Reveal
          delay={0.08}
          className="grid md:grid-cols-[1fr_1fr_0.6fr] gap-12 items-start"
        >

          {/* ── Contact info ─────────────────────────────── */}
          <ul className="space-y-5">
            {contact.info.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-4"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <i className={item.icon} />
                </a>

                <span className="text-ivory-soft">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          {/* ── Contact form ─────────────────────────────── */}
          <form
            onSubmit={handleSend}
            className="space-y-4"
            noValidate
          >

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">

              {/* Name */}
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  value={fields.name}
                  onChange={(e) =>
                    handleChange('name', e.target.value)
                  }
                  placeholder="Your Name"
                  className={inputCls('name')}
                  disabled={isSending}
                />

                {errors.name && (
                  <p className="text-xs text-red-400 pl-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  value={fields.email}
                  onChange={(e) =>
                    handleChange('email', e.target.value)
                  }
                  placeholder="Your Email"
                  className={inputCls('email')}
                  disabled={isSending}
                />

                {errors.email && (
                  <p className="text-xs text-red-400 pl-1">
                    {errors.email}
                  </p>
                )}
              </div>

            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                value={fields.subject}
                onChange={(e) =>
                  handleChange('subject', e.target.value)
                }
                placeholder="Subject"
                className={inputCls('subject')}
                disabled={isSending}
              />

              {errors.subject && (
                <p className="text-xs text-red-400 pl-1">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <textarea
                value={fields.message}
                onChange={(e) =>
                  handleChange('message', e.target.value)
                }
                placeholder="Your Message"
                rows={4}
                className={`${inputCls('message')} resize-none`}
                disabled={isSending}
              />

              {errors.message && (
                <p className="text-xs text-red-400 pl-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit button */}
            <button
              ref={sendRef}
              type="submit"
              disabled={isSending}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ivory text-burgundy font-sans text-sm font-semibold tracking-wide transition-transform duration-300 ease-depth-soft hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                transform:
                  'translate3d(var(--mx,0px),var(--my,0px),0)',
              }}
            >
              {isSending ? (
                <>
                  <i className="fa-solid fa-circle-notch animate-spin text-xs" />
                  Sending…
                </>
              ) : (
                'Send Message ↗'
              )}
            </button>

            {/* Status feedback */}
            <StatusBanner status={status} />

          </form>

          {/* ── Decorative globe ─────────────────────────── */}
          <div className="hidden md:flex justify-center opacity-90">
            <svg
              viewBox="0 0 260 260"
              fill="none"
              className="w-full max-w-[220px]"
            >
              <circle
                cx="150"
                cy="130"
                r="95"
                stroke="rgba(255,249,235,.35)"
                strokeWidth="1.4"
                fill="none"
              />

              <ellipse
                cx="150"
                cy="130"
                rx="95"
                ry="40"
                stroke="rgba(255,249,235,.35)"
                strokeWidth="1.4"
                fill="none"
              />

              <ellipse
                cx="150"
                cy="130"
                rx="40"
                ry="95"
                stroke="rgba(255,249,235,.35)"
                strokeWidth="1.4"
                fill="none"
              />

              <circle
                cx="150"
                cy="130"
                r="70"
                fill="#B9C7C1"
                opacity=".18"
              />

              <circle
                cx="60"
                cy="210"
                r="4"
                fill="#DCE4E0"
              />

              <circle
                cx="230"
                cy="70"
                r="3"
                fill="#DCE4E0"
              />

              <circle
                cx="210"
                cy="200"
                r="3"
                fill="#DCE4E0"
              />
            </svg>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
