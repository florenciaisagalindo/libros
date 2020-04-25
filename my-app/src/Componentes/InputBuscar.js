import React, {Fragment} from 'react';
import Form from 'react-bootstrap/Form'
import './Estilos/InputBuscar.css'


const InputBuscar = () => {
    return ( 
            <Fragment>
                <Form className="input-buscar">
                     <Form.Control type="text" placeholder="Ingresá un Título" />
                </Form>
            </Fragment>
     );
}
 
export default InputBuscar;