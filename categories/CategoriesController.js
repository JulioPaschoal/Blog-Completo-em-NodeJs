const express = require("express");
const router = express.Router();

// ROTA DA CATEGORIA \\
router.get("/categories", (req, res) => {
    res.send("Rota de Categoria!");
});

// ROTA PARA CRIARA UMA NOVA CATEGORIA \\
router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new");
});


module.exports = router;