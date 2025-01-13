import express from 'express';
import usuariosControllers from '../controllers/usuarios.controllers.js';
const  router = express.Router();

router
    .get('/', usuariosControllers.getUsers);


export default router; 