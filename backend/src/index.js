const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//Variavel que instacia a aplicação
const app = express();

//Define quais endereçoes podem alterar a aplicação
app.use(cors());
//Isso define que todas as requisições sao feitas atravez de arquivos JSON
app.use(express.json());
//Instacia as rotas da aplicação
app.use(routes);

//Link onde sera rodado no localhost
app.listen(3333);