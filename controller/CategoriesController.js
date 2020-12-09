const express = require("express");
const router = express.Router();


router.get("/categories", (req, res) => {
    res.send("ROTAS DE CATEGORIAS");
});


module.exports = router;