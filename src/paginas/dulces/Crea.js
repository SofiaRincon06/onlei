import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import show_alerta from "sweetalert"

const CrearPedido = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `http://localhost:4000/Dulce/${ id }`
  const url2 = `http://localhost:4000/Pedido/${ id }`

  const [Pedido, setPedido]= useState({
      nombre: "",
      apellidos: "",
      email: "",
      Telefono: "",
      direccion: "",
      pago: "",
      referencia: "",
      marca: "",
      presentacion: "",
      sabor: "",
      tipo: "",
      cantidad: "",
      precio: "",
      pesoNeto: "",
      categoria: "",
  });
useEffect(() =>{
        getPedido();
},[]);

const getPedido = async () =>{
    try{
        const response = await axios.get(url);
        setPedido(response.data);
    }catch (error){
        console.error("Error al tener detalles del dulce", error);
        show_alerta("Error", "Hubo al tener detalles del dulce")
    }
};
const hanleInpuChange =(e) =>{
    const {name, value} = e.target;
    setPedido({
        ...Pedido,
        [name]: value,
    });
};

const hanleSubmit = async (e) =>{
    e.preventDefault();
    try{
        const response = await axios.put (url2, Pedido);
        show_alerta("Exito", "Detalles del dulce actualizados correctamente");
        navigate("/ver-pe");
    }catch (error){
        console.error("Error al actualizar el dulce", error);
        show_alerta("Error", "Hubo al tener actualizar del dulce")
    }
};
  return (

    <div className="hold-transition logi-page" style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}><b>Crea Tu</b>Pedido</Link>
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Ingresa los datos del Cliente</p>

            <form onSubmit={hanleSubmit}>

              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Referencia"
                  id="referencia"
                  name="referencia"
                  value={Pedido.referencia}
                  onChange={hanleInpuChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span class="fa-solid fa-barcode" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Marca"
                  id="marca"
                  name="marca"
                  value={Pedido.marca}
                  onChange={hanleInpuChange}          
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-solid fa-star" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Presentacion"
                  id="presentacion"
                  name="presentacion"
                  value={Pedido.presentacion}
                  onChange={hanleInpuChange}          
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-solid fa-cube" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Sabor"
                  id="sabor"
                  name="sabor"
                  value={Pedido.sabor}
                  onChange={hanleInpuChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-solid fa-cookie" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Tipo"
                  id="tipo"
                  name="tipo"
                  value={Pedido.tipo}
                  onChange={hanleInpuChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-solid fa-check" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="number"
                  className="form-control"
                  placeholder="Cantidad"
                  id="cantidad"
                  name="cantidad"
                  value={Pedido.cantidad}
                  onChange={hanleInpuChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-solid fa-plus" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="number"
                  className="form-control"
                  placeholder="Precio"
                  id="precio"
                  name="precio"
                  value={Pedido.precio}
                  onChange={hanleInpuChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-solid fa-hand-holding-dollar" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="number"
                  className="form-control"
                  placeholder="Peso Neto"
                  id="pesoNeto"
                  name="pesoNeto"
                  value={Pedido.pesoNeto}
                  onChange={hanleInpuChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-solid fa-scale-balanced" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Categoria"
                  id="categoria"
                  name="categoria"
                  value={Pedido.categoria}
                  onChange={hanleInpuChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-regular fa-address-card" />
                  </div>
                </div>
              </div>



              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Nombres"
                  id="nombre"
                  name="nombre"
                  value={Pedido.nombre}
                  onChange={hanleInpuChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-solid fa-user" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Apellidos"
                  id="apellidos"
                  name="apellidos"
                  value={Pedido.apellidos}
                  onChange={hanleInpuChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-solid fa-user" />
                  </div>

                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={Pedido.email}
                  onChange={hanleInpuChange}
                  required
                />
                <div className="input-group-append">

                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>

                </div>
              </div>

              <div className="input-group mb-3">
                <input type="number"
                  className="form-control"
                  placeholder="Teléfono"
                  id="Telefono"
                  name="Telefono"
                  value={Pedido.Telefono}
                  onChange={hanleInpuChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span class="fa-solid fa-phone" />
                  </div>
                </div>

              </div>
              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Dirección"
                  id="direccion"
                  name="direccion"
                  value={Pedido.direccion}
                  onChange={hanleInpuChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span class="fa-solid fa-credit-Home" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Medio de Pago"
                  id="pago"
                  name="pago"
                  value={Pedido.pago}
                  onChange={hanleInpuChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span class="fa-solid fa-credit-card" />
                  </div>
                </div>
              </div>



              <div className="social-auth-links text-center mb-3">

                <button type='submit' className="btn btn-block btn-primary">
                  Realizar Compra
                </button>
                <Link to={"/"} className="btn btn-block btn-danger">
                  Regresar al Login
                </Link>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>

  );
}

export default CrearPedido;