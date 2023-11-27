import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import show_alerta from "sweetalert"

const EditarDulce = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `http://localhost:4000/Dulce/${ id }`

  const [Dulce, setDulce]= useState({
    referencia: '',
    marca: '',
    presentacion: '',
    sabor: '',
    tipo: '',
    cantidad:'',
    precio: '',
    pesoNeto:'',
    categoria:'',
  });
useEffect(() =>{
        getDulce();
},[]);

const getDulce = async () =>{
    try{
        const response = await axios.get(url);
        setDulce(response.data);
    }catch (error){
        console.error("Error al tener detalles del dulce", error);
        show_alerta("Error", "Hubo al tener detalles del dulce")
    }
};
const hanleInpuChange =(e) =>{
    const {name, value} = e.target;
    setDulce({
        ...Dulce,
        [name]: value,
    });
};

const hanleSubmit = async (e) =>{
    e.preventDefault();
    try{
        const response = await axios.put (url, Dulce);
        show_alerta("Exito", "Detalles del dulce actualizados correctamente");
        navigate("/ver-du");
    }catch (error){
        console.error("Error al actualizar el dulce", error);
        show_alerta("Error", "Hubo al tener actualizar del dulce")
    }
};
  return (


     <div className="hold-transition logi-page" style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div className="wrapper">
      <div className="content-wrapper">
        <section className="content">
          <div className="card-header">
            <h3 className="card-title">
              <Link
                to="/ver-du"
                type="button"
                className="btn btn-block btn-primary btn-sm"
              >
                Volver a la Lista
              </Link>
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={hanleSubmit}>
              <div className="card-body">
              <div className="form-group">
                  <label htmlFor="referencia">Referencia:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="referencia"
                    name="referencia"
                    placeholder="Ingrese la marca del dulce"
                    value={Dulce.referencia}
                    onChange={hanleInpuChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="marca">Marca:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="marca"
                    name="marca"
                    placeholder="Ingrese la marca del dulce"
                    value={Dulce.marca}
                    onChange={hanleInpuChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="presentacion">Presentacion:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="presentacion"
                    name="presetacion"
                    placeholder="Ingrese la presentacion del producto"
                    value={Dulce.presentacion}
                    onChange={hanleInpuChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sabor">Sabor:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="sabor"
                    name="sabor"
                    placeholder="Ingrese e sabor del dulce"
                    value={Dulce.sabor}
                    onChange={hanleInpuChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tipo">Tipo:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tipo"
                    name="tipo"
                    placeholder="Ingrese el tipo del dulce"
                    value={Dulce.tipo}
                    onChange={hanleInpuChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cantidad">Cantidad:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cantidad"
                    name="cantidad"
                    placeholder="Ingrese la Cantidad de dulces"
                    value={Dulce.cantidad}
                    onChange={hanleInpuChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="precio">Precio:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="precio"
                    name="precio"
                    placeholder="Ingrese el precio del dulce"
                    value={Dulce.precio}
                    onChange={hanleInpuChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pesoNeto">pesoNeto:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pesoNeto"
                    name="pesoNeto"
                    placeholder="Ingrese el PesoNeto del dulc"
                    value={Dulce.pesoNeto}
                    onChange={hanleInpuChange}
                    required
                  />
                </div>

                <div className="input-group mb-3">
                    <label htmlFor="categoria">Seleccione la categoria:</label>
                        <select className="form-control"
                         id="categoria"
                          name="categoria" 
                          value={Dulce.categoria} 
                          onChange={hanleInpuChange} 
                          required
                          >
                            <option value="chocolates">Chocolates</option>
                            <option value="arequipes">Arequipes</option>
                            <option value="tipicos">Típicos</option>
                        </select>

                        <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-solid fa-scale-balanced" />
                  </div>
                  </div>
                </div>

              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Actualizar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default EditarDulce;