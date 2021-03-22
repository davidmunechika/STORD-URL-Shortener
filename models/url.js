//Libraries
const mongoose = require('mongoose');

//Schema representing URL document
const urlSchema = new mongoose.Schema({
  //Unique id for shortened URL
  slug: String,
  //Original URL
  fullURL: String,
  //Generated shortened URL
  shortURL: String,
});

module.exports = mongoose.model('url', urlSchema);
