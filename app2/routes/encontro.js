const express = require("express");//importando os comportamentos da lib do express, assim como foi feito no app2
const router = express.Router(); //importando os comportamentos do "roteador" gerenciado pelo express
//
const encontroController = require("../controllers/encontroController"); //importando os comportamentos do nosso controlador de pessoas
const encontroMid = require("../middlewares/encontroMiddleware"); //importando os comportamentos do nosso middleware

//roteamento para salvar clientes, ou seja, se a requisição vier com a rota  localhost:3000/person/add e o MÉTODO dela for post, cairá aqui
router.post("/",  encontroMid.teste, encontroController.saveEncontro);

//roteamento para carregar o formulário de clientes, ou seja, se a requisição vier com a rota  localhost:3000/person/form e o MÉTODO dela for GET, cairá aqui
router.get('/home', (req, res, next ) => {
    res.render('index.ejs')
});

router.get('/', (req, res, next ) => {
    res.render('encontro.ejs')
});


module.exports = router
