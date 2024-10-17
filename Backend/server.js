const express=require("express");
const connection=require("./db");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const port=3001;
app.use(cors());
app.use(bodyParser.json());

//metodos
app.get('/parque-destacado',(req,res)=>{
    console.log("Solicitud para obtener parque destacado...")
    const query="select * from parque";
    connection.query(query,(error, resultado)=>{
        console.log("Parque destacado obtenido!")
        res.json(resultado);
    });
});


app.listen(port,()=>{
    console.log(`ha creado el servidor corriendo en el puerto ${port}`);
})