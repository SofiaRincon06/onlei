
import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './paginas/auth/login';
import Pagina1 from './paginas/auth/pagina1';
import CrearCuenta from './paginas/auth/crearCuenta';
import Home from './paginas/home';
import Productosdul from './paginas/dulces/productosdul';
import HomeC from "./paginas/homeC";
import CrearDulce from './paginas/dulces/CrearDulce';
import EditarDulce from './paginas/dulces/EditarDulce';
import Chocos from './paginas/dulces/Chocos';
import Are from './paginas/dulces/Are';
import Tipi from './paginas/dulces/Tipi';
import CrearPedido from './paginas/dulces/CrearPedido';
import ListarDulce from './paginas/dulces/ListarDulce';
import ListarPedi from './paginas/dulces/ListarPedi';
import ListPeA from './paginas/dulces/ListPeA';
import Arch from './paginas/auth/Arch';
import Carrito from './paginas/auth/Carrito'

function App() {
  return (
   <Fragment>
    <Router>
      <Routes>
        <Route path="/" exact element={<Pagina1/>}/>
        <Route path="/login" exact element ={<Login/>}/>
        <Route path='/crear-cuenta' exact element={<CrearCuenta/>}/>
        <Route path='/home' exact element={<Home/>}/>  
        <Route path='/homeC' exact element={<HomeC/>}/>       
        <Route path='/produc'exact element={<Productosdul/>}/> 
        <Route path='/crearDulce'exact element={<CrearDulce/>}/> 
        <Route path='/editarDulce/:id'exact element={<EditarDulce />}/>
        <Route path='/choco'exact element={<Chocos />}/>
        <Route path='/are'exact element={<Are />}/>
        <Route path='/tip' exact element={<Tipi/>}/>
        <Route path='/crea-ped' exact element={<CrearPedido/>}/>
        <Route path='/ver-du' exact element={<ListarDulce/>}/>
        <Route path='/ver-pe' exact element={<ListarPedi/>}/>
        <Route path='/verPe-Ad' exact element={<ListPeA/>}/>
        <Route path='/vo' exact element={<Arch/>}/>
        <Route path='/ca' exact element={<Carrito/>}/>

      </Routes>
    </Router>
   </Fragment>
  );
}

export default App;
