const express=require("express");
const connection=require("./db");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const port=3001;

app.use(cors());
app.use(bodyParser.json());

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

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;