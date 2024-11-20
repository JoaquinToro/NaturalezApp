const express=require("express");
const connection=require("./db");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const port=3001;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Para generar tokens de sesión
require("dotenv").config();

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

});

app.use(cors());
app.use(bodyParser.json());



// Clave secreta para JWT 
// Obtener clave secreta de JWT
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
            const token = jwt.sign({ id: user.id_usuario, email: user.email, username: user.username }, JWT_SECRET, {
                expiresIn: "5h", // Duración del token
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

//mezclando los apis

// GET method to fetch park data



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

// Route to add a comment
app.post("/addComentario", (req, res) => {
    const { body, id_parque, username } = req.body;
  
    // Simple validation
    if (!body || !id_parque || !username) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    // Direct insert without authentication checks
    const query = `
      INSERT INTO comentario (body, date, id_usuario, id_parque)
      SELECT ?, NOW(), id_usuario, ?
      FROM usuario
      WHERE username = ?
      LIMIT 1
    `;
  
    connection.query(query, [body, id_parque, username], (error, result) => {
      if (error) {
        console.error("Error adding comment:", error);
        return res.status(500).json({ error: "Error adding comment" });
      }
  
      res.status(201).json({
        message: "Comment added successfully",
        id: result.insertId
      });
    });
  });

app.listen(port,()=>{
    console.log(`ha creado el servidor corriendo en el puerto ${port}`);
})