const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, body: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Category.hasMany(Article); // UMA CATEGORIA TEM MUITOS ARTIGOS \\
Article.belongsTo(Category); // UMU ARTIGO PERTECE A UMA CATEGORIA \\

//Article.sync({ force: true });

module.exports = Article;