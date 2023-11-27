import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';



const CrearDulce = () => {


  
      const [Dulce, setDulce] = useState({
        referencia: '',
        marca: '',
        presentacion: '',
        sabor: '',
        tipo: '',
        cantidad:'',
        precio: '',
        pesoNeto:''
  
      })
  
      const{referencia,marca,presentacion,sabor,tipo,cantidad,precio,pesoNeto}=Dulce
  
      const onChange=(e)=>{
          setDulce({
              ...Dulce,
              [e.target.name]:e.target.value
          })
      }
  
      const CrearDulce = async () => {
          const data = {
            referencia: Dulce.referencia,
            marca: Dulce.marca,
            presentacion: Dulce.presentacion,
            sabor: Dulce.sabor,
            tipo: Dulce.tipo,
            cantidad:Dulce.cantidad,
            precio: Dulce.precio,
            pesoNeto:Dulce.pesoNeto
          }
  
  
          const response = await APIInvoke.invokePOST(`/Dulce`, data);
          const idDulce = response.id;
  
          if (idDulce === '') {
              const msg = "El dulce no fue creado correctamente."
              swal({
                  title: 'Error',
                  text: msg,
                  icon: 'error',
                  buttons: {
                      confirm: {
                          text: 'Ok',
                          value: true,
                          visible: true,
                          className: 'btn btn-danger',
                          closeModal: true
                      }
                  }
              });
          } else {
              const msg = "El dulce fue creado correctamente."
              swal({
                  title: 'Informacion',
                  text: msg,
                  icon: 'success',
                  buttons: {
                      confirm: {
                          text: 'Ok',
                          value: true,
                          visible: true,
                          className: 'btn btn-primary',
                          closeModal: true
                      }
                  }
              });
  
              setDulce({
                referencia: '',
                marca: '',
                presentacion: '',
                sabor: '',
                tipo: '',
                cantidad:'',
                precio: '',
                pesoNeto:''
              })
            
          }
      }
  
      const onSubmit = (e) => {
          e.preventDefault();
          CrearDulce();
      }


  return (

    <div className="hold-transition logi-page" style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}><b>Crea Tu</b>Dulce</Link>
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Ingresa los datos de Dulce</p>

            <form onSubmit={onSubmit}>

              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Referencia"
                  id="referencia"
                  name="referencia"
                  value={referencia}
                  onChange={onChange}
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
                  value={marca}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className= "fa-solid fa-star" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Presentacion"
                  id="presentacion"
                  name="presentacion"
                  value={presentacion}
                  onChange={onChange}
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
                  value={sabor}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className= "fa-solid fa-cookie" />
                  </div>
                </div>

              </div>
              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Tipo"
                  id="tipo"
                  name="tipo"
                  value={tipo}
                  onChange={onChange}
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
                  value={cantidad}
                  onChange={onChange}
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
                  value={precio}
                  onChange={onChange}
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
                  placeholder="PesoNeto"
                  id="pesoNeto"
                  name="pesoNeto"
                  value={pesoNeto}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa-solid fa-scale-balanced" />
                  </div>
                </div>
              </div>


              <div className="social-auth-links text-center mb-3">

                <button type='submit' className="btn btn-block btn-primary">
                  Crear Dulce
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

export default CrearDulce;