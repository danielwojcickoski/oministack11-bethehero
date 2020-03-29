const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

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
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(13),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  }),
}), OngController.create);

//Listar os casos de uma ong
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

//Listar todos os casos
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
}), IncidentController.index);
//Criar um novo caso
routes.post('/incidents', IncidentController.create);
//Deleta um caso
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
}), IncidentController.delete);

//Exporta as rotas
module.exports = routes;