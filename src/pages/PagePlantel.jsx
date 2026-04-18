import { useEffect, useState } from 'react';
import { DYJ_DATA } from '../data.js';

function FichaModal({ jugador, onClose }) {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    const k = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', k);
    };
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 150,
      background: 'rgba(11,11,12,0.92)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 32,
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: 'var(--dyj-white)', color: 'var(--dyj-ink)',
        maxWidth: 1100, width: '100%',
        maxHeight: '90vh', overflow: 'auto',
        display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 0,
      }}>
        <div style={{
          background: 'var(--dyj-red)',
          padding: 40,
          position: 'relative',
          overflow: 'hidden',
          minHeight: 500,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          color: 'var(--dyj-white)',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(90deg, transparent 0 36px, rgba(255,255,255,0.1) 36px 72px)' }} />
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between' }}>
            <img src="/assets/escudo.png" style={{ width: 48 }} alt="" />
            <div className="mono" style={{ opacity: 0.8, fontSize: 10 }}>CSD · DyJ</div>
          </div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="display" style={{ fontSize: 260, lineHeight: 0.75, color: 'var(--dyj-white)' }}>{jugador.num}</div>
          </div>
          <div style={{ position: 'relative', zIndex: 2 }} className="mono">
            {jugador.pos.toUpperCase()}
          </div>
        </div>

        <div style={{ padding: 48, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="mono" style={{ opacity: 0.55, fontSize: 10 }}>FICHA · JUGADOR</div>
              <div className="display" style={{ fontSize: 64, lineHeight: 0.95, marginTop: 10 }}>{jugador.nombre}</div>
            </div>
            <button onClick={onClose} className="hoverable" style={{
              background: 'transparent', border: '1.5px solid var(--dyj-ink)',
              padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.18em', cursor: 'pointer',
            }}>CERRAR ✕</button>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
            margin: '40px 0', padding: '24px 0',
            borderTop: '2px solid var(--dyj-ink)', borderBottom: '2px solid var(--dyj-ink)',
          }}>
            {[
              ['EDAD', jugador.edad],
              ['DEBUT', jugador.debut],
              ['P. JUGADOS', jugador.pj],
              ['GOLES', jugador.goles],
              jugador.vallaInvicta != null ? ['VALLA INVICTA', jugador.vallaInvicta] : ['POSICIÓN', jugador.pos],
              ['N°', jugador.num],
            ].map((x, i) => (
              <div key={i}>
                <div className="mono" style={{ opacity: 0.55, fontSize: 10 }}>{x[0]}</div>
                <div className="display" style={{ fontSize: 44, lineHeight: 1, marginTop: 4, color: 'var(--dyj-red-deep)' }}>{x[1]}</div>
              </div>
            ))}
          </div>

          <div>
            <div className="mono" style={{ opacity: 0.55, fontSize: 10, marginBottom: 10 }}>ANÉCDOTA</div>
            <div style={{ fontSize: 20, lineHeight: 1.5 }}>"{jugador.anecdota}"</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PagePlantel() {
  const d = DYJ_DATA;
  const [ficha, setFicha] = useState(null);

  return (
    <>
      <section style={{ background: 'var(--dyj-ink)', color: 'var(--dyj-white)', padding: '180px 48px 120px', position: 'relative', overflow: 'hidden' }}>
        <div className="grain grain--light" />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/assets/plantel.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.2,
        }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="mono" style={{ color: 'var(--dyj-gold)', marginBottom: 24 }}>02 · El plantel</div>
          <div className="display" style={{ fontSize: 'clamp(96px, 14vw, 240px)', lineHeight: 0.95, letterSpacing: '-0.01em' }}>
            Los que<br /><span style={{ color: 'var(--dyj-red-deep)' }}>juegan</span>
          </div>
          <div style={{ marginTop: 40, maxWidth: 600, fontSize: 18, opacity: 0.85, lineHeight: 1.55 }}>
            {d.plantel.length} jugadores. Cada uno con su historia, su número y su forma propia de dejarlo todo en la cancha.
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dyj-white)', padding: '100px 48px 140px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {d.plantel.map((j) => (
            <div key={j.num} className="reveal hoverable" style={{
              background: 'var(--dyj-bone)',
              aspectRatio: '3/4',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              padding: 24,
            }}
              onClick={() => setFicha(j)}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'repeating-linear-gradient(90deg, var(--dyj-red) 0 30px, var(--dyj-white) 30px 60px)',
                opacity: 0.08,
              }} />
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between' }}>
                <div className="display" style={{ fontSize: 120, lineHeight: 0.8, color: 'var(--dyj-red-deep)' }}>{j.num}</div>
                <div className="mono" style={{ fontSize: 10, opacity: 0.5, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>CSD · DyJ</div>
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="mono" style={{ opacity: 0.6, fontSize: 10 }}>{j.pos.toUpperCase()}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 0.95, marginTop: 4 }}>{j.nombre}</div>
                <div className="mono" style={{ opacity: 0.55, marginTop: 8, fontSize: 10 }}>DESDE {j.debut} · {j.pj} PJ</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {ficha && <FichaModal jugador={ficha} onClose={() => setFicha(null)} />}
    </>
  );
}
