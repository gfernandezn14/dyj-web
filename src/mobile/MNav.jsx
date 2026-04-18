import { useEffect, useState } from 'react';

const LINKS = [
  { key: 'inicio',   label: 'Inicio' },
  { key: 'club',     label: 'Club' },
  { key: 'plantel',  label: 'Plantel' },
  { key: 'partidos', label: 'Partidos' },
  { key: 'galeria',  label: 'Galería' },
];

export default function MNav({ activePage, setPage }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  const go = (k) => { setOpen(false); setPage(k); };

  return (
    <>
      <nav className={'nav m-nav ' + (open ? 'is-over-menu' : '')}
           style={open ? { color: 'var(--dyj-white)' } : undefined}>
        <a href="#inicio" className="nav__brand"
           onClick={(e) => { e.preventDefault(); go('inicio'); }}>
          <img src="/assets/escudo.png" alt="DyJ" className="nav__brand-logo" />
          <span className="nav__brand-text">DyJ</span>
        </a>
        <button
          className={'nav__hamburger ' + (open ? 'is-open' : '')}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={'nav__overlay ' + (open ? 'is-open' : '')}>
        <div className="nav__overlay-links">
          {LINKS.map((l, i) => (
            <a key={l.key} href={'#' + l.key}
               className={'nav__overlay-link ' + (activePage === l.key ? 'is-active' : '')}
               onClick={(e) => { e.preventDefault(); go(l.key); }}>
              <span>{l.label}</span>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
            </a>
          ))}
        </div>
        <a href="#unete" className="nav__overlay-cta"
           onClick={(e) => { e.preventDefault(); go('unete'); }}>
          <span>Quiero jugar</span>
          <span className="arrow">→</span>
        </a>
        <a href="#socio" className="nav__overlay-cta nav__overlay-cta--ghost"
           onClick={(e) => { e.preventDefault(); go('socio'); }}>
          <span>Quiero ser socio</span>
          <span className="arrow">→</span>
        </a>
        <div className="nav__overlay-foot">
          <span>CSD · FUNDADO 2020</span>
          <span>@CSD.DYJ</span>
        </div>
      </div>
    </>
  );
}
