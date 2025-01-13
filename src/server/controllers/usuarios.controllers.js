import UsuarioService from "../service/usuario.service.js";
const service = new UsuarioService();

// LISTAR LOS USUARIOS 
const getUsers = async (req, res) => {
    try{
        const response = await service.listarUsers();
        res.json(response);

    }catch(err){
        res.status(500).send({success: false, message: err.message});
    }
}


export default {getUsers}