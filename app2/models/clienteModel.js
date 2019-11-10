const Sequelize = require("sequelize");
const { sequelize } = require("../database/database");

const Cliente = sequelize.define(
  "cliente",
  {
    id_cliente: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_pessoa: { //id da tabela pessoa
      type: Sequelize.INTEGER
    },
    id_usuario: { //id da tabela usuario
      type: Sequelize.INTEGER
    },
    nome_apelido: { //nome do apelido
      type: Sequelize.STRING
    },
    cpf: {
      type: Sequelize.STRING
    }
  },
   {
     timestamps: false,
     freezeTableName: true,
   }
);

const ClienteException = class ClienteException extends Error {};

module.exports = { Cliente, ClienteException };
