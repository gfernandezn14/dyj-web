import { DYJ_DATA } from '../data.js';

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.55 8.63L23 22h-6.953l-5.45-7.13L4.3 22H1.04l8.08-9.23L1 2h7.13l4.93 6.52L18.24 2zm-2.44 18h1.92L7.27 4H5.21l10.59 16z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.75 8.43-4.91 8.43-9.93z" />
    </svg>
  );
}

export default function MFooter() {
  const d = DYJ_DATA;
  const lines = Array.isArray(d.club.tagline) ? d.club.tagline : [d.club.tagline];

  return (
    <footer className="m-footer m-footer--center">
      <div className="m-footer__tagline">
        {lines.map((line, i) => (
          <div key={i} style={{ color: i === lines.length - 1 ? 'var(--dyj-gold)' : 'var(--dyj-red)' }}>
            {line}
          </div>
        ))}
      </div>

      <img src="/assets/escudo.png" alt="CSD Defensa y Justicia"
           className="m-footer__logo" />

      <div className="m-footer__social">
        <a href="https://instagram.com/csd.dyj" target="_blank" rel="noreferrer" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href="https://x.com/csd.dyj" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
          <XIcon />
        </a>
        <a href="https://facebook.com/csd.dyj" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FacebookIcon />
        </a>
      </div>

      <div className="m-footer__name">
        {d.club.nombre} <span style={{ opacity: 0.5 }}>—</span> {d.club.ciudad}
      </div>

      <a href="mailto:hola@csd-dyj.cl" className="m-footer__mail">hola@csd-dyj.cl</a>

      <div className="m-footer__legal">
        © {d.club.fundado}–2026 · {d.club.nombre}
      </div>
    </footer>
  );
}
