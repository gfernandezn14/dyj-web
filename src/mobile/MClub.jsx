import { DYJ_DATA } from '../data.js';
import { MPageHeader, MSectionHeader } from './MShared.jsx';

const HITOS = [
  { anio: '2020', titulo: 'Fundación', texto: 'Un grupo de abogados organizándose para competir en campeonatos de fútbol.' },
  { anio: '2022', titulo: 'Todo Competidor', texto: 'Representamos la categoría en el Campeonato Nacional de Abogados.' },
  { anio: '2024', titulo: 'Campeón Nacional', texto: 'Levantamos el título en Talca.', destacado: true },
  { anio: '2026', titulo: 'CSD constituido', texto: 'Dejamos de ser sólo un equipo y nos convertimos formalmente en club.' },
];

const NARRATIVA = [
  'Lo que empezó en 2020 como un grupo de abogados organizándose para competir en campeonatos de fútbol hoy es un club. Como si bastara con juntarse los fines de semana. Y durante un tiempo bastó. Pero el proyecto creció.',
  'En cinco años pasamos de jugar interclubes a representar a la categoría en el Campeonato Nacional de Abogados. En 2024 levantamos el título en Talca. En 2026 dejamos de ser sólo un equipo y nos constituimos formalmente como Club Social y Deportivo Defensa y Justicia.',
  'Somos amigos antes que club, y club antes que once titulares. Cuando nos cerraron una puerta, armamos la nuestra y ganamos. Ese espíritu —la pasión, la fraternidad y el compromiso con un proyecto compartido— es lo que nos define.',
];

export default function MClub() {
  const d = DYJ_DATA;
  return (
    <>
      <MPageHeader variant="red" kicker="01 · El club" title={<>Conoce nuestra<br />historia</>} />

      <section className="m-sec">
        <MSectionHeader eyebrow="Nuestra historia">
          De un grupo<br />de amigos<br />a <span style={{ color: 'var(--dyj-red-text)' }}>un club</span>
        </MSectionHeader>
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
          {NARRATIVA.map((parrafo, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.6, margin: 0, textAlign: 'justify' }}>
              {parrafo}
            </p>
          ))}
        </div>
        <div className="m-timeline reveal" style={{ marginTop: 36 }}>
          {HITOS.map((h) => (
            <div key={h.anio} className={'m-timeline-card ' + (h.destacado ? 'm-timeline-card--gold' : '')}>
              <div className="m-timeline-card__year">{h.anio}</div>
              <div className="m-timeline-card__label">{h.titulo}</div>
              <div className="m-timeline-card__text">{h.texto}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="m-sec m-sec--bone">
        <MSectionHeader eyebrow="Principios">Los valores<br />que defendemos</MSectionHeader>
        <div className="m-values reveal">
          {d.valores.map((v) => (
            <div key={v.n} className="m-value">
              <div className="m-value__n">{v.n}</div>
              <div className="m-value__title">{v.titulo}</div>
              <div className="m-value__text">{v.texto}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="m-sec">
        <MSectionHeader eyebrow="Directiva">Quienes<br />mueven el club</MSectionHeader>
        <div className="m-row-list reveal">
          {d.directiva.map((p, i) => (
            <div key={i}>
              <div className="m-row-list__name">{p.nombre}</div>
              <div className="m-row-list__rol">{p.rol}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="m-sec m-sec--bone">
        <MSectionHeader eyebrow="Cuerpo técnico">Los que<br />preparan el equipo</MSectionHeader>
        <div className="reveal">
          {d.cuerpoTecnico.map((p, i) => (
            <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center' }}>
                <div className="m-row-list__name">{p.nombre}</div>
                <div className="m-row-list__rol">{p.rol}</div>
              </div>
              {p.anecdota && <div style={{ fontSize: 13, opacity: 0.7, marginTop: 6 }}>{p.anecdota}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="m-sec m-sec--ink">
        <MSectionHeader eyebrow="Palmarés" dark>Lo que<br />ya ganamos</MSectionHeader>
        <div className="reveal">
          {d.palmares.map((p, i) => (
            <div key={i} className="m-palmar">
              <div className={'m-palmar__year ' + (p.destacado ? 'm-palmar__year--gold' : '')}>{p.anio}</div>
              <div>
                <div className="m-palmar__title">{p.titulo}</div>
                {p.destacado && <span className="m-palmar__tag">Campeón</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="m-sec">
        <MSectionHeader eyebrow="Sponsors">Los que<br />nos apoyan</MSectionHeader>
        <div className="m-grid-2 reveal">
          {d.sponsors.map((s, i) => (
            <div key={i} className={'m-sponsor ' + (s.tier === 'oro' ? 'm-sponsor--oro' : '')}>
              <div className="m-sponsor__tier">{s.tier.toUpperCase()}</div>
              <div className="m-sponsor__name">{s.nombre}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
