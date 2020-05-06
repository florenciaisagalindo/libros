const router = require ("express").Router();
//const rutaUsuarios = require('./users');
const rutaLibros = require('./libros')
;
// //Ruta raiz
router.get('/', function (req, res, next){
   return res.send('Hola mundo desde Express');
     });

//Otras rutas
//router.use("/users", rutaUsuarios);
router.use("/libro", rutaLibros);

module.exports = router;

















