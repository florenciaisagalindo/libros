const libroModelo = require('../model/libro');

const libroController={
    listarLibros: async (req, res) =>{
       const result = await libroModelo.find();
       res.json(result);
    },
    agregarLibros: async (req, res)=>{
       const {titulo, anio} = req.body;
       const libro = new libroModelo({
           titulo,
           anio
       });
       const result = await libro.save();
       return res.json(result);
    },

    buscarLibroId: async (req, res)=>{
        const {id} = req.params;
        const result = await libroModelo.findById(id);
        return res.json(result);
    },

    actualizarLibro: async (req, res)=>{
        const {id} = req.params;
        const paramsToUpdate = {...req.body};
        const result = await libroModelo.findByIdAndUpdate(id, paramsToUpdate);
        return res.json(result);
    },

    eliminarLibro: async (req, res)=> {
        const {id} = req.params;
        const result = await libroModelo.findByIdAndDelete(id);
        return res.json(result);
    },
} ;

module.exports= libroController;