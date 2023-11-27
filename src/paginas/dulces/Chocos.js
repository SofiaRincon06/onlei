import React from "react";
import { Link } from "react-router-dom";

import imagen16 from "../../assets/img/bur.webp";
import imagen17 from "../../assets/img/choc.webp";
import imagen18 from "../../assets/img/chom.jpg";
import imagen21 from "../../assets/img/fer.jpg";
import imagen23 from "../../assets/img/getgol.jpg";
import imagen24 from "../../assets/img/jet.jpg";
import imagen25 from "../../assets/img/jetbur.webp";
import imagen26 from "../../assets/img/jetcre.png";
import imagen27 from "../../assets/img/jetli.jpg";
import imagen28 from "../../assets/img/jum.png";
import imagen29 from "../../assets/img/jumbl.jpg";
import imagen30 from "../../assets/img/jumfl.jpg";
import imagen31 from "../../assets/img/jumi.png";
import imagen32 from "../../assets/img/jumin.jpeg";
import imagen33 from "../../assets/img/jumr.webp";
import imagen34 from "../../assets/img/kit.webp";
import imagen37 from "../../assets/img/sni.webp";

const Chocolates = () =>{
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
            <img src={imagen16} alt="Cafe Irish" />
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
            <h3>Burbujas Jet </h3>
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
            <img src={imagen17} alt="Cafe Irish" />
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
            <h3>Chocmelos</h3>
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
            <img src={imagen18} alt="Cafe Irish" />
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
            <h3>Chocmelos Paleta</h3>
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
            <img src={imagen21} alt="Cafe Irish" />
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
            <h3>Ferrero Rocher</h3>
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
            <img src={imagen23} alt="Cafe Irish" />
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
            <h3>Jet Gool</h3>
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
            <img src={imagen24} alt="Cafe Irish" />
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
            <h3>Chocolatina Jet</h3>
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
            <img src={imagen25} alt="Cafe Irish" />
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
            <h3>Burbu Jet</h3>
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
            <img src={imagen26} alt="Cafe Irish" />
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
            <h3>Jet Crema</h3>
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
            <img src={imagen27} alt="Cafe Irish" />
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
            <h3>Jet Crema Tarro</h3>
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
            <img src={imagen28} alt="Cafe Irish" />
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
            <h3>Chocolatina Jumbo</h3>
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
            <img src={imagen29} alt="Cafe Irish" />
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
            <h3>Chocolatina Jumbo Flow White</h3>
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
            <img src={imagen30} alt="Cafe Irish" />
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
            <h3>Chocolatina Jumbo Flow Black </h3>
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
            <img src={imagen31} alt="Cafe Irish" />
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
            <h3>Chocolatina Jumbo Mix</h3>
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
            <img src={imagen32} alt="Cafe Irish" />
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
            <h3>Jumbo Mini</h3>
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
            <img src={imagen33} alt="Cafe Irish" />
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
            <h3>Jumbo Rosca</h3>
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
            <img src={imagen34} alt="Cafe Irish" />
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
            <h3>Chocolatina KitKat</h3>
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
            <img src={imagen37} alt="Cafe Irish" />
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
            <h3>Cholatina Snickers</h3>
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

export default Chocolates;