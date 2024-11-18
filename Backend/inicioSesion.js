
// inicioSesion.js
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


app.listen(port,()=>{
    console.log(`ha creado el servidor corriendo en el puerto ${port}`);
})
