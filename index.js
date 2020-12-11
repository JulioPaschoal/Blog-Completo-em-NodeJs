const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./.git")

////////// CONFIGURANDO VIEW ENGINE \\\\\\\\\\
app.set('view engine', 'ejs');

////////// CONFIGURANDO DE ARQUIVOS STATIC \\\\\\\\\\
app.use(express.static('public'));

////////// CONFIGURANDO BODY PARSER\\\\\\\\\\
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render("index")
});



////////// INICIALIZANDO SERVIDOR \\\\\\\\\\
app.listen(3000, () => {
    console.log("SERVIDOR ONLINE");
}); 