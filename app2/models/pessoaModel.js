// // eslint-disable-next-line max-classes-per-file
// /* import Sequelize, { Model } from "sequelize";

// class Pessoa extends Model {
//   static init(sequelize) {
//     // sequelize recebe a variável do arquivo "index.js" que guarda a conexao BD
//     // chamando o metodo init da class Model
//     super.init(
//       {
//         pessoa_id: {
//           type: Sequelize.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//         },
//         input_date: {
//           type: Sequelize.STRING,
//         },
//       },
//       {
//         sequelize,
//         timestamps: false,
//         tableName: "pessoa",
//       }
//     );

//     return this;
//   }

//   static associate(models) {
//     // o "as" serve para mostrar o nome do campo que aparecerá na resposta de req
//     this.hasOne(models.Naturalpessoa, {
//       foreignKey: "pessoa_id",
//       as: "natural_pessoa",
//     });
//     this.hasOne(models.Juridicalpessoa, {
//       foreignKey: "pessoa_id",
//       as: "juridical_pessoa",
//     });
//   }
// }

// export default pessoa;
//  */




// const Sequelize = require("sequelize");
// const { sequelize } = require("../database/database");

// const pessoa = sequelize.define(
//   "pessoa",
//   {
//     id_pessoa: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     nome_pessoa: {
//       type: Sequelize.STRING,
//     },
//   },
//   {
//     timestamps: false,
//     freezeTableName: true,
//   }
// );

// const PessoaException = class PessoaException extends Error {};

// module.exports = { pessoa, PessoaException };
