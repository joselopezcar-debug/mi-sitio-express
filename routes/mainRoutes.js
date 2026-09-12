const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

// Rutas principales
router.get("/", mainController.home);
router.get("/about", mainController.about);

// Rutas de Contacto y Admin
router.get("/contact", mainController.contact);
router.post("/contact", mainController.saveContact);
router.get("/admin", mainController.admin);

// NUEVAS RUTAS: Gestión de Videojuegos (Libre criterio)
router.get("/games", mainController.listGames);       // Formulario y tabla de listado
router.post("/games/add", mainController.saveGame);   // Procesar nuevo videojuego

module.exports = router;
