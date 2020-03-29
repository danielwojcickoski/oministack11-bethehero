const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

//Variavel que instacia a aplicação
const app = express();

//Define quais endereçoes podem alterar a aplicação
app.use(cors());
//Isso define que todas as requisições sao feitas atravez de arquivos JSON
app.use(express.json());

app.use(routes);
app.use(errors());

module.exports = app;