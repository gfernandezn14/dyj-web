import { DYJ_DATA } from '../data.js';
import { MPageHeader } from './MShared.jsx';

export default function MGaleria() {
  const items = [...DYJ_DATA.galeria, ...DYJ_DATA.galeria.map((i) => ({ ...i }))];
  return (
    <>
      <MPageHeader variant="red" kicker="04 · Galería" title={<>La temporada<br />en imágenes</>} />
      <section className="m-sec" style={{ padding: '20px 0 40px' }}>
        <div className="m-gallery">
          {items.map((g, i) => (
            <div key={i} className="m-gallery__card" style={{ backgroundImage: `url('${g.src}')` }}>
              <div className="m-gallery__caption">
                <div className="m-gallery__caption-meta">Foto · {String(i + 1).padStart(2, '0')}</div>
                <div className="m-gallery__caption-text">{g.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
