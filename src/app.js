const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const indexRoutes = require('./routes/index.js');
const { Mongoose } = require('mongoose');


// escuchar al servidor
app.set('port',process.env.PORT || 3000);

//se apuntan a las vistas
app.set('views',path.join(__dirname,'views'));

//se configura el motor de vistas
app.set('view engine','ejs');
// conexion a la base de datos
Mongoose.connect('mongodb+srv://jepi9990:Vwb3qD4Zrw7C7Zhm@cluster0.ladli.mongodb.net/iot?retryWrites=true&w=majority')
.then(bd => console.log('BD se conecto')).catch(err => console.log(err));

//middleware
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//Rutas
app.use('/', indexRoutes);

app.listen(app.get('port'),() =>{
    console.log('Servidor en el puerto ', app.get('port'))
});