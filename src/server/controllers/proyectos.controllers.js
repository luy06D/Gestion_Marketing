import ProyectoService from '../service/proyecto.service.js';
const service = new ProyectoService();

// // LISTAR PROYECTOS
const getProjects = async (req, res) => {
    try {
        const response = await service.listarProjects();
        res.json(response);
        
    } catch (err) {
        res.status(500).send({success: false, message: err.message})
        
    }
}


// LIST PROJECTS DETAILS

const getDetailsP = async(req, res) =>{
    try {
        const { idproyecto }  = req.params;
        const response = await service.getDetailsProjects(idproyecto);
        res.json(response);
        
    } catch (err) {
        res.status(500).send({success: false , message: err.message})
    } 
}

// REGISTRAR PROYECTOS
const createProyect = async (req, res) =>{
    try {
        const proyectData = req.body;
        const response = await service.registrarProyect(proyectData);

        res.status(201).json({success: true, data: response})

    } catch (error) {
        res.status(500).send({success: false, message: error.message})
        
    }
}

export default {getProjects, createProyect, getDetailsP }