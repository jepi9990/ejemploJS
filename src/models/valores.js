const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Valor = new Schema({
    temperatura: {type: Number},
    humedad: {type: Number},
    fecha: {type: Date, default: Date.now} 
    
});
    module.exports = mongoose.model('valores', Valor); 
