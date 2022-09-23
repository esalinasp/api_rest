const mongoose = require("mongoose");

const userScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        email:{
            type: String,
            unique: true
        },
        telefono:{
            type: Number
        },
        empresa:{
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = mongoose.model("users", userScheme);