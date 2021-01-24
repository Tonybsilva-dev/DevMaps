const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

  async index(request, response){
    //console.log(request.query);
    const { latitude, longitude, techs } = request.query;
    const techsArray = parseStringAsArray(techs);
    console.log(techsArray);

    //Lista de Devs
    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location:{
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000, // Passado em metros
        }
      }
    });
    return response.json({ devs });
  }
}