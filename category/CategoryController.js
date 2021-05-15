const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify");

//ROTA ABRIR FORMULARIO DE CATEGORIA \\
router.get("/admin/category/new", (req, res) => {
    res.render("admin/category/new");
});

// ROTA PARA LISTAR AS CATEGORIAS \\
router.get("/admin/category", (req, res) => {
    Category.findAll().then(Category => {
        res.render("admin/category/index", { Category: Category });
    });
});

// ROTA DE CRIAR UMA NOVA CATEGORIA \\
router.post("/category/save", (req, res) => {
    var title = req.body.title;
    if (title != undefined) {
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/admin/category");
        });
    } else {
        res.redirect("/admin/category/new");
    }
});

// ROTA PARA DELETAR UMA CATEGORIA \\
router.post("/category/delete", (req, res) => {
    var id = req.body.id;
    if (id != undefined) {
        // VERIFICAR SE O ID È NUMERICO \\
        if (!isNaN(id)) {
            Category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/category");
            });
        } else {// SE O ID NAO FOR UM NUMERO \\
            res.redirect("/admin/category");
        }
    } else { // SE O ID FOR NULO \\
        res.redirect("/admin/category");
    }
});


// ROTA PARA EDITAR UMA CATEGORIA \\
router.get("/admin/category/edit/:id", (req, res) => {
    var id = req.params.id;
    if (isNaN(id)) {
        res.redirect("/admin/category");
    }
    Category.findByPk(id).then(Category => {
        if (Category != undefined) {
            res.render("admin/category/edit", { Category: Category });
        } else {
            res.redirect("/admin/category");
        }
    }).then(erro => {
        res.redirect("/admin/category");
    });
});

// ROTA PARA ATUALIZAR UMA CATEGORIA NO BANCO \\
router.post("/category/update", (req, res) => {
    var id = req.body.id;
    var title = req.body.title;

    Category.update({ title: title, slug: slugify(title) }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/category");
    });
});

module.exports = router;