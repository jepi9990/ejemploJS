const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Valor = new Schema({
    Desarrollador: String,
    Entregas: String,
    Distribuidora: String,
    Plataforma: String
});
module.exports = mongoose.model('distribucion', Valor); 