const mysql=require("mysql2");

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"naturalezappdb"
});

connection.connect((error)=>{
    if(error) {
        console.log("No se conecto a la DB");
        return;
    }
    console.log("conectada a la DB");
});
module.exports=connection;