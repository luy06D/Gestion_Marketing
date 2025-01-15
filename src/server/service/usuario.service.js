import sequelize from "../../libs/sequelize.js";

class UsuarioService{

    constructor() {}

    async listarUsers(){
        const result = await sequelize.query('CALL spu_listar_user()');
        return result;
    }

    async registrarUsers(data) {
        try {
            // Verificamos que todos los datos necesarios estén presentes
            if (!data.nombre || !data.apellido || !data.doc_identidad || !data.email || 
                !data.user_name || !data.password_usu || !data.nivel_acceso || !data.rol) {
                throw new Error("Faltan datos requeridos");
            }

            const resultado = await sequelize.query(
                `CALL spu_registro_user(
                    :_nombre,
                    :_apellido,
                    :_doc_identidad,
                    :_email,
                    :_user_name,
                    :_password_usu,
                    :_nivel_acceso,
                    :_rol,
                    :_img_perfil)`,
                {
                    replacements: {
                        _nombre: data.nombre,
                        _apellido: data.apellido,
                        _doc_identidad: data.doc_identidad,
                        _email: data.email,
                        _user_name: data.user_name,
                        _password_usu: data.password_usu,
                        _nivel_acceso: data.nivel_acceso,
                        _rol: data.rol,
                        _img_perfil: data.img_perfil || null // Hacemos opcional img_perfil
                    }
                }
            );

            return {
                success: true,
                message: "Usuario registrado correctamente",
                data: resultado
            };

        } catch (error) {
            console.log("Error detallado:", error);
            return {
                success: false,
                message: error.message,
                error: error
            };
        }
    }


}

export default UsuarioService;