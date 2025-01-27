import sequelize from "../../libs/sequelize.js";

class ProyectoService{

    constructor() {}

    // LISTAR PROYECTOS
    async listarProjects(){
        const result = await sequelize.query('CALL spu_listar_proyectos()');
        return result;
    }


    // REGISTRAR PROYECTO
    async registrarProyect(data) {
        const resultado = await sequelize.query(`
            CALL spu_registrar_proyecto(
                :_idcliente,
                :_nombreP,
                :_descripcion,
                :_fecha_inicio,
                :_fecha_fin
            )`, {

                replacements: {
                    _idcliente: data.idcliente,
                    _nombreP: data.nombreP,
                    _descripcion: data.descripcion,
                    _fecha_inicio: data.fecha_inicio,
                    _fecha_fin : data.fecha_fin
                }

            });
            return resultado;
    }
}

export default ProyectoService;