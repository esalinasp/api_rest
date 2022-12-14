const mongoose = require("mongoose");
const dbConnect = ()=>{
    //const DB_URI = process.env.DB_URI;
    const DB_URI = 'mongodb://localhost:27017/db_usuarios';

    mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },(err,res)=>{
        if(!err){
            console.log("Conexión Correcta");
        }
        else{
            console.log("Error de conexión");
        }
    }
    )
};

module.exports = dbConnect;