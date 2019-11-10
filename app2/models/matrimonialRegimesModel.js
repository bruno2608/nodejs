/* // eslint-disable-next-line max-classes-per-file
import Sequelize, { Model } from "sequelize";

class MatrimonialRegimes extends Model {
  static init(sequelize) {
    // sequelize recebe a variável do arquivo "index.js" que guarda a conexao BD
    // chamando o metodo init da class Model
    super.init(
      {
        regime_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        description: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        tableName: "matrimonial_regimes",
      }
    );

    return this;
  }
}

export default MatrimonialRegimes; */




const Sequelize = require("sequelize");
const { sequelize } = require("../database/database");

const MatrimonialRegimes = sequelize.define(
  "matrimonial_regimes",
  {
    regime_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const MatrimonialRegimesException = class MatrimonialRegimesException extends Error {};

module.exports = { MatrimonialRegimes, MatrimonialRegimesException };
