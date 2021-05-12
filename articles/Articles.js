const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../category/Category");

const Articles = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// UMA CATEGORIA TEM MUITOS ARTIGO \\
Category.hasMany(Articles);
// UM ARTIGO PERTENCE A UMA CATEGORIA \\
Articles.belongsTo(Category);

// SINCRONIZANDO COM O BANCO DE DADOS \\
//Articles.sync({ force: true });

module.exports = Articles;