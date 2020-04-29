import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style.css'
import Button from 'react-bootstrap/Button';


const Libros = () => {
    const [books, setLibros] = useState([]);
    
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
                año: form.año.value,
            };
          await axios.post('http://localhost:8080/api/libros',body);
        }   
    };
        const modificarLibro = id => async ()=>{
            const result = await axios.get(`http://localhost:8080/libros/${id}`);
            console.log(result)
        }


        const eliminarLibro = id => async ()=>{
            const result = await axios.get(`http://localhost:8080/api/libros/${id}`);
            console.log(result)
        }
        
    useEffect(() => {
        fetchLibros();
    }, [])

    return ( 
       <div className="libros">
           <form onSubmit={handleSubmit}>   
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input type= "text" name="titulo" required/>
                </div>
                
                <div>
                    <label htmlFor="autor">Autor</label>
                    <input type= "text" name="autor" required/>
                </div>
                
                <div>
                    <label htmlFor="año">Año</label>
                    <input type= "number" name="año"/>
                </div>
                <Button variant="primary" type="submit">Agregar</Button>
           </form>
           {books.map(({_id, titulo, autor, año}) =>(
               <div key={_id}>
                   <hr/>
                   <p>Título: {titulo} </p>
                   <p>Autor: {autor} </p>
                   <p>Año: {año} </p>
                   <Button onClick={modificarLibro(_id)} variant="secondary">Modificar</Button>
                   <Button onClick={eliminarLibro(_id)} variant="danger">Eliminar</Button>

                </div>
           ))},
       </div>
     );
};
 
export default Libros;