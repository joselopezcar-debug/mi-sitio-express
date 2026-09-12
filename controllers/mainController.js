// "Bases de datos" en memoria
const messages = [];
const games = [
  // Datos iniciales de ejemplo
  { titulo: "The Legend of Zelda: Ocarina of Time", plataforma: "Nintendo Switch 2", genero: "Aventura", año: 2026, calificacion: 5 },
  { titulo: "Elden Ring", plataforma: "PC / PS5 / Xbox", genero: "RPG", año: 2022, calificacion: 5 }
];

const home = (req, res) => {
  res.render("home", { title: "Inicio" });
};

const about = (req, res) => {
  res.render("about", { title: "Acerca de" });
};

const contact = (req, res) => {
 res.render("contact", { title: "Contacto" });
};

const saveContact = (req, res) => {
  const { nombre, email, mensaje } = req.body;
  messages.push({ nombre, email, mensaje });
  res.redirect('/admin');
};

const admin = (req, res) => {
  res.render("admin", { messages, title: "Panel de Administración" });
};

// --- CONTROLADORES PARA VIDEOJUEGOS ---

// Renderiza la vista con el formulario y la tabla de registros
const listGames = (req, res) => {
  res.render("games", { games, title: "Catálogo de Videojuegos" });
};

// Guarda el videojuego capturando los 5 campos requeridos
const saveGame = (req, res) => {
  const { titulo, plataforma, genero, año, calificacion } = req.body;
  
  games.push({
    titulo,
    plataforma,
    genero,
    año: parseInt(año),
    calificacion: parseInt(calificacion)
  });
  
  res.redirect('/games');
};

module.exports = {
  home,
  about,
  contact,
  saveContact,
  admin,
  listGames,
  saveGame
};
