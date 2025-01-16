import sequelize from "../../libs/sequelize.js";

class UsuarioService{

    constructor() {}

    async listarUsers(){
        const result = await sequelize.query('CALL spu_listar_user()');
        return result;
    }

    async registrarUsers(data) {

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
                        _img_perfil: data.img_perfil || null
                    }
                }
            );
            return resultado;
    }











}

export default UsuarioService;