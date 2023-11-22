import React, { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';


const Login = () =>{

  //para direccionar de un componente a otro
  const navigate = useNavigate();
//definimos el estado inicial de las varibles
  const [usuario, setUsuario] = useState({
      email:'',
      contraseña:''
  });
  const {email, contraseña} =usuario;

  const onChange = (e) =>{
      setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
      })
  }
  useEffect(() => {
    document.getElementById("email").focus();
  }, [])

  const IniciarSesion = async () =>{
    const verificarExistenciaUsuario = async (email) => {
      try {
          const response = await APIInvoke.invokeGET(
              `/Usuario?email=${email}`
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


    if(contraseña.length < 6){
      const msg = "La contraseña debe ser al menos de 6 caracteres";
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
    }else {
      const UsuaExistente = await verificarExistenciaUsuario(email, contraseña);
      const response = await APIInvoke.invokeGET(
          `/Usuario?email=${email}&contraseña=${contraseña}`
      );

      if (!UsuaExistente) {
          const msg = "No es posible iniciar sesión, verifique los datos";
          new swal({
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
        }else{
          //obtener el token de acceso jwt 
          const jwt = response.token;

          //giardar el token en el localstorage
          localStorage.setItem('token', jwt)

          //redireccionamos al home la pagina principal
          navigate("/home");
        }
    } 
  }


  const onSubmit = (e) =>{
    e.preventDefault();
    IniciarSesion();
}


    return (
        <div className="login-box">
  <div className="login-logo">
    <Link to={"../../index2.html"}><b>Iniciar</b>Sesión</Link>
  </div>
 
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Bienveido, ingresa tus credenciales</p>
      <form onSubmit={onSubmit} >
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
        
          {/* /.col */}
          
     
      <div className="social-auth-links text-center mb-3">
        
        <button type ='submit'className="btn btn-block btn-primary">
           Ingresar
        </button>
        <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
          Crear Cuenta 
        </Link>
      </div>
      </form>
      {/* /.social-auth-links */}
      
    </div>
    {/* /.login-card-body */}
  </div>
</div>


    );
}

export default Login;