const Sequelize = require("sequelize");

// CRIANDO UM OBJETO DE CONEXAO \\
const connection = new Sequelize('guiapress','root','',{
   host: 'localhost',
   dialect: 'mysql' 
});

module.exports = connection;