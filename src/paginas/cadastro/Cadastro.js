import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import '../estilos/estilos.css';

class Cadastro extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",
            nascimento: "",
            mensagem: "",
            dados:[]
        }
        this.inserir = this.inserir.bind(this);
    }

    inserir(){
        firebase.firestore().collection("pessoa").add({
            email: this.state.email,
            senha: this.state.senha,
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            nascimento: this.state.nascimento
        });
        this.state.mensagem = "Cadatro realizado com sucesso"; 
    }
  
    render(){
        return(
          <div>
              <label className='lbl'>E-mail:</label><br/>
              <input className='inp' type="text" onChange={(e) => this.setState({email: e.target.value})}/><br/>
              <label className='lbl'>Senha:</label><br/>
              <input className='inp' type="password" placeholder="Senha" onChange={(e) => this.setState({senha: e.target.value})}/><br/>
              <label className='lbl'>Nome:</label><br/>
              <input className='inp' type="text" onChange={(e) => this.setState({nome: e.target.value})}/><br/>
              <label className='lbl'>Sobrenome:</label><br/>
              <input className='inp' type="text" onChange={(e) => this.setState({sobrenome: e.target.value})}/><br/>
              <label className='lbl'>Data de nascimento:</label><br/>
              <input className='inp' type="text" onChange={(e) => this.setState({nascimento: e.target.value})}/><br/>
              <button className='btn' onClick={this.inserir}>Cadastrar</button><br/>
              <label className='lbl'>{this.state.mensagem}</label>
              <p className='lnk'>
                <Link to="/">Voltar</Link>
              </p>
          </div>
        )
    }
}

export default Cadastro;
