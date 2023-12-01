import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert"

const ProDu = () =>{
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
      const msg = "El dulce no fue eliminado correctamente";
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
                                <Link to={`/co${Dulce.id}`} className="btn btn-sm btn-primary">Comprar</Link>;
                               
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

export default ProDu;
