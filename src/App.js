
import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './paginas/auth/login';
import Pagina1 from './paginas/auth/pagina1';
import CrearCuenta from './paginas/auth/crearCuenta';
import Home from './paginas/home';
import ProyectosAdmin from './paginas/dulces/ProyectosAdmin';

function App() {
  return (
   <Fragment>
    <Router>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/pagina1" exact element ={<Pagina1/>}/>
        <Route path='/crear-cuenta' exact element={<CrearCuenta/>}/>
        <Route path='/home' exact element={<Home/>}/>   
        <Route path='/proyectos-admin' exact element={<ProyectosAdmin/>}/>      
      </Routes>
    </Router>
   </Fragment>
  );
}

export default App;
