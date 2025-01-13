import  {Model, DataTypes} from 'sequelize';

const USER_TABLE = 'USUARIOS'

class Usuarios extends Model {
    static config(sequelize){
        return{
            sequelize,
            tableName: USER_TABLE,
            modelName: 'usuarios',
            timestamps:false
        }
    }
}

const UsuarioSchema = {
    idusuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    idpersona: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'idpersona',
        references: {
            model: 'PERSONAS', // Nombre de la tabla referenciada
            key: 'idpersona' // compo referenciado
        }
    },

    userName: {
        allowNull: false,
        type: DataTypes.STRING(30),
        field: 'user_name',
        unique: true
    },

    passwordUsu: {
        allowNull: false,
        type: DataTypes.STRING(30),
        field: 'password_usu'
    },

    nivelAcceso:{
        allowNull: false,
        type: DataTypes.STRING(15),
        field: 'nivel_acceso'
    },

    rol:{
        allowNull: false,
        type: DataTypes.STRING(30),
        field: 'rol'
    },

    estado:{
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
        field: 'estado'
    },

    imgPerfil: {
        allowNull: true,
        type: DataTypes.STRING(250),
        field: 'img_perfil'
    }

}

export {Usuarios, UsuarioSchema}