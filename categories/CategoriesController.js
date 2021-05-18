const express = require("express");
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify");



// ROTA PARA LISTAR AS CATEGORIAS \\
router.get("/admin/categories", (req, res) => {
    Category.findAll().then(Category => {
        res.render("admin/categories/index", { Category: Category });
    });
});

// ROTA PARA CRIAR UMA NOVA CATEGORIA \\
router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new");
});

// ROTA PARA SALVAR CATEGORIA NO BANDO DE DADOS \\
router.post("/categories/save", (req, res) => {
    var title = req.body.title;
    if (title != undefined) {
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/");
        });
    } else {
        res.redirect("/admin/categories/new");
    }
});




module.exports = router;