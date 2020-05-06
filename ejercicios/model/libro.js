const {Schema, Types, model} = require('mongoose');

const libroModelo =new Schema({
    titulo:{
        type: String,
        required: true
    }, 
    anio:{
        type: Number, 
    } 
});

const Libro = model('libro', libroModelo)

module.exports = Libro;

//autor: String,
