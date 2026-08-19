const mongoose = require("mongoose"); 

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/tvshowsdb");
        console.log("Conectado a la base de datos")
    } catch (error) {
        console.error("Error conectando con la base de datos", error.message);
    }
};

module.exports = connect;