import express from 'express';
import proyectoControllers from '../controllers/proyectos.controllers.js';
const router = express.Router();

router
    .get('/', proyectoControllers.getProjects);

export default router; 