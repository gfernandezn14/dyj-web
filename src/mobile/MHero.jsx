import { DYJ_DATA } from '../data.js';

export default function MHero({ setPage }) {
  const d = DYJ_DATA;
  const titleLines = d.hero.title.split('\n');
  return (
    <section className="m-hero-estadio">
      <div className="m-hero-estadio__bg" />
      <div className="m-hero-estadio__veil" />
      <div className="m-hero-estadio__top">
        <span>Fundado {d.club.fundado}</span>
        <span>{d.club.ciudad.split(',')[0]}</span>
      </div>
      <div className="m-hero-estadio__title">
        {titleLines.map((l, i) => (
          <div key={i}>
            {i === 2 ? <span>{l}</span> : l}
          </div>
        ))}
      </div>
      <div className="m-hero-estadio__cta">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.75, marginBottom: 10 }}>
          Próximo partido · {d.proximoPartido.fecha}
        </div>
        <a href="#partidos" className="m-btn m-btn--ghost-light"
           onClick={(e) => { e.preventDefault(); setPage('partidos'); }}>
          Ver calendario →
        </a>
      </div>
    </section>
  );
}
