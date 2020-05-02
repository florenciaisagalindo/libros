const { Libro } = require('../model');
const router = require ("express").Router();


//Leer Libro
router.get('/', async function (req, res, next){
    const books = await Libro.find();
    const {autor} = req.query;
    
    let libros;
    if(autor){
       libros = await Libro.findById({autor});
    } else{
       libros = await Libro.findById();
    };
    return res.json({books});
    });
    
    router.get('/:id', async function (req, res, next){
    const {id} = req.params;
    const usuario = await Libro.findById(id);
    res.json(nuevoLibro)
     });  
    
    
    //Agrega Libro
    router.post('/', async function (req, res, next){
    const {titulo, autor, año} = req.body;
    
    const LibroExistente = books = await Libro.findOne({titulo});
    if(LibroExistente){
       res.json({message: 'Error, el libro ya existe'});
    }else{
    
    const nuevoLibro= new Libro({titulo, autor, año});
    const response = await nuevoLibro.save(); //Esta operacion es asíncrona
    res.json(response);
    }
    
 
    
    });
    // newAutor, newAño
    //, {titulo: newAutor},{año: newAño}
    //Actualizar Libro    
    router.put('/', async function (req, res, next){
    const {id, newTitulo, newAutor, newAño} = req.body;
    const response = await Libro.findByIdAndUpdate(id, {titulo: newTitulo, autor: newAutor, año: newAño});
    if(response){
       console.log(response);
       res.json({message: 'Usuario actualizado exitosamente'});
    }else{
       res.json({message: 'Usuario no encontrado o inexistente'});
    }
    });

    
    //Eliminar Libro
    router.delete('/:id', async function (req, res, next){
      const {id} = req.params;
      const response = await Libro.findByIdAndDelete(id);
       
    if(response){
       console.log(response);
       res.json({message: 'Usuario eliminado exitosamente'});
    }else{
       res.json({message: 'Usuario no encontrado o inexistente'});
    }
    });

    module.exports=router;