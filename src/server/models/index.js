// CONFIGURACION PARA LLAMAR A TODOS LOS MODELOS 
import { Usuarios, UsuarioSchema } from "./usuarios.models.js";
import { Personas, PersonaSchema } from "./persona.models.js";

function setupModels(sequelize){
    Usuarios.init(UsuarioSchema, Usuarios.config(sequelize));
    Personas.init(PersonaSchema, Personas.config(sequelize));

}

export default setupModels; 