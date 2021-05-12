const { Router } = require("express");
const express = require("express");
const router = express.Router();

router.get("/category", (req, res) => {
    res.send("Rota de Categoria")
});

router.get("/admin/category/new", (req, res) => {
    res.render("admin/category/new");
});

module.exports = router;