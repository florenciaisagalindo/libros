const mongoose = require('mongoose');

//MONGOOSE:
const User = mongoose.model('User', { 
    name: String, 
    surname: String, 
    dni: Number });
  
//lo exportamos como obj xq dsp le amos agregando mas elementos
module.exports ={User}

//para libros usamos controllers MVC