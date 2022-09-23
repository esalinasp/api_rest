require("dotenv").config(); //* Utilizar las variables de entorno
const express = require("express");
const cors = require("cors");
const connect = require("./config/mongo.js");
const dbConnect = require("./config/mongo.js");
const app = express();

app.use(cors()); //* acceso libre y evita el error de origen cruzado
const port = process.env.PORT || 3001;

app.listen(port,()=>{

    console.log(`http://locahost:${port}`);
})

dbConnect();