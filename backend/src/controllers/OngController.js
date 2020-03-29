const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  async create(request, response) {
    //Importação e desustruturação dos dados recebidos
    const { name, email, whatsapp, city, uf } = request.body;

    //Cria 4 bytes aleatorios, os converte para Hexadecimal e salva em String
    const id = generateUniqueId();

    //Insere as seguintes dados nas colunas da tabela ongs
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return response.json({ id });
  },
}