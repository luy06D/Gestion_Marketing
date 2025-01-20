import ProyectoService from '../service/proyecto.service.js';
const service = new ProyectoService();

// LISTAR PROYECTOS
const getProjects = async (req, res) => {
    try {
        const response = await service.listarProjects();
        res.json(response);
        
    } catch (err) {
        res.status(500).send({success: false, message: err.message})
        
    }
}

export default {getProjects}