import React from "react";
import { Link } from "react-router-dom";
import imagen14 from "../../assets/img/al.png";
import imagen15 from "../../assets/img/arep.webp";
import imagen20 from "../../assets/img/cola.webp";
import imagen39 from "../../assets/img/tuma.webp";



const Arequipes = () =>{
    return (

        <div>

<header>
    <div className="container-hero">
      <div className="container hero">
        <div className="customer-support">
          <i className="fa-solid fa-headset" />
          <div className="content-customer-support">
            <span className="text">Soporte al cliente</span>
            <span className="number">316-298-77-96</span>
          </div>
        </div>
        <div className="container-logo">
          <i className="fa-solid fa-candy-cane" />
          <h1 className="logo"><a href="/">Nuestros productos </a></h1>
        </div>
        <div className="container-user">
          <i className="fa-solid fa-user" />
          <i className="fa-solid fa-cart-shopping" />
          <div className="content-shopping-cart">
            <span className="text">Carrito</span>
            <span className="number">(0)</span>
          </div>
        </div>
      </div>
    </div>
    <div className="container-navbar">
      <nav className="navbar container">
        <i className="fa-solid fa-bars" />
        <ul className="menu">
        <Link to={"/"} >
                 Volver a Inicio
                </Link>
          
        </ul>
        <form className="search-form">
          <input type="search" placeholder="Buscar..." />
          <button className="btn-search">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      </nav>
    </div>
  </header>


  <section className="container specials">
      
      <div className="container-products">

      <div className="card-product">
          <div className="container-img">
            <img src={imagen14} alt="Cafe Irish" />
            <span className="discount">-13%</span>
            <div className="button-group">
              <span>
                <i className="fa-regular fa-eye" />
              </span>
              <span>
                <i className="fa-regular fa-heart" />
              </span>
              <span>
                <i className="fa-solid fa-code-compare" />
              </span>
            </div>
          </div>
          <div className="content-card-product">
            <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star" />
            </div>
            <h3>Alquería Arequipe</h3>
            <span className="add-cart">
               <Link to={'/crea-ped'}>
                <i className="fa-solid fa-basket-shopping" />
                </Link>
            </span>
            <p className="price">$4.300 <span>$5.000</span></p>
          </div>
        </div>

        <div className="card-product">
          <div className="container-img">
            <img src={imagen15} alt="Cafe Irish" />
            <span className="discount">-13%</span>
            <div className="button-group">
              <span>
                <i className="fa-regular fa-eye" />
              </span>
              <span>
                <i className="fa-regular fa-heart" />
              </span>
              <span>
                <i className="fa-solid fa-code-compare" />
              </span>
            </div>
          </div>
          <div className="content-card-product">
            <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star" />
            </div>
            <h3>Alpina Arequipe</h3>
            <span className="add-cart">
               <Link to={'/crea-ped'}>
                <i className="fa-solid fa-basket-shopping" />
                </Link>
            </span>
            <p className="price">$4.300 <span>$5.000</span></p>
          </div>
        </div>


        <div className="card-product">
          <div className="container-img">
            <img src={imagen20} alt="Cafe Irish" />
            <span className="discount">-13%</span>
            <div className="button-group">
              <span>
                <i className="fa-regular fa-eye" />
              </span>
              <span>
                <i className="fa-regular fa-heart" />
              </span>
              <span>
                <i className="fa-solid fa-code-compare" />
              </span>
            </div>
          </div>
          <div className="content-card-product">
            <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star" />
            </div>
            <h3>Arequipe Colanta</h3>
            <span className="add-cart">
               <Link to={'/crea-ped'}>
                <i className="fa-solid fa-basket-shopping" />
                </Link>
            </span>
            <p className="price">$4.300 <span>$5.000</span></p>
          </div>
        </div>


        <div className="card-product">
          <div className="container-img">
            <img src={imagen39} alt="Cafe Irish" />
            <span className="discount">-13%</span>
            <div className="button-group">
              <span>
                <i className="fa-regular fa-eye" />
              </span>
              <span>
                <i className="fa-regular fa-heart" />
              </span>
              <span>
                <i className="fa-solid fa-code-compare" />
              </span>
            </div>
          </div>
          <div className="content-card-product">
            <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star" />
            </div>
            <h3>Arequipe Típico</h3>
            <span className="add-cart">
               <Link to={'/crea-ped'}>
                <i className="fa-solid fa-basket-shopping" />
                </Link>
            </span>
            <p className="price">$4.300 <span>$5.000</span></p>
          </div>
        </div>
        </div>

        </section>

        </div>
    )
}

export default Arequipes;