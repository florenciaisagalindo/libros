const mongoose = require('mongoose');

//MONGOOSE:
const User = mongoose.model('User', { 
    name: String, 
    surname: String, 
    dni: Number });
  
 const Libro = mongoose.model('Libro',{
     titulo: String,
     autor: String,
     año: Number
})
//lo exportamos como obj xq dsp le amos agregando mas elementos
module.exports ={User, Libro}