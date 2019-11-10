const express = require("express");
const router = express.Router(); 

const prestadorController = require("../controllers/prestadorController"); 
//importando os comportamentos do nosso controlador de pessoas
const prestadorMid = require("../middlewares/prestadorMiddleware"); 
//importando os comportamentos do nosso middleware

//roteamento para salvar clientes, ou seja, se a requisição vier com a rota  localhost:3000/person/add e o MÉTODO dela for post, cairá aqui
router.post("/",  prestadorMid.teste, prestadorController.savePrestador);
// DEIXAR "/" PARA QUE QUALQUER URL QUE CHEGAR CAIA NO POST DO FORM NO ejs

//roteamento para carregar o formulário de clientes, ou seja,
// se a requisição vier com a rota  localhost:3000/person/form e o MÉTODO dela for GET, cairá aqui
router.get('/', (req, res, next ) => {
    res.render('cadastro_prestador.ejs')
});

module.exports = router
// module.exports = prestador
