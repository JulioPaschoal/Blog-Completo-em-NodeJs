const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");


//Carregando a View engine
app.set('view engine', 'ejs');

//Arquivos Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DATABASE
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    });

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, () => {
    console.log("O Servidor está rodando!");
});