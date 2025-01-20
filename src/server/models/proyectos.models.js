import {Model, DataTypes} from 'sequelize';

const PROJECT_TABLE = 'PROYECTOS'

class Proyectos extends Model{
    static config(sequelize){
        return{
            sequelize,
            tablename: PROJECT_TABLE,
            modelName: 'proyectos',
            timestamps: false
        }
    }
}

const ProyectoSchema = {

    idproyecto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER

    },

    idcliente: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'idcliente',
        references: {
            model: 'PERSONAS',
            key: 'idcliente'
        }
    },

    nombreP: {
        allowNull: false,
        type: DataTypes.STRING(50),
        field: 'nombreP',
        unique: true
    },

    descripcion: {
        allowNull: false,
        type: DataTypes.STRING(200),
        field: 'descripcion',
    },

    fechaInicio: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'fecha_inicio'
    },

    fechaFin: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'fecha_fin'
    },

    estadoProject: {
        allowNull: false,
        type: DataTypes.STRING(15),
        field: 'estado_project',
    },

    estadoDel: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'estado_del',
    }
    

}

export {Proyectos, ProyectoSchema}
