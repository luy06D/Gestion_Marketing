import express from 'express';
import usuarioRouter from './usuario.routes.js';

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/usuario', usuarioRouter);

}

export default routerApi;