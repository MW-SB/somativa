import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './paginas/home/Home';
import Cadastro from './paginas/cadastro/Cadastro';
import Login from './paginas/login/Login';
import '../src/paginas/estilos/estilos.css';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Home/>}/>
                <Route exact={true} path="/paginas/cadastro" element={<Cadastro/>} />
                <Route exact={true} path="/paginas/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;