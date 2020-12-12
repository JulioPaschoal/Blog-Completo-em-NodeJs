const express = require("express");
const router = express.Router();

router.get("/categories", (req, res) => {
    res.send("ROTA CATEGORIES")
});

router.get("/admin/categories/new", (req, res) => {
    res.send("ROTA PARA CRIAR UM NOVA CATEGORIA!")
});


module.exports = router;