import { useState } from 'react';

const BENEFICIOS = [
  'Acceso prioritario a partidos, finales y eventos del club.',
  'Carnet de socio numerado y kit de bienvenida.',
  'Voto en asambleas anuales del CSD.',
  'Descuentos en merchandising y entradas a partidos amistosos.',
  'Invitación al asado anual del club.',
];

const APORTES = [
  { tier: 'Plata',  monto: '8.000', detalle: 'Aporte mensual base. Carnet, voto y descuentos.' },
  { tier: 'Oro',    monto: '15.000', detalle: 'Todo lo anterior + camiseta oficial del año.' },
  { tier: 'Honor',  monto: '30.000', detalle: 'Todo lo anterior + lugar reservado en finales y nombre en placa de socios fundadores.' },
];

const EMPTY = { nombre: '', email: '', telefono: '', tier: 'Plata', motivacion: '' };

function FormField({ label, value, onChange, type = 'text', required, placeholder, textarea }) {
  const sty = {
    width: '100%',
    padding: '16px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid var(--dyj-ink)',
    fontSize: 20,
    fontFamily: 'var(--font-sans)',
    color: 'var(--dyj-ink)',
    outline: 'none',
    resize: textarea ? 'vertical' : 'none',
    minHeight: textarea ? 90 : 'auto',
  };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span className="mono" style={{ opacity: 0.6, fontSize: 10 }}>{label}{required && ' *'}</span>
      {textarea
        ? <textarea value={value} onChange={onChange} required={required} placeholder={placeholder} style={sty} />
        : <input type={type} value={value} onChange={onChange} required={required} placeholder={placeholder} style={sty} />}
    </label>
  );
}

export default function PageSocio() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <section style={{ background: 'var(--dyj-ink)', color: 'var(--dyj-white)', padding: '180px 48px 80px', position: 'relative', overflow: 'hidden', minHeight: '70vh' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/assets/plantel.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.22,
        }} />
        <div className="grain grain--light" />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100 }}>
          <div className="mono" style={{ color: 'var(--dyj-gold)', marginBottom: 24 }}>06 · Ser socio</div>
          <div className="display" style={{ fontSize: 'clamp(72px, 10vw, 180px)', lineHeight: 0.95 }}>
            Sostén el club<br /><span style={{ color: 'var(--dyj-gold)' }}>desde la tribuna</span>
          </div>
          <div style={{ marginTop: 40, maxWidth: 720, fontSize: 20, opacity: 0.9, lineHeight: 1.5 }}>
            Ser parte se escribe en plural. No hace falta meter el botín en la cancha para empujar el proyecto: el socio es la base que sostiene al club, llena la tribuna y hace posible lo que viene.
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dyj-bone)', padding: '120px 48px' }}>
        <div className="reveal" style={{ maxWidth: 1400, marginBottom: 60 }}>
          <div className="mono" style={{ color: 'var(--dyj-red)', marginBottom: 16 }}>Beneficios</div>
          <div className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 84px)', lineHeight: 0.95, textTransform: 'uppercase', maxWidth: 900 }}>
            Lo que recibes<br /><span style={{ color: 'var(--dyj-red)' }}>por ser parte</span>
          </div>
        </div>
        <ul className="reveal" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 0, maxWidth: 1100 }}>
          {BENEFICIOS.map((b, i) => (
            <li key={i} style={{
              display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24,
              alignItems: 'baseline',
              padding: '22px 0',
              borderBottom: '1px solid rgba(0,0,0,0.12)',
              borderTop: i === 0 ? '1px solid rgba(0,0,0,0.12)' : 'none',
            }}>
              <span className="mono" style={{ color: 'var(--dyj-red)' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontSize: 18, lineHeight: 1.5 }}>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ background: 'var(--dyj-white)', padding: '120px 48px' }}>
        <div className="reveal" style={{ maxWidth: 1400, marginBottom: 60 }}>
          <div className="mono" style={{ color: 'var(--dyj-red)', marginBottom: 16 }}>Aportes</div>
          <div className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 84px)', lineHeight: 0.95, textTransform: 'uppercase' }}>
            Tres formas<br />de sumarse
          </div>
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 1400 }}>
          {APORTES.map((a) => {
            const esHonor = a.tier === 'Honor';
            return (
              <div key={a.tier} style={{
                padding: 32,
                background: esHonor ? 'var(--dyj-ink)' : 'transparent',
                color: esHonor ? 'var(--dyj-white)' : 'var(--dyj-ink)',
                borderTop: '4px solid ' + (esHonor ? 'var(--dyj-gold)' : 'var(--dyj-red)'),
                display: 'flex', flexDirection: 'column', gap: 16,
              }}>
                <div className="mono" style={{ opacity: 0.7, letterSpacing: '0.18em', fontSize: 11, textTransform: 'uppercase', color: esHonor ? 'var(--dyj-gold)' : 'var(--dyj-red)' }}>
                  Socio {a.tier}
                </div>
                <div className="display" style={{ fontSize: 64, lineHeight: 0.9, color: esHonor ? 'var(--dyj-gold)' : 'var(--dyj-ink)' }}>
                  ${a.monto}
                  <span className="mono" style={{ fontSize: 11, marginLeft: 8, opacity: 0.7 }}>CLP / MES</span>
                </div>
                <div style={{ fontSize: 16, lineHeight: 1.55, opacity: esHonor ? 0.9 : 1 }}>{a.detalle}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ background: 'var(--dyj-bone)', padding: '120px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, maxWidth: 1400 }}>
          <div className="reveal">
            <div className="mono" style={{ color: 'var(--dyj-red)', marginBottom: 16 }}>Postulación</div>
            <div className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1, textTransform: 'uppercase' }}>
              Quiero<br />ser socio
            </div>
            <div style={{ marginTop: 32, fontSize: 17, lineHeight: 1.55, maxWidth: 420 }}>
              Te respondemos en 48 horas con los datos para coordinar el aporte y entregarte tu carnet. Sin contratos, sin letra chica.
            </div>
          </div>

          <div className="reveal">
            {sent ? (
              <div className="m-fade-in" style={{ border: '2px solid var(--dyj-ink)', padding: 60, textAlign: 'center' }}>
                <div className="display" style={{ fontSize: 64, color: 'var(--dyj-red)', lineHeight: 1 }}>¡Bienvenido!</div>
                <div className="mono" style={{ marginTop: 20, fontSize: 12 }}>Te escribimos en las próximas 48 hrs</div>
                <button className="btn btn--ghost-dark" style={{ marginTop: 32 }}
                  onClick={() => { setSent(false); setForm(EMPTY); }}>
                  Enviar otra postulación
                </button>
              </div>
            ) : (
              <form className="m-fade-in" onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <FormField label="Nombre completo" value={form.nombre} onChange={onChange('nombre')} required />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <FormField label="Email" type="email" value={form.email} onChange={onChange('email')} required />
                  <FormField label="Teléfono" value={form.telefono} onChange={onChange('telefono')} placeholder="+56 9 ..." />
                </div>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span className="mono" style={{ opacity: 0.6, fontSize: 10 }}>Tipo de aporte *</span>
                  <select value={form.tier} onChange={onChange('tier')} required style={{
                    width: '100%', padding: '16px 0', background: 'transparent',
                    border: 'none', borderBottom: '2px solid var(--dyj-ink)',
                    fontSize: 20, fontFamily: 'var(--font-sans)', color: 'var(--dyj-ink)', outline: 'none',
                  }}>
                    {APORTES.map((a) => (
                      <option key={a.tier} value={a.tier}>Socio {a.tier} — ${a.monto} CLP / mes</option>
                    ))}
                  </select>
                </label>
                <FormField label="¿Por qué quieres ser parte?" value={form.motivacion} onChange={onChange('motivacion')} textarea placeholder="Cuéntanos qué te conecta con el club" />
                <button type="submit" className="btn btn--red hoverable" style={{ alignSelf: 'flex-start', marginTop: 10 }}>
                  Enviar postulación →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
