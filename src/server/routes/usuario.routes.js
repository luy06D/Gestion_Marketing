import {Router} from 'express';
import usuarioController from '../controllers/usuarios.controllers.js';

const router = Router();

// RUTAS PARA LAS OPERACIONES CRUD 
router.get('/', usuarioController.listarUsers);

export default router;


