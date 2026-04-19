export const DYJ_DATA = {
  club: {
    nombre: "Club Social y Deportivo Defensa y Justicia",
    abrev: "CSD DyJ",
    handle: "@csd.dyj",
    fundado: 2020,
    ciudad: "Santiago de Chile",
    liga: "Liga Real Universitaria",
    tagline: ["Cinco años jugando", "Uno siendo club", "Y lo que viene"],
  },

  hero: {
    kicker: "Fundado 2020 · Santiago de Chile",
    title: "Cinco años\npisando\ncancha",
    subtitle: "Club Social y Deportivo Defensa y Justicia — constituido formalmente en 2026. Campeones Nacionales de Abogados, Talca 2024.",
  },

  proximoPartido: {
    fecha: "JUE 23 ABR",
    hora: "20:00",
    rival: "Gaucho",
    lugar: "Cancha por confirmar",
    liga: "Liga Real Universitaria · Senior 2026 · Fecha 03 · Grupo A",
    local: true,
  },

  resultadosRecientes: [
    { fecha: "16 ABR", rival: "Bastilla FC",       local: 4, visita: 1, condicion: "V", resultado: "V" },
    { fecha: "09 ABR", rival: "Sub 20 Inmortal",   local: 0, visita: 5, condicion: "L", resultado: "D" },
  ],

  tabla: [
    // Grupo A
    { grupo: "A", pos: 1, equipo: "Sub 20 Inmortal",        pj: 2, g: 2, e: 0, p: 0, gf: 8,  gc: 2, pts: 6 },
    { grupo: "A", pos: 2, equipo: "Peselaco",               pj: 2, g: 1, e: 0, p: 1, gf: 6,  gc: 3, pts: 3 },
    { grupo: "A", pos: 3, equipo: "Vinchuca",               pj: 2, g: 1, e: 0, p: 1, gf: 5,  gc: 4, pts: 3 },
    { grupo: "A", pos: 4, equipo: "Bastilla FC",            pj: 2, g: 1, e: 0, p: 1, gf: 6,  gc: 6, pts: 3 },
    { grupo: "A", pos: 5, equipo: "La Academia",            pj: 2, g: 1, e: 0, p: 1, gf: 5,  gc: 5, pts: 3 },
    { grupo: "A", pos: 6, equipo: "CSD Defensa y Justicia", pj: 2, g: 1, e: 0, p: 1, gf: 4,  gc: 6, pts: 3 },
    { grupo: "A", pos: 7, equipo: "Gaucho",                 pj: 2, g: 1, e: 0, p: 1, gf: 2,  gc: 6, pts: 3 },
    { grupo: "A", pos: 8, equipo: "Warriors",               pj: 2, g: 0, e: 0, p: 2, gf: 3,  gc: 7, pts: 0 },

    // Grupo B
    { grupo: "B", pos: 1, equipo: "Gordobeses",   pj: 2, g: 2, e: 0, p: 0, gf: 11, gc: 2, pts: 6 },
    { grupo: "B", pos: 2, equipo: "Gross x",      pj: 2, g: 2, e: 0, p: 0, gf: 8,  gc: 1, pts: 6 },
    { grupo: "B", pos: 3, equipo: "Hugo Jara",    pj: 2, g: 2, e: 0, p: 0, gf: 6,  gc: 1, pts: 6 },
    { grupo: "B", pos: 4, equipo: "Canadiense",   pj: 2, g: 1, e: 0, p: 1, gf: 7,  gc: 7, pts: 3 },
    { grupo: "B", pos: 5, equipo: "Monarcas",     pj: 2, g: 1, e: 0, p: 1, gf: 3,  gc: 6, pts: 3 },
    { grupo: "B", pos: 6, equipo: "LPC",          pj: 2, g: 0, e: 0, p: 2, gf: 1,  gc: 5, pts: 0 },
    { grupo: "B", pos: 7, equipo: "Mota Classic", pj: 2, g: 0, e: 0, p: 2, gf: 2,  gc: 7, pts: 0 },
    { grupo: "B", pos: 8, equipo: "Pitizorri Sr", pj: 2, g: 0, e: 0, p: 2, gf: 0,  gc: 9, pts: 0 },
  ],

  plantel: [
    { num: 1,  nombre: "Matías Reyes",     pos: "Arquero",    edad: 32, debut: 2020, pj: 42, goles: 0,  vallaInvicta: 14, anecdota: "Atajó el penal que nos dio el título 2024." },
    { num: 4,  nombre: "Diego Salazar",    pos: "Defensa",    edad: 34, debut: 2020, pj: 48, goles: 3,  anecdota: "Fundador. No se ha perdido un entrenamiento en tres años." },
    { num: 5,  nombre: "Tomás Guerrero",   pos: "Defensa",    edad: 29, debut: 2021, pj: 38, goles: 2,  anecdota: "Especialista en cabezazos a balón parado." },
    { num: 6,  nombre: "Ignacio Pérez",    pos: "Volante",    edad: 31, debut: 2020, pj: 45, goles: 8,  anecdota: "Capitán. Su charla pre-partido es legendaria." },
    { num: 7,  nombre: "Felipe Torres",    pos: "Volante",    edad: 28, debut: 2022, pj: 30, goles: 6,  anecdota: "Llegó del interclubes, se quedó para siempre." },
    { num: 8,  nombre: "Andrés Lagos",     pos: "Volante",    edad: 30, debut: 2020, pj: 44, goles: 5,  anecdota: "Motor del mediocampo. Corre por dos." },
    { num: 9,  nombre: "Carlos Mena",      pos: "Delantero",  edad: 27, debut: 2021, pj: 36, goles: 22, anecdota: "Goleador histórico del club." },
    { num: 10, nombre: "Rodrigo Vargas",   pos: "Enganche",   edad: 29, debut: 2020, pj: 46, goles: 18, anecdota: "Los tiros libres llevan su nombre." },
    { num: 11, nombre: "Benjamín Silva",   pos: "Delantero",  edad: 26, debut: 2023, pj: 18, goles: 12, anecdota: "El más joven del once titular." },
    { num: 14, nombre: "Pablo Morán",      pos: "Defensa",    edad: 33, debut: 2020, pj: 40, goles: 1,  anecdota: "El tesorero no se equivoca ni en la cancha ni en Excel." },
    { num: 15, nombre: "Esteban Ruiz",     pos: "Volante",    edad: 28, debut: 2022, pj: 25, goles: 4,  anecdota: "Nunca pisa un asado con pasto en la zapatilla." },
    { num: 17, nombre: "Gonzalo Paredes",  pos: "Delantero",  edad: 30, debut: 2021, pj: 32, goles: 14, anecdota: "Si hay gol en el último minuto, probablemente es suyo." },
  ],

  cuerpoTecnico: [
    { nombre: "Carlos Mohor",   rol: "Director Técnico" },
    { nombre: "Carlos Badilla", rol: "Asistente Técnico" },
  ],

  directiva: [
    { nombre: "Camilo Martínez",      rol: "Presidente" },
    { nombre: "Felipe Oyarzún",       rol: "Secretario" },
    { nombre: "Daniel Solervicens",   rol: "Tesorero" },
    { nombre: "Francisco Villanueva", rol: "Director" },
    { nombre: "Juan Peribonio",       rol: "Director" },
    { nombre: "Martín Esser",         rol: "Director" },
  ],

  palmares: [
    { anio: 2024, titulo: "Campeón Nacional de Abogados — Todo Competidor", lugar: "Talca", destacado: true },
    { anio: 2023, titulo: "Subcampeón Liga Privada RM" },
    { anio: 2022, titulo: "Clasificación a Campeonato Nacional de Abogados" },
    { anio: 2020, titulo: "Nace el equipo" },
  ],

  valores: [
    { n: "01", titulo: "Justicia",    texto: "Jugamos limpio. Dentro y fuera de la cancha." },
    { n: "02", titulo: "Pasión",      texto: "Cuando nos cerraron una puerta, armamos la nuestra y ganamos. Ese espíritu no se negocia." },
    { n: "03", titulo: "Fraternidad", texto: "Somos amigos antes que club, y club antes que once titulares." },
    { n: "04", titulo: "Inclusión",   texto: "Abiertos a quienes compartan nuestros valores, sean o no del mundo jurídico." },
    { n: "05", titulo: "Compromiso",  texto: "Con el proyecto, con el grupo, con la comunidad que nos rodea." },
  ],

  sponsors: [
    { nombre: "Estudio Jurídico Asociado", tier: "oro" },
    { nombre: "Litoral Seguros",           tier: "oro" },
    { nombre: "Cafetería La Cláusula",     tier: "plata" },
    { nombre: "Gimnasio Sentencia",        tier: "plata" },
    { nombre: "Notaría Central",           tier: "bronce" },
    { nombre: "Librería Codex",            tier: "bronce" },
  ],

  galeria: Array.from({ length: 28 }, (_, i) => ({
    src: `/assets/gallery/g${String(i + 1).padStart(2, '0')}.jpg`,
    caption: `CSD Defensa y Justicia · ${2020 + Math.min(5, Math.floor(i / 6))}`,
  })),
};
