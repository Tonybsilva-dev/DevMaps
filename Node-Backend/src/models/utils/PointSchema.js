const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
  type:{
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates:{
    type: [Number], //Logitude primeiro, depois Latitude
  },
});

module.exports = PointSchema;