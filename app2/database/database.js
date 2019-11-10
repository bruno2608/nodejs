const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  'db_toatoa', //nome do banco 
  'postgres', //usuario do banco
  '1234', //senha do banco
  //FK NO POSTGRESS = campo_id  varchar(80) references tabela_name (campo_id),
  
   {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 9,
      min: 0,
      idle: 10000
    }
  }
);
const { Op } = Sequelize;
module.exports = {
    sequelize,
    Op,
};