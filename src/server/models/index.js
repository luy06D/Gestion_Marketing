// CONFIGURACION PARA LLAMAR A TODOS LOS MODELOS 
import { Usuarios, UsuarioSchema } from "./usuarios.models.js";

function setupModels(sequelize){
    Usuarios.init(UsuarioSchema, Usuarios.config(sequelize));

}

export default setupModels; 