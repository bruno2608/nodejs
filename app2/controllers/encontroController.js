
const encontro = require('../models/encontroModel')

module.exports ={ async  saveEncontro(req, res) {

    console.log(req.body)
    console.log("Seu request chegou no controller")
    console.log(req.body.NOMSVC)
    console.log(req.body.VALOR)
    console.log(req.body.DESC)
    console.log(req.body.DATA)
    console.log(req.body.tb_prestador_idprestador)
    
    // //aqui, criamos as constantes com os dados vindos do formulário e geramos a data de input 
    const nome =req.body.NOMSVC;
    const valor = req.body.VALOR;
    const descricao = req.body.DESC;
    const data = req.body.DATA;

    //nesse trecho criamos  a pessoa, capturamos o id e colocamos em uma constante e depois pegamos os dados de marital_status solteiro
    const Grava_Encontro = await encontro.encontro.create(
        {
            nome, valor, descricao, data
        }
    );
 
 
}};