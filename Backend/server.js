const express=require("express");
const connection=require("./db");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const port=3001;

app.use(cors());
app.use(bodyParser.json());

//Métodos GET
app.get('/getParques',(req,res)=>{
    console.log("Solicitud para obtener todos los parques...")
    const query="select * from parque";
    connection.query(query,(error, resultado)=>{
        console.log("Parque destacado obtenido!")
        res.json(resultado);
    });
});

app.get('/getNoticias',(req,res)=>{
    console.log("Solicitud para obtener todas las noticias...")
    const query="select * from noticias";
    connection.query(query,(error, resultado)=>{
        console.log("Noticias obtenidas!")
        res.json(resultado);
    });
});

app.get('/getNoticias/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Solicitud para obtener la noticia con id ${id}...`);
    const query = "SELECT * FROM noticias WHERE id_noticia = ?";
    connection.query(query, [id], (error, resultado) => {
        if (error) {
            console.error("Error al obtener la noticia:", error);
            return res.status(500).json({ message: "Error al obtener la noticia." });
        }
        if (resultado.length === 0) {
            console.log("No se encontró ninguna noticia con ese id.");
            return res.status(404).json({ message: "Noticia no encontrada." });
        }
        console.log(`Noticia con id ${id} encontrada!`);
        res.status(200).json(resultado);
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