import {Model, DataTypes} from 'sequelize';

const PERSONS_TABLE = 'PERSONAS'

class Personas extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: PERSONS_TABLE,
            modelName: 'personas',
            timestamps: false 
        }
    }
}

const PersonaSchema = {
    idpersona: {
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    nombre:{
        allownull: false,
        type: DataTypes.STRING(30),
        field: 'nombre'
    },

    apellido:{
        allownull: false,
        type: DataTypes.STRING(30),
        field: 'apellido'
    },

    docIdentidad: {
        allownull: false,
        type: DataTypes.CHAR(8),
        field: 'doc_identidad',
        unique: true
    },

    email: {
        allownull: true,
        type: DataTypes.STRING(50),
        field: 'email',
        unique: true
    }

}


export {Personas, PersonaSchema}