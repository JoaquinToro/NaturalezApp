const mysql=require("mysql2");
const dotenv = require('dotenv')
dotenv.config()

const connection=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
});

connection.connect((error)=>{
    if(error) {
        console.log("No se conecto a la DB");
        return;
    }
    console.log("conectada a la DB");
});
module.exports=connection;