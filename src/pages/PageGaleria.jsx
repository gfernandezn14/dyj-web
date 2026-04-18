import { DYJ_DATA } from '../data.js';

const PATTERNS = [
  { gridColumn: 'span 6', gridRow: 'span 3' },
  { gridColumn: 'span 3', gridRow: 'span 2' },
  { gridColumn: 'span 3', gridRow: 'span 2' },
  { gridColumn: 'span 4', gridRow: 'span 2' },
  { gridColumn: 'span 4', gridRow: 'span 3' },
  { gridColumn: 'span 4', gridRow: 'span 2' },
];

export default function PageGaleria() {
  const items = [...DYJ_DATA.galeria, ...DYJ_DATA.galeria.map((i) => ({ ...i }))];
  return (
    <>
      <section style={{ background: 'var(--dyj-red)', color: 'var(--dyj-white)', padding: '180px 48px 100px', position: 'relative', overflow: 'hidden' }}>
        <div className="grain grain--light" />
        <div className="mono" style={{ opacity: 0.85, marginBottom: 24 }}>04 · Galería</div>
        <div className="display" style={{ fontSize: 'clamp(96px, 14vw, 240px)', lineHeight: 0.95, letterSpacing: '-0.01em' }}>
          La temporada<br />en imágenes
        </div>
      </section>

      <section style={{ background: 'var(--dyj-white)', padding: '80px 48px 140px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: '180px',
          gap: 16,
        }}>
          {items.map((g, i) => {
            const p = PATTERNS[i % PATTERNS.length];
            return (
              <div key={i} className="reveal hoverable" style={{
                ...p,
                backgroundImage: `url('${g.src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.75))',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    padding: 20, color: 'var(--dyj-white)',
                    opacity: 0, transition: 'opacity 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                >
                  <div className="mono" style={{ opacity: 0.75, fontSize: 10 }}>Foto · {String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, lineHeight: 1.1, marginTop: 6 }}>{g.caption}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
