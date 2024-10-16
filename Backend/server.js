const express=require("express");
const connection=require("./db");
const bodyParser=require("body-parser");
const app=express();
const port=3001;

app.use(bodyParser.json());

//metodos
app.get('/parque-destacado',(req,res)=>{
    console.log("Solicitud para obtener parque destacado...")
    const query="select * from parque where id_parque = 3";
    connection.query(query,(error, resultado)=>{
        console.log("Parque destacado obtenido!")
        res.json(resultado);
    });
});


app.listen(port,()=>{
    console.log(`ha creado el servidor corriendo en el puerto ${port}`);
})