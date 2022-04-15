import React, {Component} from 'react';
import firebase from "../../Firebase";
import '../estilos/estilos.css';

class Pagina extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            nome: "",
            sobrenome: "",
            nascimento: "",
            dados:[]
        }
        this.inserir = this.inserir.bind(this);
    }

    exibir(){
        firebase.firestore().collection("usuario").get().then((retorno) => {
          var state = this.state;
          retorno.forEach((item) => {
            state.dados.push({
              id: item.id,
              email: item.data().email,
              nome: item.data().nome,
              sobrenome: item.data().sobrenome,
              nascimento: item.data().nascimento
            });
          });
          this.setState(state);
        });
    }
  
    render(){
        return(
          <div className='div'>
            <ol type='none'>
                <li>Email: {this.state.dados.email}</li>
                <li>Nome: {this.state.dados.nome}</li>
                <li>Sobrenome: {this.state.dados.sobrenome}</li>
                <li>Data de nascimento: {this.state.dados.nascimento}</li>
            </ol>
          </div>
        )
    }
}

export default Pagina;
