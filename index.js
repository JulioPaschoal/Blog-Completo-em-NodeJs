const express = require("express");
const app = express();
const bodyParser = require("body-parser");


//Carregando a View engine
app.set('view engine','ejs');

//Arquivos Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, () => {
console.log("O Servidor está rodando!");
});