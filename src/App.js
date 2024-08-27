import React from 'react';
import './App.css';
import { Nav, Navegacao } from './Style/style';
import { Link } from 'react-router-dom';
import Rotas from './routes/router';


function App() {
  return (
    <div>
      <Navegacao>

        <Link to="/" className='link'>
          <Nav className='Navegacao'>Inicio</Nav>
        </Link>

        <Link to="/SobreNos" className='link'>
          <Nav className='Navegacao'>Sobre Nós</Nav>
        </Link>
       
        <Link to="/Pets" className='link'>
          <Nav className='Navegacao'>Pets</Nav>
        </Link>

        <Link to="/Contato" className='link'>
          <Nav className='Navegacao'>Contato</Nav>
        </Link>

      </Navegacao>

  
      <Rotas /> 
    </div>
  );
}

export default App;
