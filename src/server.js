import express from 'express';
import usuarioRoutes from '../src/server/routes/usuario.routes';

// MIDDLEWARES
app.use(express.json()); // PARSEAMOS EN JSON


// USAMOS LAS RUTAS 

app.use('/api/usuarios', usuarioRoutes);

// PUERTO DEL SERVIDOR 
const PORT = 5000;
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});