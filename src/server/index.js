import {getConnection, mssql } from './models/connectionSQL_server.js';

const getUser = async () =>{
    try{
        const pool = await getConnection();
        const result = await pool.request().query("SELECT * FROM users");
        console.log(result);

    }catch(err){
        console.error(err);
    }
};

getUser();
