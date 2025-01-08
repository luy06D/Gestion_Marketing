const Usuario = require('../models/usuarios.models')

//OBTENER LISTA DE USUARIOS
exports.listarUsers = async (rep, response) =>{
    try{
        const user = await Usuario.listarUsuarios();
        response.json(user);    

    }catch(err){
        response.status(500).json({message: 'Error al obtener listado de usuarios', err});
    }
}