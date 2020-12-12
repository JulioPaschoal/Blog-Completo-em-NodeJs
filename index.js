const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

////////// CARREGANDO MEUS CONTROLLER \\\\\\\\\\
const categoriesController = require("./controller/CategoriesController");
const articlesController = require("./controller/ArticlesController");

////////// CONFIGURANDO VIEW ENGINE \\\\\\\\\\
app.set('view engine', 'ejs');

////////// CONFIGURANDO DE ARQUIVOS STATIC \\\\\\\\\\
app.use(express.static('public'));

////////// CONFIGURANDO BODY PARSER\\\\\\\\\\
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


////////// CONECTANDO AO BANCO DE DADOS \\\\\\\\\\
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })

////////// USANDO ROTAS DO COTROLLER \\\\\\\\\\
app.use("/", categoriesController);
app.use("/", articlesController);

////////// CONFIGURANDO MINHAS ROTAS \\\\\\\\\\
app.get('/', (req, res) => {
    res.render("index")
});




////////// INICIALIZANDO SERVIDOR \\\\\\\\\\
app.listen(3000, () => {
    console.log("O servidor está rodando!")
})