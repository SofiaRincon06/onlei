import React from "react";
import Menu2 from "./Menu2";
import { Link } from 'react-router-dom';
import Logo from '../../node_modules/admin-lte/dist/img/AdminLTELogo.png';

const SidebarContainer = () =>{
    return(
   <aside className="main-sidebar sidebar-dark-primary elevation-4">
  <link to="../../index3.html" className="brand-link" />
  <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
  <span className="brand-text font-weight-light">Admin Proyectos</span>
  <div className="sidebar">
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        
      </div>
      <div className="info">
        <Link to={"/homec"} className="d-block">Menú Principal</Link>
      </div>
    </div>
  
   <Menu2></Menu2>
  </div>
</aside>

    );
}

export default SidebarContainer;