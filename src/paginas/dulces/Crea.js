import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';



const CrearPedido = () => {

  const [Pedido, setPedido] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    Telefono: '',
    direccion: '',
    pago:''

  });

  //extraemos la informacion al elemento Pedido
  const { nombre, apellidos, email, Telefono, direccion, pago } = Pedido;


  const onChange = (e) => {
    setPedido({
      ...Pedido,
      [e.target.name]: e.target.value
    })

  }
  useEffect(() => {
    document.getElementById("nombre").focus();
  }, [])

  const CrearPedido = async () => {
    const verificarExistenciaPedido = async (nombre) => {
      try {
          const response = await APIInvoke.invokeGET(
              `/Pedido?nombre=${nombre}`
          );
          if (response && response.length > 0) {
              return true; // El Pedido ya existe
          } else {
              return false; // El Pedido no existe
          }

      } catch (error) {
          console.error(error);
          return false; // Maneja el error si la solicitud falla 
      }
  };
   
     if (email.length < 6) {
      const msg = "La email debe ser  minimo de 6 caracteres";
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
      const PedidoExiste = await verificarExistenciaPedido(nombre);
      const data = {
        nombre: Pedido.nombre,
        apellidos: Pedido.apellidos,
        email: Pedido.email,
        Telefono: Pedido.Telefono,
        direccion: Pedido.direccion,
        pago:Pedido.pago,
        precio:Pedido.precio,
        pesoNeto:Pedido.pesoNeto
    
      }
      const response = await APIInvoke.invokePOST(`/Pedido`, data);
      const mensaje = response.msg;

      if (PedidoExiste) {
        const msg = "El Pedido ya existe.";
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
        const msg = "El Pedido se creo correctamente.";
        swal({
          title: 'Correcto',
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
          setPedido({
            nombre: '',
            apellidos: '',
            email: '',
            Telefono: '',
            direccion: '',
            pago:'',
            referencia:"",
            marca:"",
            presentacion:"",
            sabor:"",
            tipo:"",
            cantidad:"",
            precio:"",
            pesoNeto:"",
            categoria:"",

    
          })
      }
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    CrearPedido();
    
  }


  return (

    <div className="hold-transition logi-page" style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}><b>Crea Tu</b>Pedido</Link>
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Ingresa los datos del Cliente</p>

            <form onSubmit={onSubmit}>
    
              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Nombres"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={onChange}
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
                  value={apellidos}
                  onChange={onChange}
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
                  value={email}
                  onChange={onChange}
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
                  value={Telefono}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span  class="fa-solid fa-phone" />
                  </div>
                </div>

              </div>
              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Dirección"
                  id="direccion"
                  name="direccion"
                  value={direccion}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span  class="fa-solid fa-house" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Medio de Pago"
                  id="pago"
                  name="pago"
                  value={pago}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span  class="fa-solid fa-credit-card"/>
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