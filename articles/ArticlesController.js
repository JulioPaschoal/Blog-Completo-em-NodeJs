const express = require("express");
const router = express.Router();

// ROTA DE  ARTIGOS \\
router.get("/articles", (req, res) => {
    res.send("Rota de Artigod!");
});

// ROTA PARA CRIARA UMA NOVA CATEGORIA \\
router.get("/admin/articles/new", (req, res) => {
    res.send("Rota para criar um novo artigo!");
});

module.exports = router; 