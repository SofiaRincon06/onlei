import React, { useState, useEffect } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import APIInvoke from "../../utils/APIInvoke";
  import swal from 'sweetalert';
  import "../../estilos/vs.css";

  const Login = () => {
    const navigate = useNavigate();

    const [Usuario, setUsuario] = useState({
      email: "",
      contraseña: "",
      tipoUsuario:""
    });

    const { email, contraseña, tipoUsuario } = Usuario;

    const onChange = (e) => {
      setUsuario({
        ...Usuario,
        [e.target.name]: e.target.value
      });
    }

    useEffect(() => {
      const emailInput = document.getElementById("email");
      if (emailInput) {
        emailInput.focus();
      }
    }, []);

    const iniciarSesion = async () => {
      const verificarExistenciaUsuario = async (email, contraseña) => {
        try {
          const response = await APIInvoke.invokeGET(
            `/${tipoUsuario}?email=${email}&contraseña=${contraseña}`
          );
          if (response && response.length > 0) {
            return response[0];
          }
          return null;
        } catch (error) {
          console.error(error);
          return null;
        }
      }
      if (contraseña.length < 6) {
        mostrarError("Las contraseñas deben tener al menos 6 caracteres.");
      } else {
        const usuarioEncontrado = await verificarExistenciaUsuario(email,contraseña);

        if (!usuarioEncontrado) {
          mostrarError("No fue posible iniciar sesión, verifique los datos ingresados.");
        } else {
          mostrarExito("Bienvenid@");
          localStorage.setItem("email", email)
          const { RolUsuario } = usuarioEncontrado;
          localStorage.setItem ('Rol', RolUsuario)
          if (RolUsuario === "Rol1") {
            navigate("/home");
          } else if (RolUsuario === "Rol2") {
            navigate("/HomeC");


        }
      }
      }
    }
    

    const onSubmit = (e) => {
      e.preventDefault();
      iniciarSesion();
    }

    const mostrarError = (mensaje) => {
      swal({
        title: 'Error',
        text: mensaje,
        icon: 'error',
        buttons: {
          confirm: {
            text: 'ok',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      });
    };

    const mostrarExito = (mensaje) => {
      swal({
        title: 'Informacion',
        text: mensaje,
        icon: 'success',
        buttons: {
          confirm: {
            text: 'ok',
            value: true,
            visible: true,
            className: 'btn btn-primary',
            closeModal: true
          }
        }
      });
    };

    return (
      <div className="login-box" style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="login-logo">
          <b>Iniciar</b> Sesión
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            
            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
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
                <input
                  type="password"
                  className="form-control"
                  placeholder="contraseña"
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

              <div className="row">
                <div className="col-8"></div>
              </div>
              <div className="input-group mb-3">
                                        <select className="form-control"
                                            name="tipoUsuario"
                                            value={tipoUsuario}
                                            onChange={onChange}
                                        >
                                            <option value="">Seleccione su tipo de usuario</option>
              
                                            <option value="Usuario">Cliente</option>
                                            <option value="Admin">Administrador</option>
                                        </select>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa-regular fa-address-card" />
                                            </div>
                                        </div>
                                    </div>
              <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Ingresar
                </button>
                <br />
                <br />
                <p>¿No tienes una cuenta?</p>
                <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
                  <i /> Crear Cuenta
                </Link>
              </div>
              <Link to={"/"}>Cancelar</Link>
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default Login;