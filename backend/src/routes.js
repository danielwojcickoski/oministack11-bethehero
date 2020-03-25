const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Desacopla o modulo de rotas do express para um nova variavel
const routes = express.Router();

//Login
routes.post('/sessions', SessionController.create);

//Listar as ongs
routes.get('/ongs', OngController.index);
//Criar uma nova ong
routes.post('/ongs', OngController.create);

//Listar os casos de uma ong
routes.get('/profile', ProfileController.index);

//Listar todos os casos
routes.get('/incidents', IncidentController.index);
//Criar um novo caso
routes.post('/incidents', IncidentController.create);
//Deleta um caso
routes.delete('/incidents/:id', IncidentController.delete);

//Exporta as rotas
module.exports = routes;