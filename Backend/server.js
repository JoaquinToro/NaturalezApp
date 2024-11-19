const express=require("express");
const connection=require("./db");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const port=3001;

app.use(cors());
app.use(bodyParser.json());

//Métodos GET
app.get('/getParques',(req,res)=>{
    console.log("Solicitud para obtener todos los parques...")
    const query="select * from parque";
    connection.query(query,(error, resultado)=>{
        if(error){
            console.log("Error al obtener los parques")
            return res.status(500).json("Error interno del servidor")
        }
        console.log("Parques obtenidas!")
        res.status(200).json(resultado);
    });
});

app.get('/getParque/:name', (req, res) => {
    const parkName = req.params.name;
    console.log(`Solicitud para obtener el parque ${parkName}...`);
    
    const parkQuery = "SELECT * FROM parque WHERE name = ?";
    connection.query(parkQuery, [parkName], (error, parkResult) => {
        if (error) {
            console.error("Error al obtener el parque:", error);
            return res.status(500).json({ message: "Error al obtener el parque." });
        }
        if (parkResult.length === 0) {
            console.log("No se encontró ningún parque con ese nombre.");
            return res.status(404).json({ message: "Parque no encontrado." });
        }

        const park = parkResult[0];
        
        const faunaQuery = `
            SELECT f.* FROM fauna f
            JOIN parque_fauna pf ON f.id_fauna = pf.id_fauna
            WHERE pf.id_parque = ?
            LIMIT 3
        `;
        connection.query(faunaQuery, [park.id_parque], (error, faunaResult) => {
            if (error) {
                console.error("Error al obtener la fauna:", error);
                return res.status(500).json({ message: "Error al obtener la fauna." });
            }

            const floraQuery = `
                SELECT f.* FROM flora f
                JOIN parque_flora pf ON f.id_flora = pf.id_flora
                WHERE pf.id_parque = ?
                LIMIT 3
            `;
            connection.query(floraQuery, [park.id_parque], (error, floraResult) => {
                if (error) {
                    console.error("Error al obtener la flora:", error);
                    return res.status(500).json({ message: "Error al obtener la flora." });
                }

                const result = {
                    ...park,
                    fauna: faunaResult,
                    flora: floraResult
                };

                console.log(`Parque ${parkName} encontrado con su fauna y flora!`);
                res.status(200).json(result);
            });
        });
    });
});

app.get('/getFlora',(req,res)=>{
    console.log("Solicitud para obtener todas la flora...")
    const query="select * from flora";
    connection.query(query,(error, resultado)=>{
        if(error){
            console.log("Error al obtener la flora")
            return res.status(500).json("Error interno del servidor")
        }
        console.log("Flora obtenidas!")
        res.status(200).json(resultado);
    });
});

app.get('/getFlora/:name', (req, res) => {
    const name = req.params.name;
    console.log(`Solicitud para obtener la flora ${name}...`);
    const query = "select * from flora as fl where fl.name = ?";
    connection.query(query, [name], (error, resultado) => {
        if (error) {
            console.error("Error al obtener la flora: ", error);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
        if (resultado.length === 0) {
            console.log("No se encontró ninguna flora con ese nombre.");
            return res.status(404).json({ message: "Flora no existe" });
        }
        console.log(`Flora ${name} encontrada!`);
        res.status(200).json(resultado);
    });
});

app.get('/getFauna',(req,res)=>{
    console.log("Solicitud para obtener todas la fauna...")
    const query="select * from fauna";
    connection.query(query,(error, resultado)=>{
        if(error){
            console.log("Error al obtener la fauna")
            return res.status(500).json("Error interno del servidor")
        }
        console.log("Fauna obtenidas!")
        res.status(200).json(resultado);
    });
});

app.get('/getFauna/:name', (req, res) => {
    const name = req.params.name;
    console.log(`Solicitud para obtener la fauna ${name}...`);
    const query = "select * from fauna as fa where fa.name = ?";
    connection.query(query, [name], (error, resultado) => {
        if (error) {
            console.error("Error al obtener la fauna: ", error);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
        if (resultado.length === 0) {
            console.log("No se encontró ninguna fauna con ese nombre.");
            return res.status(404).json({ message: "Fauna no existe" });
        }
        console.log(`Fauna ${name} encontrada!`);
        res.status(200).json(resultado);
    });
});

app.get('/getNoticias',(req,res)=>{
    console.log("Solicitud para obtener todas las noticias...")
    const query="select * from noticias";
    connection.query(query,(error, resultado)=>{
        if(error){
            console.log("Error al obtener las noticias")
            return res.status(500).json("Error interno del servidor")
        }
        console.log("Noticias obtenidas!")
        res.status(200).json(resultado);
    });
});
app.get('/getComentarios/:id_parque', (req, res) => {
    const id_parque = req.params.id_parque;
    console.log(`Solicitud para obtener comentarios del parque ${id_parque}...`);
    
    const query = `
        SELECT c.id_comentario, c.body, c.date, u.username
        FROM comentario c
        JOIN usuario u ON c.id_usuario = u.id_usuario
        WHERE c.id_parque = ?
        ORDER BY c.date DESC
    `;
    
    connection.query(query, [id_parque], (error, resultado) => {
        if (error) {
            console.error("Error al obtener los comentarios:", error);
            return res.status(500).json({ message: "Error al obtener los comentarios." });
        }
        console.log(`Comentarios obtenidos para el parque ${id_parque}!`);
        res.status(200).json(resultado);
    });
});

// New POST method to add a comment
app.post('/addComentario', (req, res) => {
    const { body, id_usuario, id_parque } = req.body;
    console.log(`Solicitud para agregar un comentario al parque ${id_parque}...`);
    
    const query = `
        INSERT INTO comentario (body, date, id_usuario, id_parque)
        VALUES (?, NOW(), ?, ?)
    `;
    
    connection.query(query, [body, id_usuario, id_parque], (error, resultado) => {
        if (error) {
            console.error("Error al agregar el comentario:", error);
            return res.status(500).json({ message: "Error al agregar el comentario." });
        }
        console.log(`Comentario agregado al parque ${id_parque}!`);
        res.status(201).json({ message: "Comentario agregado exitosamente.", id: resultado.insertId });
    });
});
app.get('/getNoticias/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Solicitud para obtener la noticia con id ${id}...`);
    const query = "select * from noticias as n where n.id_noticia = ?";
    connection.query(query, [id], (error, resultado) => {
        if (error) {
            console.error("Error al obtener la noticia: ", error);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
        if (resultado.length === 0) {
            console.log("No se encontró ninguna noticia con ese id.");
            return res.status(404).json({ message: "Noticia no existe" });
        }
        console.log(`Noticia con id ${id} encontrada!`);
        res.status(200).json(resultado);
    });
});

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

app.get('/buscar-cosa', (req,res)=>{
    const {name, table} = req.query;

    const allowedTables = ['parque','flora','fauna','noticias','usuarios','regiones']
    if (!allowedTables.includes(table)) {
        return res.status(400).json({ message: "Tabla no válida." });
    }
    
    console.log("Solicitud para obtener " + name + "...");
    const query =`select * from ${table} where name = ?`;
    connection.query(query,[name], (error, resultado) =>{
        if(error){
            console.log(error);
            res.status(500).json();
        }else{
            console.log(name + " encontrado!!");
            res.status(200).json(resultado);
        }
    })
})

//Métodos POST
app.post('/registroUsuario', async(req, res) => {
    const { nombre, password, email, id_region } = req.body;

    if (!nombre || ! password || ! email || !id_region ){
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const rol = "usuario" 

    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const query = `
        INSERT INTO usuario (username, password, email, rol, activo, id_region)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query(query, [nombre, hashedPassword, email, rol, 0, id_region], (err, result) => {
        if (err) {
            console.error('Error al insertar usuario:', err);
            return res.status(500).json({ error: 'Error al guardar el usuario' });
        }

        res.status(201).json({ message: 'Usuario registrado con éxito' });
    });
    }catch(error){
        console.log("Error",error);
        res.status(500).json({ error: "Error al procesar la solicitud" });
    }


//InicioSesion
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error("La clave secreta de JWT no está definida. Verifica tu archivo .env.");
}

app.post("/inicioSesion", async (req,res)=>{
    const { email, password } = req.body;

    // Validar que los datos existen
    if (!email || !password){
        return res.status(400).json({ error: 'El correo y la contraseña son obligatorios.' });
    }

    try{
        connection.query("SELECT * FROM usuario WHERE email = ?", [email], async(error, results) => {
            if (error){
                console.error("Error al consultar la base de datos:", error);
                return res.status(500).json({ message: "Error interno del servidor" });
            }

            // Verifica si se encontró un usuario
            if (results.length === 0){
                return res.status(404).json({ message: "Usuario no encontrado" });
            }

            const user = results [0];

            // Compara la contraseña ingresada con la encriptada en la base de datos
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: "Contraseña incorrecta" });
            }

            // Opcional: Genera un token JWT si todo es válido
            const token = jwt.sign({ id: user.id, email: user.email, username: user.username }, JWT_SECRET, {
                expiresIn: "1h", // Duración del token
            });

            // Responde con éxito
            res.status(200).json({
                message: "Inicio de sesión exitoso",
                token, // Enviar token si es necesario
                username: user.username,
            });
        });
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
});


app.get('/usuarioNom/:id', (req, res) => {
    const id = req.params.id; // Obtén el valor del id de los parámetros de la URL
    const query = 'SELECT username FROM usuario WHERE id = ?'; 

    connection.query(query, [id], (err, results) => { // Pasa el id como parámetro para la consulta
        if (err) {
            console.error('Error al obtener el usuario:', err);
            return res.status(500).json({ error: 'Error al obtener el usuario' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(results[0]); // Devuelve el primer resultado como un objeto JSON
        console.log("Envio de usuario:", results[0]);
    });
});

});
app.listen(port,()=>{
    console.log(`ha creado el servidor corriendo en el puerto ${port}`);
})