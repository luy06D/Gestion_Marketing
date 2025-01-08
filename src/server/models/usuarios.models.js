import stringConnection from "./Connection";

const Usuario = {
    
    // OBTENER USUARIOS
    listarUsuarios: async () => {
        const [rows] = await stringConnection.query('CALL spu_listar_user()');
        return rows[0];
    }
}

module.exports = Usuario;




// REGISTRAR USUARIOS 