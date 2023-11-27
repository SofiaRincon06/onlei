import React from "react";
import { Link } from "react-router-dom";
import imagen1 from "../../assets/img/ajon.jpg";
import imagen2 from "../../assets/img/co.jpg";
import imagen3 from "../../assets/img/boca.jpg";
import imagen4 from "../../assets/img/meren.jpg";
import imagen10 from "../../assets/img/agua.jpg";
import imagen11 from "../../assets/img/fre.jpg";
import imagen12 from "../../assets/img/mel.jpg";
import imagen13 from "../../assets/img/gel.webp";
import imagen9 from "../../assets/img/galle.jpg";


const Tipicos = () =>{
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
          <h1 className="logo"><a href="/">Chocolates </a></h1>
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
            <img src={imagen10} alt="Cafe Irish" />
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
            <h3>Dulce de Aguardiente</h3>
            <span className="add-cart">

                <Link to={'/crea-ped'}>
                 <Link to={'/crea-ped'}>
                <i className="fa-solid fa-basket-shopping" />
                </Link>
                </Link>
              
            </span>
            <p className="price">$4.300 <span>$5.000</span></p>
          </div>
        </div>


        <div className="card-product">
          <div className="container-img">
            <img src={imagen1} alt="Cafe Irish" />
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
            <h3>Dulce de Ajonjolí</h3>
            <span className="add-cart">
            <Link to={'/crea-ped'}>
                 <Link to={'/crea-ped'}>
                <i className="fa-solid fa-basket-shopping" />
                </Link>
                </Link>
            </span>
            <p className="price">$4.300 <span>$5.000</span></p>
          </div>
        </div>

        <div className="card-product">
          <div className="container-img">
            <img src={imagen2} alt="Cafe Irish" />
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
            <h3>Dulce de Cocada</h3>
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
            <img src={imagen3} alt="Cafe Irish" />
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
            <h3>Bocadillo</h3>
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
            <img src={imagen4} alt="Cafe Irish" />
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
            <h3>Merengón</h3>
            <span className="add-cart">
               <Link to={'/crea-ped'}>
                <i className="fa-solid fa-basket-shopping" />
                </Link>
            </span>
            <p className="price">$4.300 <span>$5.000</span></p>
          </div>
        </div>
        {/* Producto 2 */}
        <div className="card-product">
          <div className="container-img">
            <img src={imagen11} alt="Cafe incafe-ingles.jpg" />
            <span className="discount">-22%</span>
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
              <i className="fa-regular fa-star" />
              <i className="fa-regular fa-star" />
            </div>
            <h3>Dulce de Feijoa</h3>
            <span className="add-cart">
               <Link to={'/crea-ped'}>
                <i className="fa-solid fa-basket-shopping" />
                </Link>
            </span>
            <p className="price">$7.800 <span>$10.000</span></p>
          </div>
        </div>
        {/*  */}
        <div className="card-product">
          <div className="container-img">
            <img src={imagen12} alt="Cafe Viena" />
            <span className="discount">-30%</span>
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
              <i className="fa-solid fa-star" />
            </div>
            <h3>Dulce de Melcocha</h3>
            <span className="add-cart">
               <Link to={'/crea-ped'}>
                <i className="fa-solid fa-basket-shopping" />
                </Link>
            </span>
            <p className="price">$4.200 <span>$6.000</span></p>
          </div>
        </div>
        {/*  */}
        <div className="card-product">
          <div className="container-img">
            <img src={imagen13} alt="Cafe Liqueurs" />
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
            <h3>Dulce Gelatina de Pata</h3>
            <span className="add-cart">
               <Link to={'/crea-ped'}>
                <i className="fa-solid fa-basket-shopping" />
                </Link>
            </span>
            <p className="price">$4.000</p>
          </div>
        </div>

        <div className="card-product">
          <div className="container-img">
            <img src={imagen9} alt="Cafe incafe-ingles.jpg" />
            <span className="discount">-22%</span>
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
              <i className="fa-regular fa-star" />
              <i className="fa-regular fa-star" />
            </div>
            <h3>Galleta</h3>
            <span className="add-cart">
               <Link to={'/crea-ped'}>
                <i className="fa-solid fa-basket-shopping" />
                </Link>
            </span>
            <p className="price">$7.800 <span>$10.000</span></p>
          </div>
        </div>

        </div>

        </section>
















        </div>
    )
}

export default Tipicos;