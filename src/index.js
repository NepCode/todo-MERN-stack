// Requires
require('./config/config');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose} = require('./database');

const app = express();


//settings
app.set('port',process.env.PORT);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/tasks',require('./routes/task.routes'));

//static files
app.use(express.static(path.join(__dirname,'public')));
//console.log(path.join(__dirname,'public'));


  // starting server
app.listen(app.get('port'), () => {
    //console.log('server on port 3000: \x1b[32m%s\x1b[0m', 'online');
    console.log(`server on port ${app.get('port')}`);
});

