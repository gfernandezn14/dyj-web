import { useState } from 'react';
import { DYJ_DATA } from '../data.js';
import { MPageHeader } from './MShared.jsx';

function GrupoTabla({ grupo, equipos }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, padding: '0 4px 14px', flexWrap: 'wrap' }}>
        <div className="display m-red-text" style={{ fontSize: 36, lineHeight: 1 }}>
          Grupo {grupo}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', opacity: 0.55, textTransform: 'uppercase' }}>
          1ª Fase · 2ª Fecha jugada
        </div>
      </div>
      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '0 -20px', padding: '0 20px' }}>
        <div style={{ minWidth: 520 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '40px 1.6fr repeat(6, 32px) 48px',
            gap: 8,
            padding: '10px 4px',
            borderBottom: '2px solid var(--dyj-ink)',
            fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em', opacity: 0.55,
          }}>
            <span>POS</span><span>EQUIPO</span><span>PJ</span><span>G</span><span>E</span><span>P</span><span>GF</span><span>GC</span>
            <span style={{ textAlign: 'right' }}>PTS</span>
          </div>
          {equipos.map((t) => {
            const esDyj = t.equipo.includes('Defensa');
            return (
              <div key={t.pos} className={esDyj ? 'm-red-bg' : undefined} style={{
                display: 'grid',
                gridTemplateColumns: '40px 1.6fr repeat(6, 32px) 48px',
                gap: 8,
                padding: '14px 4px',
                alignItems: 'center',
                color: esDyj ? 'var(--dyj-white)' : 'var(--dyj-ink)',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: 1 }}>{String(t.pos).padStart(2, '0')}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: 1.1 }}>{t.equipo}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>{t.pj}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>{t.g}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>{t.e}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>{t.p}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>{t.gf}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>{t.gc}</span>
                <span className={esDyj ? undefined : 'm-red-text'} style={{ fontFamily: 'var(--font-display)', fontSize: 22, textAlign: 'right', color: esDyj ? 'var(--dyj-gold)' : undefined }}>{t.pts}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function MPartidos() {
  const d = DYJ_DATA;
  const [tab, setTab] = useState('proximos');
  const [expandedResult, setExpandedResult] = useState(null);
  const p = d.proximoPartido;
  const grupoA = d.tabla.filter((t) => t.grupo === 'A');
  const grupoB = d.tabla.filter((t) => t.grupo === 'B');

  return (
    <>
      <MPageHeader
        kicker="03 · Partidos"
        title={<>El marcador<br />en vivo</>}
        sub={`${d.club.liga}. Temporada 2026. Todos los partidos, resultados y la tabla de posiciones.`}
      />
      <section className="m-sec" style={{ paddingTop: 32 }}>
        <div className="m-tabs">
          {[['proximos', 'Próximos'], ['resultados', 'Resultados'], ['tabla', 'Tabla']].map(([k, label]) => (
            <button key={k}
                    className={'m-tabs__btn ' + (tab === k ? 'is-active' : '')}
                    onClick={() => setTab(k)}>
              {label}
            </button>
          ))}
        </div>

        <div style={{ marginTop: 24 }} key={tab} className="m-tabs-panel">
          {tab === 'proximos' && (
            <>
              <div className="m-match m-match--next">
                <div className="m-match__top">
                  <span>{p.liga} · {p.jornada}</span>
                  <span>{p.fecha} · {p.hora}</span>
                </div>
                <div className="m-match__teams">
                  <div className="m-match__team">{p.local ? 'CSD DyJ' : p.rival}</div>
                  <div className="m-match__vs">VS</div>
                  <div className="m-match__team">{p.local ? p.rival : 'CSD DyJ'}</div>
                </div>
                <div className="m-match__foot">{p.lugar}</div>
              </div>
              <div style={{ marginTop: 28, padding: '20px 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', opacity: 0.6, textTransform: 'uppercase', marginBottom: 12 }}>
                  Resto de la temporada
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.55, opacity: 0.8 }}>
                  El fixture completo de la 1ª Fase se sortea por jornada. Las próximas fechas se publican una vez confirmados día, hora y cancha por la Liga Real Universitaria.
                </div>
              </div>
            </>
          )}

          {tab === 'resultados' && d.resultadosRecientes.map((r, i) => {
            const isOpen = expandedResult === i;
            const isD = r.resultado === 'D';
            const isV = r.resultado === 'V';
            const accentClass = isD ? 'm-red-bg' : '';
            const accentBg = isV ? 'var(--dyj-gold)' : isD ? undefined : 'rgba(0,0,0,0.3)';
            const accentFg = r.resultado === 'E' ? 'var(--dyj-white)' : 'var(--dyj-ink)';
            return (
              <div key={i}>
                <div
                  onClick={() => setExpandedResult(isOpen ? null : i)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '6px 1fr',
                    gap: 14,
                    padding: '20px 0',
                    borderBottom: isOpen ? 'none' : '1px solid rgba(0,0,0,0.08)',
                    cursor: 'pointer',
                  }}>
                  <div className={accentClass} style={{ background: accentBg }} />
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', opacity: 0.55 }}>
                        {r.fecha} · {r.condicion === 'L' ? 'LOCAL' : 'VISITA'}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                        <div className={accentClass} style={{
                          background: accentBg, color: accentFg,
                          padding: '4px 10px',
                          fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em',
                        }}>
                          {r.resultado === 'V' ? 'VICTORIA' : r.resultado === 'D' ? 'DERROTA' : 'EMPATE'}
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, opacity: 0.45, letterSpacing: '0.18em' }}>
                          {isOpen ? '▲ CERRAR' : '▼ GOLES'}
                        </div>
                      </div>
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto 1fr',
                      gap: 12,
                      alignItems: 'center',
                      marginTop: 12,
                    }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1, textAlign: 'right' }}>
                        {r.condicion === 'L' ? 'DyJ' : r.rival}
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, lineHeight: 1 }}>
                        {r.condicion === 'L' ? r.local : r.visita}
                        <span style={{ opacity: 0.4, margin: '0 4px' }}>:</span>
                        {r.condicion === 'L' ? r.visita : r.local}
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1 }}>
                        {r.condicion === 'L' ? r.rival : 'DyJ'}
                      </div>
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div style={{
                    padding: '14px 20px 18px',
                    background: 'var(--dyj-bone)',
                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                    display: 'flex', flexDirection: 'column', gap: 6,
                  }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, opacity: 0.55, letterSpacing: '0.22em', marginBottom: 2 }}>
                      GOLES CSD DyJ
                    </div>
                    {r.goles && r.goles.length > 0
                      ? r.goles.map((g, j) => (
                          <div key={j} style={{ fontFamily: 'var(--font-sans)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ color: 'var(--dyj-red)', fontFamily: 'var(--font-mono)', fontSize: 9 }}>{String(j + 1).padStart(2, '0')}</span>
                            {g}
                          </div>
                        ))
                      : <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.5 }}>Sin registrar aún</div>
                    }
                  </div>
                )}
              </div>
            );
          })}

          {tab === 'tabla' && (
            <>
              <GrupoTabla grupo="A" equipos={grupoA} />
              <GrupoTabla grupo="B" equipos={grupoB} />
            </>
          )}
        </div>
      </section>
    </>
  );
}
