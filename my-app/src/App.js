import React from 'react';
import BotonBuscar from '../src/Componentes/BotonBuscar'
import InputBuscar from '../src/Componentes/InputBuscar'
import '../src/App.css'

function App() {
  return (
    <div className="App">
     <h1>Hola Mundo</h1>
     <div className="search">
          <InputBuscar/>
          <BotonBuscar/>
     </div>
    </div>
  );
}

export default App;
