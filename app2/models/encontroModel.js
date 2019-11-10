const Sequelize = require("sequelize");
const { sequelize } = require("../database/database");

const Encontro = sequelize.define(
  "encontro",
  {
    id_encontro: {
      type: Sequelize.INTEGER,
      primaryKey: false,
      autoIncrement: false,
    },
    NOMSVC: {
      type: Sequelize.STRING,
    },
    VALOR: {
      type: Sequelize.FLOAT,
    },
    DESC: {
      type: Sequelize.STRING,
    },
    DATA: {
      type: Sequelize.DATE,
    },
    tb_prestador_idprestador: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const EncontroException = class EncontroException extends Error {};

module.exports = { Encontro, EncontroException };
