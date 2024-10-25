const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  type: { type: String, enum: ['user', 'post'], required: true }, // Type of item being searched
  text: { type: String, required: true }, // Search text
});

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;
