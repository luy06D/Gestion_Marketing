import stringConnection from "./Connection.js";

const Usuario = {
    
    // OBTENER USUARIOS
    listarUsuarios: async () => {
        const [rows] = await stringConnection.query('CALL spu_listar_user()');
        return rows[0];
    }
}

export default Usuario; 




// REGISTRAR USUARIOS 