const sequelize = require("../database/database");
const express = require("express");
// const cadastrar = require("..routes/cadastrar")

const encontroController = require("../controllers/encontroController");
const home = require("../routes/home")
module.exports ={async  teste(req,res, next) {
    console.log("Seu request passou no middleware")
    next(),
    res.render(home)
}};