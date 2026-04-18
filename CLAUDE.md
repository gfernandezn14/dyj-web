# CSD Defensa y Justicia — Sitio web

Sitio del Club Social y Deportivo Defensa y Justicia (DyJ). Equipo de fútbol amateur fundado en 2020 por abogados, constituido como club en 2026, campeón nacional de abogados Talca 2024.

## Stack

- React 18 + Vite
- JS plano (sin TS), JSX, CSS variables
- Sin framework de UI; estilos inline + `styles.css`
- Dev server: `npm run dev` → http://localhost:5173

## Estructura

```
src/
  App.jsx              router manual por estado (setPage)
  main.jsx             entry
  data.js              TODO el contenido del sitio (un objeto DYJ_DATA)
  styles.css           CSS variables + .display, .mono, .grain, .footer__*, .btn
  pages/
    PageInicio.jsx     hero + próximo partido + resultados + plantel preview + manifiesto
    PageClub.jsx       hero + historia + valores + directiva/CT + palmarés + sponsors
    PagePlantel.jsx    detalle de plantel
    PagePartidos.jsx   calendario + resultados + tabla
    PageGaleria.jsx    grid de fotos
    PageUnete.jsx      postulación de jugadores (entrenan + compiten)
    PageSocio.jsx      postulación de socios (sostienen el club, no juegan obligatoriamente)
  heroes/HeroEstadio.jsx
  components/
    Nav.jsx, Footer.jsx, SectionHeader.jsx, CustomCursor.jsx, useReveal.js
public/assets/
  victoria.jpg, derrota.jpg    fotos para tarjetas de resultado
  juego.jpg, jugador.jpg, plantel.jpg, escudo.png
  gallery/g01.jpg … g28.jpg
```

## Manual de marca (resumen vinculante)

PDF fuente: `C:/Users/gafn_/Desktop/DyJ/CSD Defensa y Justicia — Manual de Marca.pdf`. Logos en `C:/Users/gafn_/Desktop/DyJ/Logos/`. Galería oficial en `C:/Users/gafn_/Desktop/DyJ/Galería de fotos/`.

**Paleta primaria** (en `styles.css` como CSS vars):
- `--dyj-red` `#C8102E` (rojo DyJ, primario)
- `--dyj-ink` `#0B0B0C` (tinta, neutro oscuro)
- `--dyj-bone` `#FAF7F2` (hueso)
- `--dyj-white` `#FFFFFF`

**Acentos** (uso moderado):
- `--dyj-gold` `#C9A24B` — sólo para celebración, títulos, campeón, aniversarios
- `#8A0A1F` — sangre (profundidad)
- `#2D3B1F` — pasto (fondos ocasionales)

**Tipografía:**
- Display/titulares: **Anton** (`var(--font-display)` o clase `.display`). Sólo MAYÚSCULAS o capitalizado. Para todo lo grande: títulos de sección, números grandes, escudos textuales.
- Texto: **Archivo** (`var(--font-sans)`). Pesos 400/500/700/900.
- Mono/metadata: **JetBrains Mono** (`var(--font-mono)` o clase `.mono`). Para etiquetas, fechas, números secundarios, eyebrows.

**Voz:** directa, cálida, orgullosa, colectiva ("nosotros"). No solemne, no corporativa, no individualista.

## Reglas de diseño validadas con el usuario

1. **Sin puntos finales en títulos display.** Removidos en todos los `<h*>` y `.display` grandes. Si agregas títulos nuevos, no pongas punto.
2. **`lineHeight ≥ 0.95` SIEMPRE en titulares display multilínea**. Anton tiene descenders muy largos (j, g, y, p, Q) que pisan la línea siguiente con cualquier valor < 0.95. Esto vale para `SectionHeader`, heroes (`clamp(96px, 14vw, 240px)` máximo recomendado, no 320px), bloques de texto en cualquier página. Sólo numerales o palabras sueltas en una sola línea pueden ir más apretados (0.8-0.9).
3. **Fotos de resultados**: victoria → `/assets/victoria.jpg`, derrota → `/assets/derrota.jpg`. NO usar `juego.jpg`/`jugador.jpg` para esto.
4. **Bloque "De un grupo de amigos a un club"** (`PageClub.jsx`): título a la izquierda en mayúsculas Anton, texto justificado a la derecha, color uniforme tinta, sin opacidades distintas entre párrafos. La palabra final de cierre puede ir en rojo (ej. "un club").
5. **Hitos / años** en `PageClub.jsx`: grid de 4 tarjetas. Año en Anton rojo grande, título en mono mayúsculas, texto en regular. El destacado (Campeón Nacional 2024) va con `background: var(--dyj-ink)` + año en `var(--dyj-gold)` + borde superior dorado. NO convertir esto en una franja horizontal sin tarjetas — eso quedó horrible y se revirtió.
6. **Manifiesto del Inicio** (`PageInicio.jsx`, `BlockManifiesto`): 3 líneas cortas, fuente `clamp(36px, 4.4vw, 68px)`, `lineHeight: 1.15`. NO usar el texto largo de `DYJ_DATA.club.manifiesto` como display gigante — desborda.
7. **Footer big tagline**: `clamp(48px, 6vw, 96px)`, NO los 320px que tenía antes.
8. **Idioma**: español neutro chileno. Nunca "vos" ni "jugás" — si encuentras alguno, corrígelo a "tú"/"juegas".

## Contenido — fuente única

Todo lo editorial vive en `src/data.js` (`DYJ_DATA`). Si vas a cambiar nombres, fechas, jugadores, palmarés, sponsors, valores, hero, manifiesto, tagline → tócalo ahí, no en los componentes.

Tagline vigente (sin puntos): `["Cinco años jugando", "Uno siendo club", "Lo mejor está por venir"]`.

## Cosas que el usuario suele pedir

- Ajustes de tipografía y layout (overlap, jerarquía, alineación).
- Reescribir copy con voz del manual.
- Aplicar cambios desde el manual de marca (revisar el PDF antes de inventar).
- Trabajar contra el dev server corriendo en `:5173`. No reiniciarlo salvo que esté caído.
