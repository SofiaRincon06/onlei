import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar";
import Sideabar2 from "../../componentes/Sidebar2";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert"
import { Link } from "react-router-dom";


const VerPedido = () => {
  const email = localStorage.getItem ('email')
  const [Pedido, setPedido] = useState([]);
 

  useEffect(() => {
    cargarPedido();
  }, []);

  const cargarPedido = async () => {
    const response = await APIInvoke.invokeGET(`/Pedido?email=${email}`);
    setPedido(response);
  };

  
  

  const eliminarPedido = async (e,id) => {
    e.preventDefault();
  const response = await APIInvoke.invokeDELETE(`/Pedido/${id}`);
  if (response) { 
    const msg = "Pedido eliminado correctamente";
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
      cargarPedido();
    } else {
      const msg = "El Pedido no fue eliminado correctamente";
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

  const EditarPedido = (id) => {
    // Aquí rediriges a la ruta con el id correspondiente
    
  };

  

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Sideabar2></Sideabar2>
      <div class="content-wrapper">
        <ContentHeader
          titulo={"Listado de Pedido"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Pedido"}
          ruta2={"/Home2"}
        />

        <section className="content">
          <div className="card">
           
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "7%" }}>Nombre</th>
                    <th style={{ width: "7%" }}>Apellidos</th>
                    <th style={{ width: "7%" }}>Email</th>
                    <th style={{ width: "7%" }}>Teléfono</th>
                    <th style={{ width: "7%" }}>Dirección</th>
                    <th style={{ width: "7%" }}>Pago</th>
                    <th  style={{width: "7%"}}>Referencia</th>
                    <th  style={{width: "7%"}}>Marca</th>
                    <th  style={{width: "7%"}}>Presentación</th>
                    <th  style={{width: "7%"}}>Sabor</th>
                    <th  style={{width: "7%"}}>Tipo</th>
                    <th  style={{width: "7%"}}>Cantidad</th>
                    <th  style={{width: "7%"}}>Precio</th>
                    <th  style={{width: "7%"}}>PesoNeto</th>
                    <th  style={{width: "7%"}}>Categoria</th>
                   
                  </tr>
                </thead>
                <tbody>

                  {
                  Pedido.map(
                    Pedido => 
                        <tr key={Pedido.id}>
                            <td>{Pedido.nombre}</td>
                            <td>{Pedido.apellidos}</td>
                            <td>{Pedido.email}</td>
                            <td>{Pedido.Telefono}</td>
                            <td>{Pedido.direccion}</td>
                            <td>{Pedido.pago}</td>
                            <td>{Pedido.referencia}</td>
                            <td>{Pedido.marca}</td>
                            <td>{Pedido.presentacion}</td>
                            <td>{Pedido.sabor}</td>
                            <td>{Pedido.tipo}</td>
                            <td>{Pedido.cantidad}</td>
                            <td>{Pedido.precio}</td>
                            <td>{Pedido.pesoNeto}</td>
                            <td>{Pedido.categoria}</td>
                           
                            <td>
                                <Link to={`/co/${Pedido.id}`} className="btn btn-sm btn-primary">Actualizar</Link>;
                                <button onClick={(e)=>eliminarPedido(e, Pedido.id)} className="btn btn-sm btn-danger">Eliminar</button>
                            </td>
                        </tr>
                  )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default VerPedido;