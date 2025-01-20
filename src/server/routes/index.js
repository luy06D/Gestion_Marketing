import express from 'express';
import usuarioRouter from './usuario.routes.js';
import proyectoRouter from './proyecto.routes.js'

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/usuario', usuarioRouter);
    router.use('/proyecto', proyectoRouter);

}

export default routerApi;