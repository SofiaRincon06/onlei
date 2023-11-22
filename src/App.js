
import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './paginas/auth/login';
import Pagina1 from './paginas/auth/pagina1';
import CrearCuenta from './paginas/auth/crearCuenta';
import Home from './paginas/home';
import ProyectosAdmin from './paginas/dulces/ProyectosAdmin';
import Productosdul from './paginas/dulces/productosdul';

function App() {
  return (
   <Fragment>
    <Router>
      <Routes>
        <Route path="/" exact element={<Pagina1/>}/>
        <Route path="/login" exact element ={<Login/>}/>
        <Route path='/crear-cuenta' exact element={<CrearCuenta/>}/>
        <Route path='/home' exact element={<Home/>}/>   
        <Route path='/proyectos-admin' exact element={<ProyectosAdmin/>}/>      
        <Route path='/produc'exact element={<Productosdul/>}/>
             
      </Routes>
    </Router>
   </Fragment>
  );
}

export default App;
