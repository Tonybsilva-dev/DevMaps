const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  level: String,
  techs: [String],
  portfolioURL: String,
  linkedIn: String,
  instagram: String,
  twitter: String,
  location: {
    type: PointSchema,
    index: '2dsphere' //Obrigatório ter um indice de longitude e Latitude
  }
});

module.exports = mongoose.model('Dev', DevSchema);