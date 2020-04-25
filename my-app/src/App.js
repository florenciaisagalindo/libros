import React from 'react';
import NavBar from './Componentes/NavBar.js';
import BotonBuscar from '../src/Componentes/BotonBuscar';
import InputBuscar from '../src/Componentes/InputBuscar';
import Footer from '../src/Componentes/Footer'
import '../src/App.css'
//imr y sfc.. despues borrar

function App() {
  return (
    <div className="App">
      <NavBar/>
     <div className="search">
          <InputBuscar/>
          <BotonBuscar/>
     </div>
      <Footer/>
    </div>
  );
}

export default App;
