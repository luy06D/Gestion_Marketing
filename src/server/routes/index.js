import express from 'express';
import usuarioRouter from './usuario.routes.js';
import proyectoRouter from './proyecto.routes.js'
import clienteRouter from './cliente.routes.js'

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/usuario', usuarioRouter);
    router.use('/proyecto', proyectoRouter);
    router.use('/cliente', clienteRouter);


}

export default routerApi;