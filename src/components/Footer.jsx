import { DYJ_DATA } from '../data.js';

export default function Footer({ setPage }) {
  const d = DYJ_DATA;
  return (
    <footer className="footer grain grain--light">
      <div className="mono" style={{ opacity: 0.55, marginBottom: 18 }}>
        CSD · FUNDADO {d.club.fundado} · {d.club.ciudad.toUpperCase()}
      </div>
      <div className="footer__big">
        {(Array.isArray(d.club.tagline) ? d.club.tagline : [d.club.tagline]).map((line, i, arr) => (
          <div key={i} style={{ color: i === arr.length - 1 ? 'var(--dyj-gold)' : undefined }}>{line}</div>
        ))}
      </div>
      <div className="footer__cols">
        <div className="footer__col footer__col--logo">
          <img src="/assets/escudo.png" alt="CSD Defensa y Justicia" className="footer__logo" />
        </div>
        <div className="footer__col">
          <h4>Navegación</h4>
          <a href="#inicio"   onClick={(e) => { e.preventDefault(); setPage('inicio'); }}>Inicio</a>
          <a href="#club"     onClick={(e) => { e.preventDefault(); setPage('club'); }}>Club</a>
          <a href="#plantel"  onClick={(e) => { e.preventDefault(); setPage('plantel'); }}>Plantel</a>
          <a href="#partidos" onClick={(e) => { e.preventDefault(); setPage('partidos'); }}>Partidos</a>
          <a href="#galeria"  onClick={(e) => { e.preventDefault(); setPage('galeria'); }}>Galería</a>
        </div>
        <div className="footer__col">
          <h4>Contacto</h4>
          <a href="#unete" onClick={(e) => { e.preventDefault(); setPage('unete'); }}>Quiero jugar</a>
          <a href="#socio" onClick={(e) => { e.preventDefault(); setPage('socio'); }}>Quiero ser socio</a>
          <a href="mailto:hola@csd-dyj.cl">hola@csd-dyj.cl</a>
        </div>
        <div className="footer__col">
          <h4>Social</h4>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {d.club.fundado}–2026 · {d.club.nombre}</span>
        <span>Santiago de Chile</span>
      </div>
    </footer>
  );
}
