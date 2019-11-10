const cliente = require('../models/clienteModel')
const genero = require('../models/generoModel')



module.exports ={ async  saveCliente(req, res) {

    console.log("Seu request chegou no controller")
    console.log(req.body.NOMUSR)
    console.log(req.body.NOMAPL)
    
    //aqui, criamos as constantes com os dados vindos do formulário e geramos a data de input 
    const nome =req.body.NOMUSR;
    const apelido =req.body.NOMAPL;

    //nesse trecho criamos  a pessoa, capturamos o id e colocamos em 
    //uma constante e depois pegamos os dados de genero
    const id_cliente = Cliente.id_cliente
    const  Genero = await genero.Genero.findOne({ where: {DESGEN: ''} })

    //nesse trecho criamos  a pessoa, capturamos o id e colocamos em uma constante e depois pegamos os dados de marital_status solteiro
    const Grava_Cliente = await cliente.cliente.create(
        {
            nome, apelido, id_cliente, Genero
        }
    );
}};