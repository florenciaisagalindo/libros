const express= require('express');
const bodyParser= require('body-parser');
const morgan = require ('morgan');
const cors = require('cors');
const app= express();
const {initMongo} = require('./db');


require ('dotenv').config();
initMongo();

//Rutas de la aplicación
const router = require ('./routes');

//Conexión a Mongo DB. Esto lo modificamos para pasarlo a db/index.js
//mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}, ()=>console.log("Conectado a MongoDB"));


//Procesamiento de formularios
// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
app.use(bodyParser.json());
//cors para que me permita intercambiar info de puerto a puerto
app.use(cors());

//Registramos las rutas del proyecto

app.use('/api', router);

//Iniciar la aplicación con toda la configuración previa
//app.listen(8080, console.log("Servidor iniciado en el puerto 8080"));


app.use(morgan('combined'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Servidor iniciado en ${PORT}`));





































// //Direccionamiento - rutas  
// //Ruta raiz 
// router.get('/', function (req, res, next){
    //     return res.send('Hola Rolling desde Express');
    // });
    
    // const gatitos = [];
    // //Lee lista de gatitos
    
    // router.get('/gatitos', function (req, res, next){
        //     return res.json({gatitos});
// });

// //Agrega gatitos a la lista

// router.post('/gatitos', function (req, res, next){
//     console.log(req.body);
//     gatitos.push(req.body.name);
//     return res.json({
//         message: 'Gatito guardado ok'
//     });
// });

// //Actualiza gatitos existentes

// router.put('/gatitos', function (req, res, next){
//     const index= gatitos.indexOf(req.body.name);
//     gatitos[index]= req.body.newName;

//     return res.json({
//         message: 'Gatito actualizado ok'
//     });
// });



// //Elimina gatitos existentes
// router.delete('/gatitos', function (req, res, next){
//     const name= req.body.name;
//     const index= gatitos.indexOf(name);

//     if (index>-1){
//     gatitos.splice(index, 1);
//     return res.json({
//         message: `Gatito ${name} eliminado.`
//     });
// }
// return res.json({
//     message: `Gatito ${name} no encontrado.`
//                 });

// });


// TAREA: Crear una api que reciba nombre, apellido y dni para registro de usuario, usando POSTMAN. Sin mongoose

// //const users= []; 
// //Ruta
// router.get('/', function (req, res, next){
//          return res.send('Hola Usuarios desde Express');
//          });

//  //Leer usuarios
//  router.get('/user', function (req, res, next){
//     return res.json({users});
//     });

// //Agrega usuarios
// router.post('/user', async function (req, res, next){
//     const name= req.body.name;
//     // if(!users.includes(name)) {
//     // users.push({
//     //     name,
//     //     surname: req.body.surname,
//     //     dni: req.body.dni
//     // });

//     // return res.json({
//     //              message: 'Usuario guardado ok'
//     //          });
//     // }
//      return res.json({
//          message: 'Ese usuario ya existe'
//     });

//      });

// //Actualizamos usuario    
// router.put('/user', function (req, res, next){
//     const name= req.body.name;
// //     const index= users.findIndex(e=>e.name===name);

// //     if(index > -1){
// //         users[index].name = req.body.newName;
// //         users[index].surname = req.body.newSurname;
// //         users[index].dni = req.body.newDni;

    
// //     return res.json({
// //         message: 'Usuario actualizado ok'
// //     });
// // }
//      return res.json({
//          message: 'Usuario no encontrado'
//      });

//  });





// //Eliminar Usuario
// router.delete('/user', function (req, res, next){
//     const name= req.body.name;
//     // const index= users.findIndex(e=>e.name===name);
//     // if(index>-1){
//     //     users.splice(index,1);

//     //     return res.json({
//     //                message: `Usuario ${name} eliminado.`
//     //             });
//     //          }
//     //          return res.json({
//     //              message: `Usuario ${name} no encontrado.`
//     //                          });
            
//              });
    

