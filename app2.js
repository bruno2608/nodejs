//criando uma constante para armazenar as funcionalidades da lib express (que gerencia nosso app)
const express = require("express"); 
//constante que tem a lib body-parser, usada para interpretar e transformar o body das requisições
const bodyParser = require("body-parser");
//constante que tem os comportamentos padrão do http (não usamos diretamente aqui)
const http = require('http');
const fs = require('fs');

//constante que tem os comportamentos do arquivo das rotas de person
const person = require("./app2/routes/person");

//constante que tem os comportamentos do arquivo das rotas de encontro
const encontro = require("./app2/routes/encontro");
//constante que tem os comportamentos do arquivo das rotas de cadastro
const cadastrar = require("./app2/routes/cadastrar");
//constante que tem os comportamentos do arquivo das rotas de cadastro_prestador
const cadastro_prestador = require("./app2/routes/cadastro_prestador");
//constante que tem os comportamentos do arquivo das rotas de cadastro_cliente
const cadastro_cliente = require("./app2/routes/cadastro_cliente");


const app = express();//constante que inicializa nosso app gerenciado pelo express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');//definindo que a lib ejs vai gerenciar a parte visual provisória do app
app.use( express.static("public"));//definindo que a lib ejs vai gerenciar a parte visual provisória do app

//definindo que as rotas de pessoa serão acessadas a partir da url localhost:3000/person as demais opções de rotas de pessoa estarão no arquivo person.js na pasta routes
//qualquer requisição, seja de post, get, etc, que chegar com a url localhost:3000/person será redirecionada para o arquivo person.js
// app.use("/person", person); 
app.get("/", (req, res, next ) => {
    res.render('index.ejs')
});
    
//DEFINE ROTA DE CADASTRO DE ENCOTROS
//definindo que as rotas de pessoa serão acessadas a partir da url localhost:3000/encontro
//as demais opções de rotas de pessoa estarão no arquivo person.js na pasta routes
app.use("/encontro", encontro);
app.get("/encontro", (req, res, next ) => {
    res.render('encontro.ejs')
});

//DEFINE ROTA DE CADASTRO
app.use("/cadastrar", cadastrar);
app.get("/cadastrar", (req, res, next ) => {
    res.render('cadastro.ejs')
});

//DEFINE ROTA DE CADASTRO DE PRESTADORES DE SERVIÇOS
app.use("/cadastro_prestador", cadastro_prestador);
app.get("/cadastro_prestador", (req, res, next ) => {
    res.render('cadastro_prestador.ejs')
});

//DEFINE ROTA DE CADASTRO DE CLIENTES
app.use("/cadastro_cliente", cadastro_cliente);
app.get("/cadastro_cliente", (req, res, next ) => {
    res.render('cadastro_cliente.ejs')
});

//DEFINE PORTA 3000 DA LOCALHOST
app.listen(3000);
