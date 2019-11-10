// eslint-disable-next-line max-classes-per-file
/* import Sequelize, { Model } from "sequelize";

class MaritalStatus extends Model {
  static init(sequelize) {
    // sequelize recebe a variável do arquivo "index.js" que guarda a conexao BD
    // chamando o metodo init da class Model
    super.init(
      {
        m_status_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        descricao: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "marital_status",
      }
    );

    return this;
  }
}

export default MaritalStatus; */




const Sequelize = require("sequelize");
const { sequelize } = require("../database/database");

const MaritalStatus = sequelize.define(
  "marital_status",
  {
    m_status_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descricao: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const MaritalStatusException = class MaritalStatusException extends Error {};

module.exports = { MaritalStatus, MaritalStatusException };

