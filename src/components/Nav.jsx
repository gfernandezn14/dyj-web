import { useEffect, useState } from 'react';

const LINKS = [
  { key: 'inicio',   label: 'Inicio' },
  { key: 'club',     label: 'Club' },
  { key: 'plantel',  label: 'Plantel' },
  { key: 'partidos', label: 'Partidos' },
  { key: 'galeria',  label: 'Galería' },
];

export default function Nav({ activePage, setPage }) {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const y = 70;
      const el = document.elementFromPoint(window.innerWidth / 2, y);
      if (!el) return;
      let node = el;
      let bg = null;
      while (node && node !== document.body) {
        const s = getComputedStyle(node);
        if (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== 'transparent') {
          bg = s.backgroundColor;
          break;
        }
        if (s.backgroundImage && s.backgroundImage !== 'none') {
          bg = 'image';
          break;
        }
        node = node.parentElement;
      }
      if (bg === 'image') { setIsDark(true); return; }
      if (!bg) { setIsDark(true); return; }
      const m = bg.match(/\d+/g);
      if (!m) { setIsDark(true); return; }
      const [r, g, b] = m.map(Number);
      const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      setIsDark(lum < 0.55);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    const id = setInterval(check, 400);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  const go = (key) => { setPage(key); setMenuOpen(false); };

  return (
    <>
      <nav className={'nav ' + (isDark ? 'is-dark-bg' : 'is-light-bg')}>
        <a href="#inicio" className="nav__brand" onClick={(e) => { e.preventDefault(); go('inicio'); }}>
          <img src="/assets/escudo.png" alt="DyJ" className="nav__brand-logo" />
          <span className="nav__brand-text">DyJ</span>
        </a>
        <div className="nav__links">
          {LINKS.map((l) => (
            <a
              key={l.key}
              href={'#' + l.key}
              className={'nav__link ' + (activePage === l.key ? 'is-active' : '')}
              onClick={(e) => { e.preventDefault(); go(l.key); }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav__ctas">
          <a href="#socio" className="nav__cta nav__cta--ghost" onClick={(e) => { e.preventDefault(); go('socio'); }}>
            Quiero ser socio
          </a>
          <a href="#unete" className="nav__cta" onClick={(e) => { e.preventDefault(); go('unete'); }}>
            Quiero jugar
          </a>
        </div>
        <button
          className={'nav__burger ' + (menuOpen ? 'is-open' : '')}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={'nav__overlay ' + (menuOpen ? 'is-open' : '')} onClick={() => setMenuOpen(false)}>
        <div className="nav__overlay-inner" onClick={(e) => e.stopPropagation()}>
          <div className="nav__overlay-links">
            {LINKS.map((l) => (
              <a
                key={l.key}
                href={'#' + l.key}
                className={'nav__overlay-link ' + (activePage === l.key ? 'is-active' : '')}
                onClick={(e) => { e.preventDefault(); go(l.key); }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="nav__overlay-ctas">
            <a href="#socio" className="nav__cta nav__cta--ghost" onClick={(e) => { e.preventDefault(); go('socio'); }}>
              Quiero ser socio
            </a>
            <a href="#unete" className="nav__cta" onClick={(e) => { e.preventDefault(); go('unete'); }}>
              Quiero jugar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
