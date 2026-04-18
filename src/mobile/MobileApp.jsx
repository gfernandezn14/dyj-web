import MNav from './MNav.jsx';
import MFooter from './MFooter.jsx';
import MInicio from './MInicio.jsx';
import MClub from './MClub.jsx';
import MPlantel from './MPlantel.jsx';
import MPartidos from './MPartidos.jsx';
import MGaleria from './MGaleria.jsx';
import MUnete from './MUnete.jsx';
import MSocio from './MSocio.jsx';

const PAGES = {
  inicio:   MInicio,
  club:     MClub,
  plantel:  MPlantel,
  partidos: MPartidos,
  galeria:  MGaleria,
  unete:    MUnete,
  socio:    MSocio,
};

export default function MobileApp({ page, setPage }) {
  const PageEl = PAGES[page] || MInicio;
  return (
    <>
      <MNav activePage={page} setPage={setPage} />
      <main className="m-page" key={page}>
        <PageEl setPage={setPage} />
      </main>
      <MFooter setPage={setPage} />
    </>
  );
}
