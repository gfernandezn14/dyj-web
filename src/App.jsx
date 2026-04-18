import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import useReveal from './components/useReveal.js';
import PageInicio from './pages/PageInicio.jsx';
import PageClub from './pages/PageClub.jsx';
import PagePlantel from './pages/PagePlantel.jsx';
import PagePartidos from './pages/PagePartidos.jsx';
import PageGaleria from './pages/PageGaleria.jsx';
import PageUnete from './pages/PageUnete.jsx';
import PageSocio from './pages/PageSocio.jsx';

const PAGES = {
  inicio:   PageInicio,
  club:     PageClub,
  plantel:  PagePlantel,
  partidos: PagePartidos,
  galeria:  PageGaleria,
  unete:    PageUnete,
  socio:    PageSocio,
};

export default function App() {
  const [page, setPage] = useState(() => localStorage.getItem('dyj-page') || 'inicio');

  useEffect(() => {
    localStorage.setItem('dyj-page', page);
    window.scrollTo(0, 0);
  }, [page]);

  useReveal('.reveal', [page]);

  const PageEl = PAGES[page] || PageInicio;

  return (
    <>
      <Nav activePage={page} setPage={setPage} />
      <main className="page" key={page}>
        <PageEl setPage={setPage} />
      </main>
      <Footer setPage={setPage} />
    </>
  );
}
