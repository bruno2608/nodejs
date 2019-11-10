// eslint-disable-next-line max-classes-per-file
/* import Sequelize, { Model } from "sequelize";

class NaturalPerson extends Model {
  static init(sequelize) {
    // sequelize recebe a variável do arquivo "index.js" que guarda a conexao BD
    // chamando o metodo init da class Model
    super.init(
      {
        np_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
        },
        rg: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        cpf: {
          type: Sequelize.STRING,
        },
        birth_date: {
          type: Sequelize.STRING,
        },
        person_id: {
          type: Sequelize.INTEGER,
        },
        m_status_id: {
          type: Sequelize.INTEGER,
        },
        regime_id: {
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "natural_person",
      }
    );

    return this;
  }

  static associate(models) {
    // o "as" serve para mostrar o nome do campo que aparecerá na resposta de req
    this.belongsTo(models.Person, {
      foreignKey: "person_id",
      as: "person",
    });
    this.belongsTo(models.MaritalStatus, {
      foreignKey: "m_status_id",
      as: "marital_status",
    });
    this.belongsTo(models.MatrimonialRegimes , {
      foreignKey: "regime_id",
      as: "matrimonial_regime",
    });
  }

}

export default NaturalPerson; */






const Sequelize = require("sequelize");
const { sequelize } = require("../database/database");

const naturalPerson = sequelize.define(
  "natural_person",
  {
    np_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    rg: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    cpf: {
      type: Sequelize.STRING,
    },
    birth_date: {
      type: Sequelize.STRING,
    },
    person_id: {
      type: Sequelize.INTEGER,
    },
    m_status_id: {
      type: Sequelize.INTEGER,
    },
    regime_id: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const NaturalPersonException = class NaturalPersonException extends Error {};

module.exports = { naturalPerson, NaturalPersonException };
