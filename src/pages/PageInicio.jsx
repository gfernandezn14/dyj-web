import HeroEstadio from '../heroes/HeroEstadio.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { DYJ_DATA } from '../data.js';

function BlockProximoPartido({ setPage }) {
  const p = DYJ_DATA.proximoPartido;
  const local  = p.local ? 'CSD Defensa y Justicia' : p.rival;
  const visita = p.local ? p.rival : 'CSD Defensa y Justicia';
  return (
    <section style={{ background: 'var(--dyj-red)', color: 'var(--dyj-white)', position: 'relative', overflow: 'hidden', padding: '140px 48px 120px' }}>
      <div className="grain grain--light" />
      <img src="/assets/escudo.png" alt="" aria-hidden="true" style={{
        position: 'absolute',
        right: '-6%', top: '50%',
        transform: 'translateY(-50%)',
        width: 'min(720px, 55vw)',
        height: 'auto',
        opacity: 0.08,
        pointerEvents: 'none',
        zIndex: 1,
        filter: 'grayscale(1) brightness(2)',
      }} />

      <div className="reveal" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr', gap: 0, maxWidth: 1400 }}>
        <div className="mono" style={{ opacity: 0.85, marginBottom: 16, letterSpacing: '0.22em' }}>
          Próxima fecha · {p.liga}
        </div>
        <div className="display" style={{ fontSize: 'clamp(72px, 9vw, 156px)', lineHeight: 0.95 }}>
          Nos vemos<br />en la cancha
        </div>
      </div>

      <div className="reveal" style={{
        position: 'relative', zIndex: 2,
        marginTop: 80,
        borderTop: '1px solid rgba(255,255,255,0.25)',
        borderBottom: '1px solid rgba(255,255,255,0.25)',
        padding: '40px 0',
        display: 'grid',
        gridTemplateColumns: '160px 1fr auto 1fr 200px',
        gap: 48,
        alignItems: 'center',
      }}>
        <div>
          <div className="mono" style={{ opacity: 0.7, fontSize: 11, letterSpacing: '0.2em' }}>FECHA</div>
          <div className="display" style={{ fontSize: 36, lineHeight: 1, marginTop: 8 }}>{p.fecha}</div>
          <div className="mono" style={{ opacity: 0.7, fontSize: 11, marginTop: 8, letterSpacing: '0.2em' }}>{p.hora} HS</div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 64px)', lineHeight: 1 }}>{local}</div>
          <div className="mono" style={{ opacity: 0.7, fontSize: 11, marginTop: 10, letterSpacing: '0.2em' }}>LOCAL</div>
        </div>

        <div className="display" style={{
          fontSize: 'clamp(56px, 8vw, 120px)', lineHeight: 1,
          color: 'var(--dyj-gold)', padding: '0 8px',
        }}>
          vs
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 64px)', lineHeight: 1 }}>{visita}</div>
          <div className="mono" style={{ opacity: 0.7, fontSize: 11, marginTop: 10, letterSpacing: '0.2em' }}>VISITA</div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div className="mono" style={{ opacity: 0.7, fontSize: 11, letterSpacing: '0.2em' }}>CANCHA</div>
          <div style={{ marginTop: 8, fontSize: 16, lineHeight: 1.3 }}>{p.lugar}</div>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 2, marginTop: 40 }}>
        <a href="#partidos" className="btn btn--ghost-light hoverable"
          onClick={(e) => { e.preventDefault(); setPage('partidos'); }}>
          Calendario completo →
        </a>
      </div>
    </section>
  );
}

function BlockResultados() {
  return (
    <section style={{ background: 'var(--dyj-white)', padding: '140px 48px', position: 'relative' }}>
      <SectionHeader eyebrow="Últimos resultados · Liga Real Universitaria" title={<>La temporada,<br />partido a partido</>} />
      <div className="reveal" style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.max(DYJ_DATA.resultadosRecientes.length, 1)}, minmax(220px, 1fr))`,
        gap: 16, maxWidth: 880,
      }}>
        {DYJ_DATA.resultadosRecientes.map((r, i) => {
          const photo = r.resultado === 'V'
            ? '/assets/victoria.jpg'
            : r.resultado === 'D'
            ? '/assets/derrota.jpg'
            : '/assets/gallery/g06.jpg';
          const tint = r.resultado === 'V'
            ? 'linear-gradient(180deg, rgba(11,11,12,0.55) 0%, rgba(11,11,12,0.92) 100%)'
            : r.resultado === 'D'
            ? 'linear-gradient(180deg, rgba(200,16,46,0.55) 0%, rgba(138,10,31,0.95) 100%)'
            : 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.85) 100%)';
          const accent = r.resultado === 'V' ? 'var(--dyj-gold)' : r.resultado === 'D' ? 'var(--dyj-white)' : 'var(--dyj-bone)';
          return (
            <div key={i} className="hoverable" style={{
              position: 'relative',
              backgroundImage: `${tint}, url('${photo}')`,
              backgroundSize: 'auto 115%',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'var(--dyj-ink)',
              color: 'var(--dyj-white)',
              padding: 24, aspectRatio: '4/5',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              transition: 'transform 0.3s',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <div>
                  <div className="mono" style={{ opacity: 0.85, fontSize: 10 }}>FECHA · {r.fecha}</div>
                  <div className="mono" style={{ opacity: 0.7, fontSize: 10, marginTop: 4 }}>{r.condicion === 'L' ? 'LOCAL' : 'VISITA'}</div>
                </div>
                <div className="mono" style={{
                  fontSize: 10,
                  letterSpacing: '0.24em',
                  color: accent,
                  whiteSpace: 'nowrap',
                  textAlign: 'right',
                }}>
                  {r.resultado === 'V' ? 'VICTORIA' : r.resultado === 'D' ? 'DERROTA' : 'EMPATE'}
                </div>
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="display" style={{ fontSize: 56, lineHeight: 0.9, textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
                  {r.local}<span style={{ opacity: 0.5 }}>:</span>{r.visita}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, marginTop: 10, opacity: 0.95 }}>{r.rival}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function BlockPlantelPreview({ setPage }) {
  const destacados = DYJ_DATA.plantel.slice(0, 6);
  return (
    <section style={{ background: 'var(--dyj-ink)', color: 'var(--dyj-white)', padding: '140px 48px', position: 'relative', overflow: 'hidden' }}>
      <div className="grain grain--light" />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40, alignItems: 'end', marginBottom: 60 }}>
          <div>
            <div className="mono" style={{ color: 'var(--dyj-gold)', marginBottom: 16 }}>El plantel</div>
            <div className="display" style={{ fontSize: 'clamp(64px, 9vw, 140px)', lineHeight: 0.95, letterSpacing: '-0.005em' }}>
              Los que<br />juegan por<br /><span style={{ color: 'var(--dyj-red-text)' }}>la camiseta</span>
            </div>
          </div>
          <a href="#plantel" className="btn btn--ghost-light hoverable" style={{ justifySelf: 'end' }}
            onClick={(e) => { e.preventDefault(); setPage('plantel'); }}>
            Ver plantel completo →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
          {destacados.map((j) => (
            <div key={j.num} className="reveal hoverable" style={{
              background: 'var(--dyj-ink-soft)', aspectRatio: '3/4',
              padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden',
              transition: 'transform 0.3s',
              cursor: 'pointer',
            }}
              onClick={() => setPage('plantel')}>
              <div className="display" style={{ fontSize: 80, lineHeight: 0.8, color: 'var(--dyj-red-text)' }}>{j.num}</div>
              <div>
                <div className="mono" style={{ opacity: 0.55, fontSize: 10 }}>{j.pos.toUpperCase()}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginTop: 4, lineHeight: 1 }}>{j.nombre}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlockManifiesto({ setPage }) {
  return (
    <section style={{
      background: "url('/assets/plantel.jpg') center/cover",
      color: 'var(--dyj-white)', padding: '180px 48px', position: 'relative', overflow: 'hidden',
      minHeight: '80vh',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.75))' }} />
      <div className="grain grain--light" />
      <div className="reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 1200 }}>
        <div className="mono" style={{ color: 'var(--dyj-gold)', marginBottom: 24 }}>Manifiesto</div>
        <div className="display" style={{ fontSize: 'clamp(36px, 4.4vw, 68px)', lineHeight: 1.15, fontWeight: 400 }}>
          Empezamos siendo amigos.<br />
          Seguimos siendo equipo.<br />
          Hoy <span style={{ color: 'var(--dyj-gold)' }}>somos club</span>.
        </div>
        <a href="#club" className="btn btn--ghost-light hoverable" style={{ marginTop: 48 }}
          onClick={(e) => { e.preventDefault(); setPage('club'); }}>
          Leer más sobre el club →
        </a>
      </div>
    </section>
  );
}

export default function PageInicio({ setPage }) {
  return (
    <>
      <HeroEstadio setPage={setPage} />
      <BlockProximoPartido setPage={setPage} />
      <BlockResultados />
      <BlockPlantelPreview setPage={setPage} />
      <BlockManifiesto setPage={setPage} />
    </>
  );
}
