// const person = require('../models/pessoaModel')
// const naturalPerson = require('../models/naturalPersonModel')
// const maritalStatus = require('../models/maritalStatusModel')
// const matrimonialRegimes = require('../models/matrimonialRegimesModel')
// const functions = require('../utils/functions')


// module.exports ={ async  savePerson(req, res) {

//     console.log("Seu request chegou no controller")
//     console.log(req.body.name)
//     console.log(req.body.cpfcnpj)
//     console.log(req.body.rg)
//     console.log(req.body.birth_date)
    
//     //aqui, criamos as constantes com os dados vindos do formulário e geramos a data de input 
//     const name =req.body.name;
//     const cpf = req.body.cpfcnpj;
//     const rg = req.body.rg;
//     const birth_date = req.body.birth_date;
//     const input_date = await functions.getDate();
    
//     //nesse trecho criamos  a pessoa, capturamos o id e colocamos em uma constante e depois pegamos os dados de marital_status solteiro
//     const Person = await person.person.create({ input_date });
//     const person_id = Person.person_id
//     const  MaritalStatus = await maritalStatus.MaritalStatus.findOne({ where: {descricao: 'Single'} })
    
//     const m_status_id = MaritalStatus.m_status_id
//     const regime_id = null;
//     //aqui criamos a nossa natural person com todos os dados recebidos
//     const NaturalPerson = await naturalPerson.naturalPerson.create({ name, cpf, rg, birth_date,person_id, m_status_id, regime_id});
    
// }};