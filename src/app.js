const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const indexRoutes = require('./routes/index.js');


// escuchar al servidor
app.set('port',process.env.PORT || 3000);

//se apuntan a las vistas
app.set('views',path.join(__dirname,'views'));

//se configura el motor de vistas
app.set('view engine','ejs');


//middleware
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//Rutas
app.use('/', indexRoutes);

app.listen(app.get('port'),() =>{
    console.log('Servidor en el puerto ', app.get('port'))
});