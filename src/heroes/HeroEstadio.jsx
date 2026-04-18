import { useEffect, useState } from 'react';
import { DYJ_DATA } from '../data.js';

export default function HeroEstadio({ setPage }) {
  const d = DYJ_DATA;
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const titleLines = d.hero.title.split('\n');

  return (
    <section className="hero hero--estadio" style={{
      position: 'relative',
      height: '100vh',
      minHeight: 640,
      background: 'var(--dyj-ink)',
      color: 'var(--dyj-white)',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('/assets/juego.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: `translateY(${scroll * 0.3}px) scale(1.1)`,
        filter: 'grayscale(0.2) contrast(1.05)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.9) 100%)',
      }} />
      <div className="grain grain--light" />

      <div style={{
        position: 'absolute', top: 100, left: 48, right: 48,
        display: 'flex', justifyContent: 'space-between',
        zIndex: 2,
      }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '0.22em' }}>{d.hero.kicker}</div>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '0.22em' }}>Temporada 2026 / 01</div>
      </div>

      <div style={{
        position: 'absolute', left: 48, right: 48, bottom: 160,
        zIndex: 2,
      }}>
        <div className="display" style={{
          fontSize: 'clamp(48px, 7.2vw, 120px)',
          lineHeight: 0.95,
          letterSpacing: '-0.01em',
          maxWidth: '72%',
        }}>
          {titleLines.map((l, i) => (
            <div key={i}>
              {i === 2 ? <span style={{ color: 'var(--dyj-gold)' }}>{l}</span> : l}
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', right: 48, bottom: 48,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 20,
        zIndex: 2,
      }}>
        <div className="mono" style={{ fontSize: 10, opacity: 0.7, letterSpacing: '0.22em' }}>
          Próximo partido · {d.proximoPartido.fecha}
        </div>
        <a href="#partidos" className="btn btn--ghost-light hoverable"
          onClick={(e) => { e.preventDefault(); setPage('partidos'); }}>
          Ver calendario →
        </a>
      </div>

      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 3,
        pointerEvents: 'none',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)',
      }}>
        <div className="mono" style={{
          transform: 'rotate(-90deg)',
          transformOrigin: 'center',
          whiteSpace: 'nowrap',
          display: 'flex', gap: 28, alignItems: 'center',
          color: 'var(--dyj-white)',
        }}>
          {d.valores.map((v, i) => (
            <span key={v.n} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ color: 'var(--dyj-gold)', fontSize: 10 }}>{v.n}</span>
              <span style={{ fontSize: 11, letterSpacing: '0.32em', fontWeight: 600 }}>{v.titulo.toUpperCase()}</span>
              {i < d.valores.length - 1 && <span style={{ opacity: 0.5, marginLeft: 14 }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
