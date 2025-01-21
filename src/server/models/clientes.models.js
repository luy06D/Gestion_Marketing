import { fieldset } from 'framer-motion/client';
import {Model, DataTypes} from 'sequelize';

const CLIENT_TABLE = 'CLIENTES'

class Clientes extends Model {
    static config(sequelize){
        return{
            sequelize,
            tableName: CLIENT_TABLE,
            modelName: 'clientes',
            timestamps: false 
        }
    }
}


const ClienteSchema = {
    idcliente: {
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    idpersona: {
        allownull: false,
        type: DataTypes.INTEGER,
        field: 'idpersona',
        references: {
            model: 'PERSONAS',
            key: 'idpersona'
        }
    },
    
    industria: {
        allownull: false,
        type: DataTypes.STRING(30),
        field: 'industria'
    },

    contactoPrincipal: {
        allownull: false,
        type: DataTypes.CHAR(9),
        field: 'contacto_principal',
        unique: true
    }



}

export {Clientes, ClienteSchema};
