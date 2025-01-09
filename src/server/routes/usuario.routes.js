const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarios.controllers');


// RUTAS PARA LAS OPERACIONES CRUD 
router.get('/', usuarioController.listarUsers);

module.exports = router;


