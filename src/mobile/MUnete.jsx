import { useState } from 'react';
import { MPageHeader } from './MShared.jsx';

const TIPS = [
  'Entrenamos los domingos a las 11:00.',
  'Partidos de liga los jueves en la tarde.',
  'Abierto a cualquiera que quiera jugar en serio.',
  'Mensualidad accesible, se conversa en persona.',
  'Después de dos invitaciones decides si te quedas.',
];

const EMPTY = { nombre: '', email: '', edad: '', posicion: '', experiencia: '', mensaje: '' };

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

export default function MUnete() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const ch = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <MPageHeader
        kicker="05 · Únete"
        title={<>Queremos verte<br /><span className="m-red-text">en la cancha</span></>}
        sub="Jueguen o no por oficio, los que se sumen al club se suman a un proyecto. Rellena esto y te escribimos para conocerte."
        bgImg="/assets/jugador.jpg"
      />

      <section className="m-sec">
        <span className="m-eyebrow">Sobre sumarse</span>
        <h2 className="m-title">Lo básico</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {TIPS.map((t, i) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 14, alignItems: 'baseline', paddingBottom: 14, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <span className="m-red-text" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.18em' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.5 }}>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="m-sec m-sec--bone">
        {sent ? (
          <div style={{ border: '2px solid var(--dyj-ink)', padding: 32, textAlign: 'center' }}>
            <div className="m-title m-red-text" style={{ fontSize: 48, marginBottom: 10 }}>¡Listo!</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.22em' }}>
              Te escribimos en las próximas 48 hrs.
            </div>
            <button onClick={() => { setSent(false); setForm(EMPTY); }}
                    style={{ marginTop: 22, background: 'transparent', border: '1.5px solid var(--dyj-ink)', padding: '12px 22px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', cursor: 'pointer' }}>
              Enviar otro
            </button>
          </div>
        ) : (
          <form className="m-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ marginTop: 0 }}>
            <Field label="Nombre completo" val={form.nombre} on={ch('nombre')} req />
            <Field label="Email" type="email" val={form.email} on={ch('email')} req />
            <Field label="Edad" type="number" val={form.edad} on={ch('edad')} req />
            <Field label="Posición en la que juegas" val={form.posicion} on={ch('posicion')} placeholder="Arquero, defensa, volante, delantero…" />
            <Field label="Años jugando" val={form.experiencia} on={ch('experiencia')} textarea placeholder="Donde jugaste, qué te gusta, etc." />
            <Field label="¿Algo que quieras contarnos?" val={form.mensaje} on={ch('mensaje')} textarea />
            <button type="submit" className="m-form__submit">Enviar postulación →</button>
          </form>
        )}
      </section>
    </>
  );
}
