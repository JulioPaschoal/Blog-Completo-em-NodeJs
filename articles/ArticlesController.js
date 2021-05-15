const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Category = require("../category/Category");
const Article = require("./Articles");
const slugify = require("slugify");

router.get("/admin/articles", (req, res) => {
    Article.findAll({
        include:[{model:Category, required: true}]
    }).then(Article => {
        res.render("admin/articles/index", { Article: Article });
    });
});

// ROTA PARA CRIAR UM NOVO ARTIGO \\
router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then(Category => {
        res.render("admin/articles/new", { Category: Category });
    });
});

// ROTA PARA SALVAR UM NOVO ARTIGO NO BANCO
router.post("/articles/save", (req, res) => {
    var title = req.body.title;
    var body = req.body.body;
    var Category = req.body.Category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: Category

    }).then(() => {
        res.redirect("/admin/articles")
    });


});


module.exports = router;