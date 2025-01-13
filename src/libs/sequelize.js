import { Sequelize } from "sequelize";
import config from "../.config/config.js";
import setupModels from "../server/models/index.js";


const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: 'mysql'
    }

);

sequelize.sync();
setupModels(sequelize);

export default sequelize;