const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database");

const categoryController = require("./category/CategoryController");
const articlesController = require("./articles/ArticlesController");

const Articles = require("./articles/Articles");
const Category = require("./category/Category");

// CONFIGURANDOO VIEW ENGINE EJS PARA EXIBIR HTML \\
app.set('view engine', 'ejs');

// CONFIGURANDOO PARA ARQUIVOS STATIC IMG, CSS, JS \\
app.use(express.static('public'));

// CONFIGURANDOO BODY PARSER PARA TRABALHAR COM FORMULARIO \\
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
app.use("/", categoryController);
app.use("/", articlesController);

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso!");
})