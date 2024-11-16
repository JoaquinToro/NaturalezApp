const express=require("express");
const connection=require("./db");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const port=3001;

app.use(cors());
app.use(bodyParser.json());



app.get('/regiones', (req, res) => {
    const query = 'SELECT id_region, name FROM region'; 

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener regiones:', err);
            return res.status(500).json({ error: 'Error al obtener las regiones' });
        }
        res.json(results); // Devuelve las regiones en formato JSON
    });
});


app.post('/registroUsuario', (req, res) => {
    const { nombre, password, email, id_region } = req.body;

    if (!nombre || ! password || ! email || !id_region ){
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const rol = "usuario" 

    const query = `
        INSERT INTO usuario (username, password, email, rol, activo, id_region)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query(query, [nombre, password, email, rol, 0, id_region], (err, result) => {
        if (err) {
            console.error('Error al insertar usuario:', err);
            return res.status(500).json({ error: 'Error al guardar el usuario' });
        }

        res.status(201).json({ message: 'Usuario registrado con éxito' });
    });
});



app.listen(port,()=>{
    console.log(`ha creado el servidor corriendo en el puerto ${port}`);
})