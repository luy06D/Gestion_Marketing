import express from 'express';
import proyectoControllers from '../controllers/proyectos.controllers.js';
const router = express.Router();

router
    .get('/', proyectoControllers.getProjects)
    .post('/', proyectoControllers.createProyect);

export default router; 