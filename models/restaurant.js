const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

// restaurant.js
const RestaurantSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});
RestaurantSchema.index({ location: '2dsphere' });// DIce a MongoDB que el campo location lo tiene que hacer con coordenadas
// en una esfera 2D

module.exports = mongoose.model('Restaurant', RestaurantSchema);
