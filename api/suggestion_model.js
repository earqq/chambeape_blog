var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let SuggestionSchema = new mongoose.Schema({
    description: String, 
    votes:Number,
    email:String
  });
module.exports = mongoose.model('suggestion', SuggestionSchema);          