import sequelize from "../../libs/sequelize.js";

class ProyectoService{

    constructor() {}

    // LISTAR PROYECTOS
    async listarProjects(){
        const result = await sequelize.query('CALL spu_listar_proyectos()');
        return result;
    }
}

export default ProyectoService;