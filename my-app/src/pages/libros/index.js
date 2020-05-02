import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style.css'
import Button from 'react-bootstrap/Button';
import FormLibros from '../../Componentes/FormLibros';


const Libros = () => {
    const [books, setLibros] = useState([]);
    const [libroUpdating, setIsUpdatingLibros] = useState(null);
    const fetchLibros= async ()=>{
        const response = await axios.get("http://localhost:8080/api/libros");
        setLibros(response.data.books);
    };

    const handleSubmit = async evt =>{
        evt.preventDefault();
        const form= evt.target;

        if(form.checkValidity()){
            const body= {
                titulo: form.titulo.value, 
                autor:form.autor.value,
                año: form.año.value
            };
          await axios.post('http://localhost:8080/api/libros', body);
          fetchLibros();
        }   
    };
    
    const handleUpdateLibro = id => async (evt) =>{
        evt.preventDefault();
        const form= evt.target;

        if(form.checkValidity()){
            const body= {
                id,
                newTitulo: form.titulo.value, 
                newAutor:form.autor.value,
                newAño: form.año.value
            };
          await axios.put('http://localhost:8080/api/libros', body);
          setIsUpdatingLibros(null);
          fetchLibros();
        }   
    };
        const modificarLibro = id => ()=>{
           setIsUpdatingLibros(id);
            
        };

        const eliminarLibro = id => async ()=>{
            const result = await axios.delete(`http://localhost:8080/api/libros/${id}`);
            console.log(result);
            fetchLibros();

        };

    const isUpdatingLibro=(id)=>
    libroUpdating === id;

    useEffect(() => {
        fetchLibros();
    }, [])

    return ( 
       <div className="libros">
           <FormLibros onSubmit ={handleSubmit}/>
           {books.map(({_id, titulo, autor, año}) =>
              <div key={_id}>
                <hr/>
            {
              isUpdatingLibro(_id) ? (
               <FormLibros 
               titulo={titulo}
               autor={autor}
               año={año}
               isUpdating={true}
               onSubmit ={handleUpdateLibro(_id)}/>
               ) : (
               <div key={_id}>
                   <p>Título: {titulo} </p>
                   <p>Autor: {autor} </p>
                   <p>Año: {año} </p>
                   <Button onClick={modificarLibro(_id)} variant="secondary">Modificar</Button>
                   <Button onClick={eliminarLibro(_id)} variant="danger">Eliminar</Button>
                </div>
                )
               }
            </div>
           )}
       </div>
     );
};
 
export default Libros;