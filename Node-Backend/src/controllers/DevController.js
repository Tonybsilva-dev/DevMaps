const axios = require('axios'); // Importando o axios para consumir outras Api's
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const {findConnections, sendMessage} = require('../websocket');


//index, show, store, update, destroy

module.exports = {
  // MOSTRAR
  async index(request, response){
    const devs = await Dev.find();

    return response.json(devs)
  },



  // CRIAR
  async store(request, response) {
  const { github_username, techs, level , latitude, longitude, portfolioURL, linkedIn, instagram, twitter } = request.body;

  //Verificar se ja existe os dados que estão sendo cadastrados
  let dev = await Dev.findOne({github_username});
  if(!dev){

      //Aguardar a Api retornar
  const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); //API GITHUB
  const {name = login, avatar_url, bio} = apiResponse.data; //Selecionar os dados que virão
  //console.log(apiResponse.data); //Dados da resposta
  const techsArray = parseStringAsArray(techs) // Convertendo e removendo espaços
  
  const location = {
    type: 'Point',
    coordinates: [longitude, latitude],
  };

   dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray,
    level,
    location,
    portfolioURL,
    linkedIn,
    instagram,
    twitter
  });
  //Filtrar as conexões que estão no máximo a 10 km de distância e que o novo dev tenha uma das tecnologias filtradas
  
  const sendSocketMessageTo = findConnections(
    {latitude, longitude},
    techsArray,
  )

  console.log(sendSocketMessageTo);
  sendMessage(sendSocketMessageTo, 'new-dev', dev);

  }

  //Continuar 
  return response.json(dev); //Enviando uma estrutura de dados
}
  
}