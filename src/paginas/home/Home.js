import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../estilos/estilos.css';

class Home extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
          <p className='inp'>
            <Link to="/paginas/cadastro"><button>Cadastro</button></Link> <br/>
          </p>
          <p className='inp'>
            <Link to="/paginas/login"><button>Login</button></Link>
          </p> 
        </div>
      )
    }
}

export default Home;