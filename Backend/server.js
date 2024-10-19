const express=require("express");
const connection=require("./db");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const port=3001;

app.use(cors());
app.use(bodyParser.json());

//Métodos GET
app.get('/parque-destacado',(req,res)=>{
    console.log("Solicitud para obtener parque destacado...")
    const query="select * from parque";
    connection.query(query,(error, resultado)=>{
        console.log("Parque destacado obtenido!")
        res.json(resultado);
    });
});

app.get('/noticia-destacada',(req,res)=>{
    console.log("Solicitud para obtener noticia destacado...")
    const query="select * from noticias";
    connection.query(query,(error, resultado)=>{
        console.log("Noticia destacada obtenido!")
        res.json(resultado);
    });
});

//Métodos POST
app.post('/buscar-cosa', (req,res)=>{
    const {name} = req.body;
    console.log("Solicitud para obtener " + name + "...");
    const query = "select * from parque where name = ?";
    connection.query(query,name, (error, resultado) =>{
        if(error){
            console.log(error);
            res.status(500).json();
        }else{
            console.log(name + " encontrado!!");
            res.status(200).json(resultado);
        }
    })
})


app.listen(port,()=>{
    console.log(`ha creado el servidor corriendo en el puerto ${port}`);
})