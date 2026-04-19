import SectionHeader from '../components/SectionHeader.jsx';
import { DYJ_DATA } from '../data.js';

const HITOS = [
  { anio: '2020', titulo: 'Fundación', texto: 'Un grupo de abogados organizándose para competir en campeonatos de fútbol.' },
  { anio: '2022', titulo: 'Todo Competidor', texto: 'Representamos la categoría en el Campeonato Nacional de Abogados.' },
  { anio: '2024', titulo: 'Campeón Nacional', texto: 'Levantamos el título en Talca.', destacado: true },
  { anio: '2026', titulo: 'CSD constituido', texto: 'Dejamos de ser sólo un equipo y nos convertimos formalmente en club.' },
];

export default function PageClub() {
  const d = DYJ_DATA;
  return (
    <>
      <section style={{ background: 'var(--dyj-red)', color: 'var(--dyj-white)', padding: '180px 48px 120px', position: 'relative', overflow: 'hidden' }}>
        <div className="grain grain--light" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="mono" style={{ opacity: 0.85, marginBottom: 24 }}>01 · El club</div>
          <div className="display" style={{ fontSize: 'clamp(72px, 11vw, 200px)', lineHeight: 0.95 }}>
            Conoce nuestra<br />historia
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dyj-white)', padding: '140px 48px' }}>
        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
          alignItems: 'start', marginBottom: 100, maxWidth: 1400,
        }}>
          <div>
            <div className="mono" style={{ color: 'var(--dyj-red)', marginBottom: 24 }}>Nuestra historia</div>
            <div className="display" style={{
              fontSize: 'clamp(56px, 7vw, 112px)',
              lineHeight: 0.95,
              color: 'var(--dyj-ink)', textTransform: 'uppercase',
            }}>
              De un grupo<br />de amigos a<br /><span style={{ color: 'var(--dyj-red)' }}>un club</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--dyj-ink)', textAlign: 'justify', margin: 0 }}>
              Lo que empezó en 2020 como un grupo de abogados organizándose para competir en campeonatos de fútbol hoy es un club. Como si bastara con juntarse los fines de semana. Y durante un tiempo bastó. Pero el proyecto creció.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--dyj-ink)', textAlign: 'justify', margin: 0 }}>
              En cinco años pasamos de jugar interclubes a representar a la categoría en el Campeonato Nacional de Abogados. En 2024 levantamos el título en Talca. En 2026 dejamos de ser sólo un equipo y nos constituimos formalmente como Club Social y Deportivo Defensa y Justicia.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--dyj-ink)', textAlign: 'justify', margin: 0 }}>
              Somos amigos antes que club, y club antes que once titulares. Cuando nos cerraron una puerta, armamos la nuestra y ganamos. Ese espíritu —la pasión, la fraternidad y el compromiso con un proyecto compartido— es lo que nos define.
            </p>
          </div>
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, maxWidth: 1400 }}>
          {HITOS.map((h) => (
            <div key={h.anio} style={{
              padding: 32,
              background: h.destacado ? 'var(--dyj-ink)' : 'transparent',
              color: h.destacado ? 'var(--dyj-white)' : 'var(--dyj-ink)',
              borderTop: '4px solid ' + (h.destacado ? 'var(--dyj-gold)' : 'var(--dyj-red)'),
            }}>
              <div className="display" style={{ fontSize: 88, lineHeight: 0.9, color: h.destacado ? 'var(--dyj-gold)' : 'var(--dyj-red)' }}>{h.anio}</div>
              <div className="mono" style={{ opacity: 0.6, marginTop: 10, letterSpacing: '0.18em', fontSize: 11, textTransform: 'uppercase' }}>{h.titulo}</div>
              <div style={{ marginTop: 18, fontSize: 16, lineHeight: 1.55, opacity: h.destacado ? 0.9 : 1 }}>{h.texto}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--dyj-bone)', padding: '140px 48px' }}>
        <SectionHeader eyebrow="Principios" title={<>Los valores<br />que defendemos</>} />
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
          {d.valores.map((v) => (
            <div key={v.n} style={{ borderTop: '3px solid var(--dyj-red)', paddingTop: 20 }}>
              <div className="display" style={{ fontSize: 24, color: 'var(--dyj-red)', opacity: 0.7 }}>{v.n}</div>
              <div className="display" style={{ fontSize: 44, marginTop: 12, lineHeight: 1 }}>{v.titulo}</div>
              <div style={{ marginTop: 14, fontSize: 14, lineHeight: 1.55, opacity: 0.8 }}>{v.texto}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--dyj-white)', padding: '140px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div className="reveal">
            <div className="mono" style={{ color: 'var(--dyj-red)', marginBottom: 16 }}>Directiva</div>
            <div className="display" style={{ fontSize: 'clamp(48px, 6vw, 84px)', lineHeight: 0.95, marginBottom: 40 }}>Quienes<br />mueven el club</div>
            {d.directiva.map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, padding: '18px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 28 }}>{p.nombre}</div>
                </div>
                <div className="mono" style={{ opacity: 0.6, alignSelf: 'center' }}>{p.rol.toUpperCase()}</div>
              </div>
            ))}
          </div>
          <div className="reveal">
            <div className="mono" style={{ color: 'var(--dyj-red)', marginBottom: 16 }}>Cuerpo técnico</div>
            <div className="display" style={{ fontSize: 'clamp(48px, 6vw, 84px)', lineHeight: 0.95, marginBottom: 40 }}>Los que<br />preparan el equipo</div>
            {d.cuerpoTecnico.map((p, i) => (
              <div key={i} style={{ padding: '18px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 28 }}>{p.nombre}</div>
                  <div className="mono" style={{ opacity: 0.6, alignSelf: 'center' }}>{p.rol.toUpperCase()}</div>
                </div>
                {p.anecdota && <div style={{ fontSize: 14, opacity: 0.7, marginTop: 6 }}>{p.anecdota}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dyj-ink)', color: 'var(--dyj-white)', padding: '140px 48px', position: 'relative', overflow: 'hidden' }}>
        <div className="grain grain--light" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ marginBottom: 60 }}>
            <div className="mono" style={{ color: 'var(--dyj-gold)', marginBottom: 16 }}>Palmarés</div>
            <div className="display" style={{ fontSize: 'clamp(64px, 9vw, 140px)', lineHeight: 0.95 }}>
              Lo que<br />ya ganamos
            </div>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {d.palmares.map((p, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 40,
                padding: '32px 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                alignItems: 'center',
              }}>
                <div className="display" style={{ fontSize: 96, lineHeight: 0.9, color: p.destacado ? 'var(--dyj-gold)' : 'var(--dyj-white)', width: 160 }}>{p.anio}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1.05 }}>{p.titulo}</div>
                {p.destacado && <div className="mono" style={{ background: 'var(--dyj-gold)', color: 'var(--dyj-ink)', padding: '6px 14px' }}>CAMPEÓN</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dyj-white)', padding: '140px 48px' }}>
        <SectionHeader eyebrow="Sponsors y partners" title={<>Los que<br />nos apoyan</>} />
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {d.sponsors.map((s, i) => (
            <div key={i} style={{
              aspectRatio: '2/1',
              border: '1.5px solid var(--dyj-ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', padding: 24,
              background: s.tier === 'oro' ? 'var(--dyj-bone)' : 'transparent',
            }}>
              <div className="mono" style={{ opacity: 0.5, fontSize: 10, marginBottom: 10 }}>{s.tier.toUpperCase()}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, textAlign: 'center' }}>{s.nombre}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
