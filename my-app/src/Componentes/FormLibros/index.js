import React from 'react';
import Button from 'react-bootstrap/Button';

const FormLibros = ({onSubmit, titulo = '', autor= '', año= '', isUpdating= false}) =>  ( 

    <form onSubmit={onSubmit}>   
    <div>
        <label htmlFor="titulo">Título</label>
        <input defaultValue ={titulo} type= "text" name="titulo" required/>
    </div>
    
    <div>
        <label htmlFor="autor">Autor</label>
        <input defaultValue ={autor} type= "text" name="autor" required/>
    </div>
    
    <div>
        <label htmlFor="año">Año</label>
        <input defaultValue ={año} type= "number" name="año"/>
    </div>
    <Button variant="primary" type="submit">{isUpdating ? 'Actualizar': 'Agregar'}Libro</Button>
</form>
     );

 
export default FormLibros;