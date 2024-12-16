import mysql2 from "mysql2";

//CADENA DE CONEXION 
const stringConnection = mysql2.createConnection({
host: 'localhost',
database: 'Gestion_mark',
user: 'root', 
password: '060903'
});

stringConnection.connect( function(err){
    if(err){
        throw err;
    }else{
        console.log("CONEXION EXITOSA");
    }
});



stringConnection.end();