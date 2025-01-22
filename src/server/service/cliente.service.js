import sequelize from "../../libs/sequelize.js";

class ClientesService{

    constructor() {}

    async listarClient(search){
        const result = await sequelize.query('CALL spu_filtro_clientes(:search)',
            {
                replacements: {search},
                type: sequelize.QueryTypes.RAW,
            }
        );

        return result;
    }
}

export default ClientesService;