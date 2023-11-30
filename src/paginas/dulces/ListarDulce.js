import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert"
import { Link } from "react-router-dom";

const VerDulce = () => {

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
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div class="content-wrapper">
        <ContentHeader
          titulo={"Listado de Dulce"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Dulce"}
          breadCrumb3={"Dulce"}
          ruta2={"/Home2"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Ver Dulces</h3>
              <div className="card-tools">
              <Link to={"/crearDulce"} className="btn btn-sm btn-danger">Crear</Link>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
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
                                <Link to={`/editarDulce/${Dulce.id}`} className="btn btn-sm btn-primary">Actualizar</Link>;
                                <button onClick={(e)=>eliminarDulce(e, Dulce.id)} className="btn btn-sm btn-danger">Eliminar</button>
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

export default VerDulce;