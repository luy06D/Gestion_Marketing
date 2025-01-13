import sequelize from "../../libs/sequelize.js";

class UsuarioService{

    constructor() {}

    async listarUsers(){
        const [res] = await sequelize.query('CALL spu_listar_user()');
        return res;
    }


}

export default UsuarioService;