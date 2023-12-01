import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert"

const Productosdul = () =>{
  const [Dulce, setDulce] = useState([]);

  useEffect(() => {
    cargarDulce();
  }, []);

  const cargarDulce = async () => {
    const response = await APIInvoke.invokeGET("/Dulce");
    setDulce(response);
  };

  const eliminarDulce = async (e,id) => {
    e.preventDefault();
  const response = await APIInvoke.invokeDELETE(`/Dulce/${id}`);
  if (response) { 
    const msg = "Dulce eliminado correctamente";
    swal({
      title: "Información",
      text: msg,
      icon: "success",
      buttons: {
        confirm: {
          text: "Ok",
          value: true,
          visible: true,
          className: "btn btn-primary",
          closeModal: true,
          },
        },
      });
      cargarDulce();
    } else {
      const msg = "El ticket no fue eliminado correctamente";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    }
  };

  const EditarDulce = (id) => {
    // Aquí rediriges a la ruta con el id correspondiente
    
  };


    return (
        <div>




<header>
    <div className="container-hero">
      <div className="container hero">
        <div className="customer-support">
          <i className="fa-solid fa-headset" />
          <div className="content-customer-support">
            <span className="text">Soporte al cliente</span>
            <span className="number">316-298-77-96</span>
          </div>
        </div>
        <div className="container-logo">
          <i className="fa-solid fa-candy-cane" />
          <h1 className="logo"><a href="/">Nuestros productos </a></h1>
        </div>
        <div className="container-user">
          <i className="fa-solid fa-user" />
          <i className="fa-solid fa-cart-shopping" />
          <div className="content-shopping-cart">
            <span className="text">Carrito</span>
            <span className="number">(0)</span>
          </div>
        </div>
      </div>
    </div>
    <div className="container-navbar">
      <nav className="navbar container">
        <i className="fa-solid fa-bars" />
        <ul className="menu">
        <Link to={"/"} >
                 Volver a Inicio
                </Link>
          
        </ul>
        <form className="search-form">
          <input type="search" placeholder="Buscar..." />
          <button className="btn-search">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      </nav>
    </div>
  </header>



  <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "11%" }}>Referencia</th>
                    <th style={{ width: "11%" }}>Marca</th>
                    <th style={{ width: "11%" }}>Presentacion</th>
                    <th style={{ width: "11%" }}>Sabor</th>
                    <th style={{ width: "11%" }}>Tipo</th>
                    <th style={{ width: "11%" }}>Cantidad</th>
                    <th style={{ width: "11%" }}>Precio</th>
                    <th style={{ width: "11%" }}>Peso Neto</th>
                    <th style={{ width: "11%" }}>Categoria</th>
                  </tr>
                </thead>
                <tbody>
          
                  {
                  Dulce.map(
                    Dulce => 
                        <tr key={Dulce.id}>
                          <td>{Dulce.referencia}</td>
                            <td>{Dulce.marca}</td>
                            <td>{Dulce.presentacion}</td>
                            <td>{Dulce.sabor}</td>
                            <td>{Dulce.tipo}</td>
                            <td>{Dulce.cantidad}</td>
                            <td>{Dulce.precio}</td>
                            <td>{Dulce.pesoNeto}</td>
                            <td>{Dulce.categoria}</td>
                            <td>
                                <Link to={`/crea-ped/${Dulce.id}`} className="btn btn-sm btn-primary">Comprar</Link>;
                               
                            </td>
                        </tr>
                  )
                  }
                </tbody>
              </table>
            </div>


        </div>

    )
}

export default Productosdul;
