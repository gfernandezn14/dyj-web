import { DYJ_DATA } from '../data.js';
import MHero from './MHero.jsx';
import { MSectionHeader } from './MShared.jsx';

export default function MInicio({ setPage }) {
  const d = DYJ_DATA;
  const p = d.proximoPartido;
  const recientes = d.resultadosRecientes.slice(0, 5);
  const destacados = d.plantel.slice(0, 6);

  return (
    <>
      <MHero setPage={setPage} />

      <section className="m-sec m-sec--red" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="/assets/escudo.png" alt="" aria-hidden="true" style={{
          position: 'absolute', right: '-22%', top: '50%',
          transform: 'translateY(-50%)',
          width: '85%', height: 'auto', opacity: 0.07,
          pointerEvents: 'none', filter: 'grayscale(1) brightness(2)',
        }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <span className="m-eyebrow" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Próxima fecha · {p.liga}
          </span>
          <h2 className="m-title">Nos vemos<br />en la cancha</h2>

          <div style={{
            marginTop: 36,
            paddingTop: 28,
            paddingBottom: 28,
            borderTop: '1px solid rgba(255,255,255,0.25)',
            borderBottom: '1px solid rgba(255,255,255,0.25)',
            display: 'flex', flexDirection: 'column', gap: 24,
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', opacity: 0.7 }}>FECHA</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1, marginTop: 6 }}>{p.fecha}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', opacity: 0.7, marginTop: 6 }}>{p.hora} HS</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 12, alignItems: 'center' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: 1 }}>
                  {p.local ? 'CSD DyJ' : p.rival}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.22em', opacity: 0.7, marginTop: 6 }}>LOCAL</div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: 1, color: 'var(--dyj-gold)' }}>vs</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: 1 }}>
                  {p.local ? p.rival : 'CSD DyJ'}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.22em', opacity: 0.7, marginTop: 6 }}>VISITA</div>
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', opacity: 0.7 }}>CANCHA</div>
              <div style={{ fontSize: 15, lineHeight: 1.4, marginTop: 6 }}>{p.lugar}</div>
            </div>
          </div>

          <a href="#partidos" className="m-btn m-btn--ghost-light"
             style={{ marginTop: 28, display: 'block' }}
             onClick={(e) => { e.preventDefault(); setPage('partidos'); }}>
            Calendario completo →
          </a>
        </div>
      </section>

      <section className="m-sec">
        <MSectionHeader eyebrow="Últimos resultados · Liga Real Universitaria">
          La temporada,<br />partido a partido
        </MSectionHeader>
        <div className="m-rail reveal">
          {recientes.map((r, i) => {
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
              <div key={i} style={{
                aspectRatio: '3/4',
                padding: 20,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                color: 'var(--dyj-white)',
                backgroundImage: `${tint}, url('${photo}')`,
                backgroundSize: 'auto 115%',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'var(--dyj-ink)',
                overflow: 'hidden',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em' }}>
                    <span style={{ opacity: 0.85 }}>FECHA · {r.fecha}</span>
                    <span style={{ opacity: 0.7 }}>{r.condicion === 'L' ? 'LOCAL' : 'VISITA'}</span>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.22em',
                    color: accent, whiteSpace: 'nowrap', textAlign: 'right',
                  }}>
                    {r.resultado === 'V' ? 'VICTORIA' : r.resultado === 'D' ? 'DERROTA' : 'EMPATE'}
                  </div>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: 0.85,
                    letterSpacing: '-0.02em', textShadow: '0 2px 16px rgba(0,0,0,0.4)',
                  }}>
                    {r.local}<span style={{ opacity: 0.4, margin: '0 2px' }}>:</span>{r.visita}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, marginTop: 8, opacity: 0.95, lineHeight: 1.1 }}>
                    {r.rival}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="m-sec m-sec--ink">
        <MSectionHeader eyebrow="El plantel" dark>
          Los que juegan por <span style={{ color: 'var(--dyj-red)' }}>la camiseta</span>
        </MSectionHeader>
        <div className="m-rail m-rail--tight reveal">
          {destacados.map((j) => (
            <div key={j.num} className="m-player-card"
                 style={{ background: 'var(--dyj-ink-soft)', color: 'var(--dyj-white)' }}
                 onClick={() => setPage('plantel')}>
              <div className="m-player-card__num">{j.num}</div>
              <div className="m-player-card__body">
                <div className="m-player-card__pos">{j.pos.toUpperCase()}</div>
                <div className="m-player-card__name">{j.nombre}</div>
              </div>
            </div>
          ))}
        </div>
        <a href="#plantel" className="m-btn m-btn--ghost-light"
           style={{ marginTop: 24, display: 'block' }}
           onClick={(e) => { e.preventDefault(); setPage('plantel'); }}>
          Plantel completo →
        </a>
      </section>

      <section className="m-manifiesto">
        <div className="m-manifiesto__bg" />
        <div className="m-manifiesto__veil" />
        <div className="m-manifiesto__inner reveal">
          <span className="m-eyebrow" style={{ color: 'var(--dyj-gold)' }}>Manifiesto</span>
          <div className="m-manifiesto__quote">
            Empezamos siendo amigos.<br />
            Seguimos siendo equipo.<br />
            Hoy <span style={{ color: 'var(--dyj-gold)' }}>somos club</span>.
          </div>
          <a href="#club" className="m-btn m-btn--ghost-light"
             style={{ marginTop: 28, display: 'block' }}
             onClick={(e) => { e.preventDefault(); setPage('club'); }}>
            Leer más sobre el club →
          </a>
        </div>
      </section>
    </>
  );
}
