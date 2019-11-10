const Prestador = require('../models/prestadorModel')
const functions = require('../utils/functions')


module.exports ={ async  savePrestador(req, res) {

    console.log(req.body)
    console.log("Seu request chegou no controller")
    // console.log(req.body.NOMUSR)
    console.log(req.body.rg)
    // console.log(req.body.CPF)
    console.log(req.body.telefone_celular)
    console.log(req.body.altura)
    console.log(req.body.peso)
    console.log(req.body.data_nascimento)
        
    //aqui, criamos as constantes com os dados vindos do formulário e geramos a data de input 
    const NOME =req.body.NOMUSR;
    const rg =req.body.rg;
     const CPF =req.body.CPF;
    const telefone_celular =req.body.telefone_celular;
    const altura =req.body.altura;
    const peso =req.body.peso;
    const data_nascimento = req.body.data_nascimento;

    //nesse trecho criamos  a pessoa, capturamos o id e colocamos em uma constante e depois pegamos os dados de marital_status solteiro
    const Grava_Prestador = await Prestador.prestador.create(
        {   
         NOME,
          rg, 
          CPF,
           telefone_celular, altura, peso, data_nascimento
         }
    );
}};