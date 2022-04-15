import React, {Component} from 'react';
import  Rotas from './Rotas';
import '../src/paginas/estilos/estilos.css';

function App() {
  return (
    <div className='div'>
      <h1 className='title'>SISTEMA CL</h1>
      <h2 className='title'>(Cadastro e Login)</h2>
      <div className='div2'>
        <Rotas/>
      </div>
    </div>
  )
}

export default App;
