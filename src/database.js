const mongoose = require('mongoose');
require('./config/config');

const URI = process.env.URLDB;

mongoose.connect(URI,{ useNewUrlParser: true})  
    .then(db => console.log('db is running'))
    .catch(err => console.log(err));


    module.exports = mongoose;

