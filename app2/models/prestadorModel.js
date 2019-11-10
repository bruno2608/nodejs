const Sequelize = require("sequelize");
const { sequelize } = require("../database/database");

const Prestador = sequelize.define(
  "prestador",
  {
    id_prestador: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NOMEUSR: {
      type: Sequelize.STRING,
    },
    rg: {
      type: Sequelize.STRING,
    },
    cpf: { 
      type: Sequelize.STRING,
    },
    telefone_celular: { // telefone celular
      type: Sequelize.STRING,
    },
    altura: {
        type: Sequelize.FLOAT,
    },
    peso: {
        type: Sequelize.FLOAT,
    },
    data_nascimento: { //data nascimento
        type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const PrestadorException = class PrestadorException extends Error {};

module.exports = { Prestador, PrestadorException };
