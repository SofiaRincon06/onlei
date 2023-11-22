import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';



const CrearCuenta = () => {

  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    confirmar: ''
  });

  //extraemos la informacion al elemento usuario
  const { nombre, email, contraseña, confirmar } = usuario;


  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  }
  useEffect(() => {
    document.getElementById("nombre").focus();
  }, [])

  const crearCuenta = async () => {
    const verificarExistenciaUsuario = async (nombre) => {
      try {
          const response = await APIInvoke.invokeGET(
              `/Usuario?nombre=${nombre}`
          );
          if (response && response.length > 0) {
              return true; // El usuario ya existe
          } else {
              return false; // El usuario no existe
          }

      } catch (error) {
          console.error(error);
          return false; // Maneja el error si la solicitud falla 
      }
  };
    if (contraseña !== confirmar) {
      const msg = "Las contraseñas son diferentes";
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

    } else if (contraseña.length < 6) {
      const msg = "La contraseña debe ser  minimo de 6 caracteres";
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
      const usuarioExiste = await verificarExistenciaUsuario(nombre);
      const data = {
        nombre: usuario.nombre,
        email: usuario.email,
        contraseña: usuario.contraseña,
    
      }
      const response = await APIInvoke.invokePOST(`/Usuario`, data);
      const mensaje = response.msg;

      if (usuarioExiste) {
        const msg = "El usuario ya existe.";
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
        const msg = "El usuario se creo correctamente.";
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
        setUsuario({
          nombre: '',
          email: '',
          contraseña: '',
          confirmar: ''
        })
      }
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    crearCuenta();
    
  }


  return (

    <div className="hold-transition logi-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}><b>Crea Tu</b>Cuenta</Link>
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Ingresa los datos de usuario</p>

            <form onSubmit={onSubmit}>

              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Nombre"
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
                <input type="email"
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
                <input type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  id="contraseña"
                  name="contraseña"
                  value={contraseña}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="password"
                  className="form-control"
                  placeholder="Confirmar Contraseña"
                  id="confirmar"
                  name="confirmar"
                  value={confirmar}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>



              <div className="social-auth-links text-center mb-3">

                <button type='submit' className="btn btn-block btn-primary">
                  Crear Cuenta
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
export default CrearCuenta;