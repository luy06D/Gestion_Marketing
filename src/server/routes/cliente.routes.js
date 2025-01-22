import express from 'express';
import clientesControllers from '../controllers/clientes.controllers.js';
const router = express.Router();

router 
    .get('/', clientesControllers.filterClient);

export default router;