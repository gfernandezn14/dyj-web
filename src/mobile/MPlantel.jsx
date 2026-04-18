import { useEffect, useState } from 'react';
import { DYJ_DATA } from '../data.js';
import { MPageHeader } from './MShared.jsx';

function Stat({ label, val }) {
  return (
    <div className="m-ficha__stat">
      <div className="m-ficha__stat-label">{label}</div>
      <div className="m-ficha__stat-val">{val}</div>
    </div>
  );
}

function MFicha({ jugador, onClose }) {
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
    <div className="m-ficha-overlay">
      <button className="m-ficha__close" onClick={onClose}>CERRAR ✕</button>
      <div className="m-ficha__hero">
        <div className="m-ficha__top">
          <img src="/assets/escudo.png" alt="DyJ" style={{ width: 40, position: 'relative' }} />
          <div style={{ position: 'relative', fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.22em', opacity: 0.8 }}>
            CSD · DyJ
          </div>
        </div>
        <div className="m-ficha__num">{jugador.num}</div>
        <div className="m-ficha__pos">{jugador.pos.toUpperCase()}</div>
      </div>
      <div className="m-ficha__body">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', opacity: 0.55, textTransform: 'uppercase' }}>
          Ficha · Jugador
        </div>
        <div className="m-ficha__name">{jugador.nombre}</div>
        <div className="m-ficha__stats">
          <Stat label="Edad" val={jugador.edad} />
          <Stat label="Debut" val={jugador.debut} />
          <Stat label="P. jugados" val={jugador.pj} />
          <Stat label="Goles" val={jugador.goles} />
          {jugador.vallaInvicta != null && <Stat label="Valla invicta" val={jugador.vallaInvicta} />}
          <Stat label="N°" val={jugador.num} />
        </div>
        {jugador.anecdota && (
          <>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', opacity: 0.55, textTransform: 'uppercase', marginBottom: 10 }}>
              Anécdota
            </div>
            <div className="m-ficha__anecdota">"{jugador.anecdota}"</div>
          </>
        )}
      </div>
    </div>
  );
}

export default function MPlantel() {
  const d = DYJ_DATA;
  const [ficha, setFicha] = useState(null);
  return (
    <>
      <MPageHeader
        kicker="02 · El plantel"
        title={<>Los que<br /><span style={{ color: 'var(--dyj-red-text)' }}>juegan</span></>}
        sub={`${d.plantel.length} jugadores. Cada uno con su historia, su número y su forma propia de dejarlo todo en la cancha.`}
        bgImg="/assets/plantel.jpg"
      />
      <section className="m-sec">
        <div className="m-grid-2">
          {d.plantel.map((j) => (
            <div key={j.num} className="m-player-card" onClick={() => setFicha(j)}>
              <div className="m-player-card__num">{j.num}</div>
              <div className="m-player-card__body">
                <div className="m-player-card__pos">{j.pos.toUpperCase()}</div>
                <div className="m-player-card__name">{j.nombre}</div>
                <div className="m-player-card__pos" style={{ marginTop: 6, opacity: 0.55 }}>
                  DESDE {j.debut} · {j.pj} PJ
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {ficha && <MFicha jugador={ficha} onClose={() => setFicha(null)} />}
    </>
  );
}
