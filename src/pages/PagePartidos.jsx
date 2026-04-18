import { useState } from 'react';
import { DYJ_DATA } from '../data.js';

const TABS = [
  ['proximos', 'Próximos'],
  ['resultados', 'Resultados'],
  ['tabla', 'Tabla'],
];

function PartidosProximos() {
  const p = DYJ_DATA.proximoPartido;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 1200 }}>
      <div className="reveal hoverable" style={{
        display: 'grid', gridTemplateColumns: '160px 1fr auto 1fr auto',
        gap: 24, alignItems: 'center',
        padding: '32px 24px',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        background: 'var(--dyj-red)',
        color: 'var(--dyj-white)',
      }}>
        <div>
          <div className="mono" style={{ opacity: 0.75, fontSize: 10 }}>{p.liga}</div>
          <div className="display" style={{ fontSize: 28, lineHeight: 1, marginTop: 4 }}>{p.fecha}</div>
          <div className="mono" style={{ opacity: 0.7, marginTop: 4, fontSize: 10 }}>{p.hora}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1 }}>{p.local ? 'CSD DyJ' : p.rival}</div>
          <div className="mono" style={{ opacity: 0.65, fontSize: 10, marginTop: 4 }}>LOCAL</div>
        </div>
        <div className="display" style={{ fontSize: 40, lineHeight: 1, color: 'var(--dyj-gold)' }}>VS</div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1 }}>{p.local ? p.rival : 'CSD DyJ'}</div>
          <div className="mono" style={{ opacity: 0.65, fontSize: 10, marginTop: 4 }}>VISITA</div>
        </div>
        <div className="mono" style={{ opacity: 0.7, textAlign: 'right', fontSize: 10, maxWidth: 200 }}>{p.lugar}</div>
      </div>

      <div className="reveal" style={{
        padding: '40px 24px', borderBottom: '1px solid rgba(0,0,0,0.1)',
        display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, alignItems: 'baseline',
      }}>
        <div className="mono" style={{ opacity: 0.6, fontSize: 10 }}>RESTO DE LA TEMPORADA</div>
        <div style={{ fontSize: 16, lineHeight: 1.55, opacity: 0.75 }}>
          El fixture completo de la 1ª Fase se sortea por jornada. Las próximas fechas se publican una vez confirmados día, hora y cancha por la Liga Real Universitaria.
        </div>
      </div>
    </div>
  );
}

function PartidosResultados() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 1200 }}>
      {DYJ_DATA.resultadosRecientes.map((r, i) => {
        const colorBar = r.resultado === 'V' ? 'var(--dyj-gold)' : r.resultado === 'D' ? 'var(--dyj-red)' : 'rgba(0,0,0,0.3)';
        return (
          <div key={i} className="reveal" style={{
            display: 'grid', gridTemplateColumns: '8px 120px 1fr auto 1fr auto',
            gap: 24, alignItems: 'center',
            padding: '32px 0 32px 24px',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
          }}>
            <div style={{ background: colorBar, alignSelf: 'stretch', width: 6 }} />
            <div>
              <div className="mono" style={{ opacity: 0.55, fontSize: 10 }}>FECHA</div>
              <div className="display" style={{ fontSize: 28, lineHeight: 1, marginTop: 4 }}>{r.fecha}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1 }}>{r.condicion === 'L' ? 'DyJ' : r.rival}</div>
            </div>
            <div className="display" style={{ fontSize: 52, lineHeight: 1, textAlign: 'center' }}>
              {r.condicion === 'L' ? r.local : r.visita}
              <span style={{ opacity: 0.4, margin: '0 6px' }}>:</span>
              {r.condicion === 'L' ? r.visita : r.local}
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1 }}>{r.condicion === 'L' ? r.rival : 'DyJ'}</div>
            </div>
            <div className="mono" style={{
              background: colorBar,
              color: r.resultado === 'E' ? 'var(--dyj-white)' : 'var(--dyj-ink)',
              padding: '8px 16px', letterSpacing: '0.18em', fontSize: 11,
            }}>
              {r.resultado === 'V' ? 'VICTORIA' : r.resultado === 'D' ? 'DERROTA' : 'EMPATE'}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function GrupoTabla({ grupo, equipos }) {
  return (
    <div style={{ marginBottom: 60 }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 16,
        padding: '0 16px 16px',
      }}>
        <div className="display" style={{ fontSize: 56, lineHeight: 1, color: 'var(--dyj-red)' }}>Grupo {grupo}</div>
        <div className="mono" style={{ opacity: 0.6, fontSize: 10 }}>1ª FASE · 2º FECHA JUGADA</div>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '60px 2fr repeat(6, 1fr) 1.2fr',
        gap: 12,
        padding: '12px 16px',
        borderBottom: '2px solid var(--dyj-ink)',
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', opacity: 0.6,
      }}>
        <span>POS</span><span>EQUIPO</span><span>PJ</span><span>G</span><span>E</span><span>P</span><span>GF</span><span>GC</span>
        <span style={{ textAlign: 'right' }}>PTS</span>
      </div>
      {equipos.map((t) => {
        const esDyj = t.equipo.includes('Defensa');
        return (
          <div key={t.pos} style={{
            display: 'grid',
            gridTemplateColumns: '60px 2fr repeat(6, 1fr) 1.2fr',
            gap: 12,
            padding: '20px 16px',
            alignItems: 'center',
            background: esDyj ? 'var(--dyj-red)' : 'transparent',
            color: esDyj ? 'var(--dyj-white)' : 'var(--dyj-ink)',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
          }}>
            <span className="display" style={{ fontSize: 28, lineHeight: 1 }}>{String(t.pos).padStart(2, '0')}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>{t.equipo}</span>
            <span className="mono">{t.pj}</span>
            <span className="mono">{t.g}</span>
            <span className="mono">{t.e}</span>
            <span className="mono">{t.p}</span>
            <span className="mono">{t.gf}</span>
            <span className="mono">{t.gc}</span>
            <span className="display" style={{ fontSize: 28, textAlign: 'right', color: esDyj ? 'var(--dyj-gold)' : 'var(--dyj-red)' }}>{t.pts}</span>
          </div>
        );
      })}
    </div>
  );
}

function PartidosTabla() {
  const grupoA = DYJ_DATA.tabla.filter((t) => t.grupo === 'A');
  const grupoB = DYJ_DATA.tabla.filter((t) => t.grupo === 'B');
  return (
    <div style={{ maxWidth: 1200 }}>
      <GrupoTabla grupo="A" equipos={grupoA} />
      <GrupoTabla grupo="B" equipos={grupoB} />
    </div>
  );
}

export default function PagePartidos() {
  const [tab, setTab] = useState('proximos');
  return (
    <>
      <section style={{ background: 'var(--dyj-ink)', color: 'var(--dyj-white)', padding: '180px 48px 100px', position: 'relative', overflow: 'hidden' }}>
        <div className="grain grain--light" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="mono" style={{ color: 'var(--dyj-gold)', marginBottom: 24 }}>03 · Partidos</div>
          <div className="display" style={{ fontSize: 'clamp(96px, 14vw, 240px)', lineHeight: 0.95, letterSpacing: '-0.01em' }}>
            El marcador<br />en vivo
          </div>
          <div style={{ marginTop: 32, fontSize: 18, opacity: 0.85, maxWidth: 600, lineHeight: 1.55 }}>
            {DYJ_DATA.club.liga}. Temporada 2026. Todos los partidos, resultados y la tabla de posiciones.
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dyj-white)', padding: '60px 48px 0' }}>
        <div style={{ display: 'flex', gap: 0, borderBottom: '2px solid var(--dyj-ink)' }}>
          {TABS.map(([k, label]) => (
            <button key={k} onClick={() => setTab(k)} className="hoverable" style={{
              padding: '20px 28px',
              background: tab === k ? 'var(--dyj-ink)' : 'transparent',
              color: tab === k ? 'var(--dyj-white)' : 'var(--dyj-ink)',
              border: 'none',
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em',
              textTransform: 'uppercase', cursor: 'pointer',
            }}>{label}</button>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--dyj-white)', padding: '60px 48px 140px' }}>
        {tab === 'proximos'   && <PartidosProximos />}
        {tab === 'resultados' && <PartidosResultados />}
        {tab === 'tabla'      && <PartidosTabla />}
      </section>
    </>
  );
}
