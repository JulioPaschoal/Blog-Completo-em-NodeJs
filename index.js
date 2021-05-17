const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController")

const Category = require("./categories/Category");
const Article = require("./articles/Article");


// CONFIGURANDO A VIEW ENGINE \\
app.set('view engine', 'ejs');

// CONFIGURANDO ARQUIVOS STATIC \\
app.use(express.static('public'));

// CONFIGURANDO O BODY PARSER \\
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CONECTANDO AO BANDO DE DADOS \\
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })

// MINHAS ROTAS \\
app.use("/", categoriesController);
app.use("/",articlesController);


// ROTA PRINCIPAL
app.get("/", (req, res) => {
    res.render("index")
});

// INICIALIZANDO O SERVIDOR \\
app.listen(3000, () => {
    console.log("O servidor está rodando!");
});