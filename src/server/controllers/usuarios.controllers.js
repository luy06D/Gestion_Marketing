import Usuario from '../models/usuarios.models.js';


//OBTENER LISTA DE USUARIOS
const listarUsers = async (rep, response) =>{
    try{
        const user = await Usuario.listarUsuarios();
        response.json(user);    

    }catch(err){
        response.status(500).json({message: 'Error al obtener listado de usuarios', err});
    }
}

export default listarUsers;