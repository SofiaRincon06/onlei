import React from "react";
import {Link} from 'react-router-dom';
import imagen1 from "../../assets/img/ajon.jpg";
import imagen2 from "../../assets/img/co.jpg";
import imagen3 from "../../assets/img/boca.jpg";
import imagen4 from "../../assets/img/meren.jpg";
import imagen10 from "../../assets/img/agua.jpg";
import imagen11 from "../../assets/img/fre.jpg";
import imagen12 from "../../assets/img/mel.jpg";
import imagen13 from "../../assets/img/gel.webp";
import imagen14 from "../../assets/img/al.png";
import imagen15 from "../../assets/img/arep.webp";
import imagen16 from "../../assets/img/bur.webp";
import imagen17 from "../../assets/img/choc.webp";
import imagen18 from "../../assets/img/chom.jpg";
import imagen19 from "../../assets/img/cla.jpg";
import imagen20 from "../../assets/img/cola.webp";
import imagen21 from "../../assets/img/fer.jpg";
import imagen22 from "../../assets/img/fres.jpg";
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
import imagen35 from "../../assets/img/pin.jpg";
import imagenn36 from "../../assets/img/qui.webp";
import imagen37 from "../../assets/img/sni.webp";
import imagen38 from "../../assets/img/tru.jpg";

const Productosdul = () =>{
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
        {/* Producto 1 */}
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
                <i className="fa-solid fa-basket-shopping" />
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
                <i className="fa-solid fa-basket-shopping" />
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
            <img src={imagen19} alt="Cafe Irish" />
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
            <h3>Trululu Clasica</h3>
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
            <img src={imagen22} alt="Cafe Irish" />
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
            <h3>Trululu Fresitas</h3>
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
            <img src={imagen35} alt="Cafe Irish" />
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
            <h3>Trululu Pingüinos</h3>
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
            <img src={imagenn36} alt="Cafe Irish" />
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
            <h3>Dulce Quipitos</h3>
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

        <div className="card-product">
          <div className="container-img">
            <img src={imagen38} alt="Cafe Irish" />
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
            <h3>Trululu Sabores</h3>
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

export default Productosdul;
