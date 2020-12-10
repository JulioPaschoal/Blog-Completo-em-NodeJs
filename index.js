const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");


////////// IMPORTANDO AS ROTAS \\\\\\\\\\
const categoriesController = require("./controller/CategoriesController");
const articlesController = require("./controller/ArticlesController");


////////// IMPORTANDO OS MODEL \\\\\\\\\\
const Article = require("./model/Article");
const Category = require("./model/Category");

////////// CONFIGURANDO VIEW ENGINE \\\\\\\\\\
app.set('view engine', 'ejs');

////////// CONFIGURANDO ARQUIVOS STATIC \\\\\\\\\\
app.use(express.static('public'));
 
////////// CONFIGURANDO BODY PARSER \\\\\\\\\\
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

////////// CONFIGURANDO CONEXAO COM BANCO DE DADOS \\\\\\\\\\
connection.authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    });

////////// DIFININDO USO DAS ROTAS \\\\\\\\\\
app.use("/", categoriesController);
app.use("/", articlesController);

////////// MINHA ROTAS \\\\\\\\\\
app.get("/", (req, res) => {
    res.render("index");
});



/////////// INICIALIZANDO MEU SERVIDOR \\\\\\\\\\
app.listen(3000, () => {
    console.log("SERVIDOR ONLINE");
});