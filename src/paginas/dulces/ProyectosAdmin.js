import React, { useState, useEffect} from "react";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import { Link } from "react-router-dom";
import Footer from "../../componentes/Footer";
import APIInvoke from "../../utils/APIInvoke" 

const ProyectosAdmin = () => {
   const [dulces, setDulces] = useState([]);
   const cargarDulces = async() =>{
    const response = await APIInvoke.invokeGET(`/Usuario/dulces`);
    console.log(response.dulces)
    setDulces(response.dulces);

   }
   useEffect(() =>{
        cargarDulces();
   },[])





    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Listado de Dulces"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dulces"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Title</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%'}}>Id</th>
                                        <th style={{ width: '35%'}}>Nombre</th>
                                        <th style={{ width: '35%'}}>Categoria</th>
                                        <th style={{ width: '20%'}}>Precio</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                           &nbsp;
                                        </td>
                                       
                                    </tr>
                                
                                </tbody>
                            </table>

                        </div>

                    </div>

                </section>
            </div>
            <Footer></Footer>
        </div>

    );
}

export default ProyectosAdmin;