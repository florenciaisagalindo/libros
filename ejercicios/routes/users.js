const { User } = require('../model');
const router = require ("express").Router();


//Leer usuarios
router.get('/', async function (req, res, next){
    const users = await User.find();
    const {name} = req.query;
    let usuarios;
    if(name){
       usuarios = await User.findById({name});
    } else{
       usuarios = await User.findById();
    };
    return res.json({users});
    });
    
    router.get('/:id', async function (req, res, next){
    const {id} = req.params;
    const usuario = await User.findById(id);
    res.json(usuario)
     });  
    
    
    //Agrega usuarios
    router.post('/', async function (req, res, next){
    const {name, surname, dni} = req.body;
    
    const usuarioExistente = users = await User.findOne({name});
    if(usuarioExistente){
       res.json({message: 'Error, usuario ya existente'});
    }
    
    const usuario= new User({name, surname, dni});
    const response = await usuario.save(); //Esta operacion es asíncrona
    res.json(response);
    
    
    return res.json({
        message: 'Ese usuario ya existe'
    });
    
    });
    
    //Actualizamos usuario    
    router.put('/', async function (req, res, next){
    const {id, newName} = req.body;
    const response = await User.findByIdAndUpdate(id, {name: newName});
       
    if(response){
       console.log(response);
       res.json({message: 'Usuario actualizado exitosamente'});
    }else{
       res.json({message: 'Usuario no encontrado o inexistente'});
    }
    });
    
    
    //Eliminar Usuario
    router.delete('/', async function (req, res, next){
    const {id}= req.body;
    const response = await User.findByIdAndDelete(id);
       
    if(response){
       console.log(response);
       res.json({message: 'Usuario eliminado exitosamente'});
    }else{
       res.json({message: 'Usuario no encontrado o inexistente'});
    }
    });

    module.exports=router;