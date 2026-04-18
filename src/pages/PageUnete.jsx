import { useState } from 'react';

const TIPS = [
  'Entrenamos los domingos a las 11:00.',
  'Partidos de liga los jueves en la tarde.',
  'Abierto a cualquiera que quiera jugar en serio.',
  'Mensualidad accesible, se conversa en persona.',
  'Después de dos invitaciones decides si te quedas.',
];

const EMPTY = { nombre: '', email: '', edad: '', posicion: '', experiencia: '', mensaje: '' };

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

export default function PageUnete() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <section style={{ background: 'var(--dyj-ink)', color: 'var(--dyj-white)', padding: '180px 48px 80px', position: 'relative', overflow: 'hidden', minHeight: '70vh' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/assets/jugador.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center right',
          opacity: 0.25,
        }} />
        <div className="grain grain--light" />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100 }}>
          <div className="mono" style={{ color: 'var(--dyj-gold)', marginBottom: 24 }}>05 · Únete</div>
          <div className="display" style={{ fontSize: 'clamp(72px, 10vw, 180px)', lineHeight: 0.95, letterSpacing: '-0.01em' }}>
            Queremos verte<br /><span style={{ color: 'var(--dyj-red)' }}>en la cancha</span>
          </div>
          <div style={{ marginTop: 40, maxWidth: 700, fontSize: 20, opacity: 0.9, lineHeight: 1.5 }}>
            Jueguen o no por oficio, los que se sumen al club se suman a un proyecto. Rellena esto y te escribimos para conocerte.
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dyj-white)', padding: '120px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, maxWidth: 1400 }}>
          <div className="reveal">
            <div className="mono" style={{ color: 'var(--dyj-red)', marginBottom: 16 }}>Sobre sumarse</div>
            <div className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1 }}>Lo básico</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '40px 0 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {TIPS.map((t, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 16, alignItems: 'baseline', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: 16 }}>
                  <span className="mono" style={{ color: 'var(--dyj-red)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontSize: 17, lineHeight: 1.5 }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            {sent ? (
              <div style={{ border: '2px solid var(--dyj-ink)', padding: 60, textAlign: 'center' }}>
                <div className="display" style={{ fontSize: 64, color: 'var(--dyj-red)', lineHeight: 1 }}>¡Listo!</div>
                <div className="mono" style={{ marginTop: 20, fontSize: 12 }}>Te escribimos en las próximas 48 hrs.</div>
                <button className="btn btn--ghost-dark" style={{ marginTop: 32 }}
                  onClick={() => { setSent(false); setForm(EMPTY); }}>
                  Enviar otro
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <FormField label="Nombre completo" value={form.nombre} onChange={onChange('nombre')} required />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <FormField label="Email" type="email" value={form.email} onChange={onChange('email')} required />
                  <FormField label="Edad" type="number" value={form.edad} onChange={onChange('edad')} required />
                </div>
                <FormField label="Posición en la que juegas" value={form.posicion} onChange={onChange('posicion')} placeholder="Arquero, defensa, volante, delantero…" />
                <FormField label="Años jugando" value={form.experiencia} onChange={onChange('experiencia')} placeholder="Donde jugaste, qué te gusta, etc." textarea />
                <FormField label="¿Algo que quieras contarnos?" value={form.mensaje} onChange={onChange('mensaje')} textarea />
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
