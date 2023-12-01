import React from "react";
import Navbar from "../componentes/Navbar";
import Sidebar2 from "../componentes/Sidebar2"
import ContentHeader from "../componentes/ContentHeader";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";


const Home = () =>{
    return(
     <div className="wrapper">
        <Navbar></Navbar>
        <Sidebar2></Sidebar2>
        <div className="content-wrapper">
            <ContentHeader
                titulo={"Dashboard"}
                breadCrumb1={"Inicio"}
                
                breadCrumb2={"Dashboard"}
                ruta1={"/ver-du"}
            />
          
            <section className="content">
                <div className="container-fluid">
                <div className="row">

                <div className="col-lg-3 col-6">
        <div className="small-box bg-info">
    <div className="inner">
      <h3>Pedidos</h3>
      <h1>Cliente</h1>
      <p>&nbsp;</p>
    </div>
    <div className="icon">
      <i className="fa fa-edit" />
    </div>
    <Link to={"/ver-pe/:id"} className="small-box-footer">Ver los Pedidos <i classname="fas fa-arrow-circle-right" /></Link>
  </div>
</div>
</div>

                </div>
            </section>
        </div>
        <Footer></Footer>
</div>

    );
}

export default Home;