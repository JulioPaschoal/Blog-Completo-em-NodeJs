const Sequelize = require("sequelize");
const connection = require("../database/database")
const Category = require("./Category");

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});
/////////// UM ARTIGO PERTENCE A UMA CATEGORIA \\\\\\\\\\
Article.belongsTo(Category);
/////////// UM CATEGORIA TEM MUITOS ARTIGOS \\\\\\\\\\
Category.hasMany(Article);

/////////// SINCRONIZANDO TABELA NO BANCO DE DADOS\\\\\\\\\\
// Article.sync({ force: true });

module.exports = Article;