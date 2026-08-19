// Importamos express
const express = require("express");

//Importamos nuestra funcion de conexion con la DB
const connect = require("./src/config/db")

//Importamos el router de las series 
const showRouter = require("./src/routes/show.routes");

//Creamos nuestro servidor express
const server = express();

//Parseamos mediante el servidor para poder trabajar con JSON
server.use(express.json());

//Nos conectamos con nuestro "Clauster"  ed MongoDB local
connect();

//RUTAS
server.use("/shows", showRouter);

// definimos una ruta no encontrada
server.use((req,res) => {
    return res.status(404).json({message: "Ruta no encontrada"});
});

// Levantamos el servidor en un puerto local
server.listen(8080, () => {
    console.log("Servidor levantado en http://localhost:8080");
});