import mssql from "mssql";

//CADENA DE CONEXION 
const connectionString = {
    server: "DESKTOP-BGJC5P3\SQLEXPRESS02",
    database: "PRUEBA",
    options: {
        trustServerCertificate: true,  
        encrypt: true,  
        trustedConnection: true,
        integratedSecurity: true  
    }
};

// FUNCION PARA TENER CONEXION CON DB 
export async function getConnection(){
    try{
        return await mssql.connect(connectionString);
    } catch(err){
        console.error(err);
    }
}

export { mssql } ;