import { useState } from 'react';
import { MPageHeader } from './MShared.jsx';

const BENEFICIOS = [
  'Acceso prioritario a partidos, finales y eventos del club.',
  'Carnet de socio numerado y kit de bienvenida.',
  'Voto en asambleas anuales del CSD.',
  'Descuentos en prendas del club y entradas a amistosos.',
  'Invitación al asado anual del club.',
];

const APORTES = [
  { tier: 'Plata', monto: '8.000',  detalle: 'Aporte mensual base. Carnet, voto y descuentos.' },
  { tier: 'Oro',   monto: '15.000', detalle: 'Todo lo anterior, más la camiseta oficial del año.' },
  { tier: 'Honor', monto: '30.000', detalle: 'Todo lo anterior, más lugar reservado en finales y nombre en placa de socios fundadores.' },
];

const EMPTY = { nombre: '', email: '', telefono: '', tier: 'Plata', motivacion: '' };

function Field({ label, val, on, type = 'text', req, placeholder, textarea }) {
  return (
    <label className="m-form__field">
      <span className="m-form__label">{label}{req && ' *'}</span>
      {textarea
        ? <textarea className="m-form__textarea" value={val} onChange={on} placeholder={placeholder} required={req} />
        : <input className="m-form__input" type={type} value={val} onChange={on} placeholder={placeholder} required={req} />}
    </label>
  );
}

export default function MSocio() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const ch = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <MPageHeader
        kicker="06 · Ser socio"
        title={<>Sostén el club<br /><span style={{ color: 'var(--dyj-gold)' }}>desde la tribuna</span></>}
        sub="Ser parte se escribe en plural. No hace falta meter el botín en la cancha para empujar el proyecto: el socio es la base que sostiene al club, llena la tribuna y hace posible lo que viene."
        bgImg="/assets/plantel.jpg"
      />

      <section className="m-sec">
        <span className="m-eyebrow">Beneficios</span>
        <h2 className="m-title">Lo que recibes<br /><span className="m-red-text">por ser parte</span></h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {BENEFICIOS.map((b, i) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 14, alignItems: 'baseline', padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.1)', borderTop: i === 0 ? '1px solid rgba(0,0,0,0.1)' : 'none' }}>
              <span className="m-red-text" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.18em' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.5 }}>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="m-sec m-sec--bone">
        <span className="m-eyebrow">Aportes</span>
        <h2 className="m-title">Tres formas<br />de sumarse</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
          {APORTES.map((a) => {
            const esHonor = a.tier === 'Honor';
            return (
              <div key={a.tier} style={{
                padding: 22,
                color: esHonor ? 'var(--dyj-white)' : 'var(--dyj-ink)',
                ...(esHonor
                  ? { background: 'var(--dyj-ink)', borderTop: '4px solid var(--dyj-gold)' }
                  : { backgroundColor: 'var(--dyj-white)', backgroundImage: 'var(--dyj-red-img)', backgroundSize: '100% 4px', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }
                ),
              }}>
                <div className={esHonor ? undefined : 'm-red-text'} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: esHonor ? 'var(--dyj-gold)' : undefined }}>
                  Socio {a.tier}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 0.95, marginTop: 8, color: esHonor ? 'var(--dyj-gold)' : 'var(--dyj-ink)' }}>
                  ${a.monto}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', marginLeft: 8, opacity: 0.7 }}>CLP / MES</span>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.5, marginTop: 12, opacity: esHonor ? 0.9 : 1 }}>{a.detalle}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="m-sec">
        <span className="m-eyebrow">Postulación</span>
        <h2 className="m-title">Quiero<br />ser socio</h2>
        <div style={{ marginTop: 16, fontSize: 15, lineHeight: 1.55 }}>
          Te respondemos en 48 horas con los datos para coordinar el aporte y entregarte tu carnet. Sin contratos, sin letra chica.
        </div>
        {sent ? (
          <div className="m-fade-in" style={{ border: '2px solid var(--dyj-ink)', padding: 32, marginTop: 24, textAlign: 'center' }}>
            <div className="m-title m-red-text" style={{ fontSize: 48, marginBottom: 10 }}>¡Bienvenido!</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.22em' }}>
              Te escribimos en las próximas 48 horas
            </div>
            <button onClick={() => { setSent(false); setForm(EMPTY); }}
                    style={{ marginTop: 22, background: 'transparent', border: '1.5px solid var(--dyj-ink)', padding: '12px 22px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', cursor: 'pointer' }}>
              Enviar otra postulación
            </button>
          </div>
        ) : (
          <form className="m-form m-fade-in" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <Field label="Nombre completo" val={form.nombre} on={ch('nombre')} req />
            <Field label="Email" type="email" val={form.email} on={ch('email')} req />
            <Field label="Teléfono" val={form.telefono} on={ch('telefono')} placeholder="+56 9 ..." />
            <label className="m-form__field">
              <span className="m-form__label">Tipo de aporte *</span>
              <select className="m-form__input" value={form.tier} onChange={ch('tier')} required
                      style={{ appearance: 'none' }}>
                {APORTES.map((a) => (
                  <option key={a.tier} value={a.tier}>Socio {a.tier} — ${a.monto} CLP / mes</option>
                ))}
              </select>
            </label>
            <Field label="¿Por qué quieres ser parte?" val={form.motivacion} on={ch('motivacion')} textarea placeholder="Cuéntanos qué te conecta con el club" />
            <button type="submit" className="m-form__submit">Enviar postulación →</button>
          </form>
        )}
      </section>
    </>
  );
}
