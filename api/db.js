const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/easybill_landing',{useNewUrlParser: true});

module.exports = mongoose;