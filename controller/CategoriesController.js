const express = require("express");
const router = express.Router();
const Category = require("../model/Category");
const slugify = require("slugify");


////////// ROTA DO FORMULARIO DE CADASTRO \\\\\\\\\\
router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new")
});


////////// SALVANDO DADOS NO BANCO \\\\\\\\\\
router.post("/categories/save", (req, res) => {
    var title = req.body.title;
    if (title != undefined) {
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/")
        })
    } else {
        res.redirect("/admin/categories/new");
    }
});


////////// LISTANDO DADOS DE CATEGORIA \\\\\\\\\\
router.get("/admin/categories", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/categories/index", {
            categories: categories
        });
    });
});


module.exports = router;