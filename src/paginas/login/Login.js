import React, {Component} from 'react';
import firebase from '../../Firebase';
import '../estilos/estilos.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: ""
        }
        this.acessar = this.acessar.bind(this);
    }

    acessar() {
        const auth = firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
          .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = '/Pagina';
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ", " + errorMessage);
          })
    }
  
    render(){
        return(
          <div className='div'>
              <div>
                <label className='lbl'>E-mail:</label><br/>
                <input className='inp' type="text" onChange={(e) => this.setState({email: e.target.value})}/><br/>
                <label className='lbl'>Senha:</label><br/>
                <input className='inp' type="text" onChange={(e) => this.setState({email: e.target.value})}/><br/>
                <button className='btn' onClick={this.acessar}>Acessar</button><br/><br/>
              </div>
          </div>
        )
    }
}

export default Login;
