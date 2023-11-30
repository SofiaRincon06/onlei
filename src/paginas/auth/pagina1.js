import React from "react";
import {Link} from 'react-router-dom';
import "../../estilos/estilopagi.css";
import imagen1 from "../../assets/img/ajon.jpg";
import imagen2 from "../../assets/img/co.jpg";
import imagen3 from "../../assets/img/boca.jpg";
import imagen4 from "../../assets/img/meren.jpg";
import imagen5 from "../../assets/img/lo.jpg";
import imagen6 from "../../assets/img/var.jpg";
import imagen7 from "../../assets/img/pal.jpg";
import imagen8 from "../../assets/img/fru.jpg";
import imagen9 from "../../assets/img/galle.jpg";
import imagen10 from "../../assets/img/agua.jpg";
import imagen11 from "../../assets/img/fre.jpg";
import imagen12 from "../../assets/img/mel.jpg";
import imagen13 from "../../assets/img/gel.webp";
import imagen14 from "../../assets/img/mesa.jpeg"
import imagen15 from "../../assets/img/apo.jpg";
import imagen16 from "../../assets/img/neg.png";
import imagen17 from "../../assets/img/pagos.png"
const Pagina1 = () =>{
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
          <h1 className="logo"><a href="/"> Mi dulce Onlei </a></h1>
        </div>
        <div className="container-user">
          <i className="fa-solid fa-user" />
          <i className="fa-solid fa-cart-shopping" />
          <div className="content-shopping-cart">
            <span className="text">
              <Link to={"/ver-du"}>Carrito</Link>
              </span>
            <span className="number">(0)</span>
          </div>
        </div>
      </div>
    </div>
    <div className="container-navbar">
      <nav className="navbar container">
        <i className="fa-solid fa-bars" />
        <ul className="menu">
        <Link to={"/login"} >
                  Iniciar Sesión
                </Link>
                <Link to={"/crear-cuenta"} >
                  Registrate
                </Link>
                <Link to={"/produc"} >
                  Productos
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
  <section className="banner">
    <div className="content-banner">
      <p>Los mejores Dulces</p>
      <h2>100% Colombianos </h2>
      <Link to="/crea-ped">Comprar ahora</Link>
      
    </div>
  </section>
  <main className="main-content">
    <section className="container container-features">
      <div className="card-feature">
        <i className="fa-solid fa-plane-up" />
        <div className="feature-content">
          <span>Envío gratuito a nivel mundial</span>
          <p>En pedido superior a $50.000</p>
        </div>
      </div>
      <div className="card-feature">
        <i className="fa-solid fa-wallet" />
        <div className="feature-content">
          <span>Contrareembolso</span>
          <p>100% garantía de devolución de dinero</p>
        </div>
      </div>
      <div className="card-feature">
        <i className="fa-solid fa-headset" />
        <div className="feature-content">
          <span>Servicio al cliente 24/7</span>
          <p>LLámenos 24/7 al 316-298-77-96</p>
        </div>
      </div>
    </section>
    <section className="container top-categories">
      <h1 className="heading-1">Mejores Categorías</h1>
      <div className="container-categories">
        <div className="card-category category-moca">
          
          <p>Chocolates</p>
          <span>
              <Link to={'/choco'}>
              Ver más 
              </Link>
          </span>
        </div>
        <div className="card-category category-expreso">
          <p>Arequipes</p>
          <span>
              <Link to={'/are'}>
              Ver más 
              </Link>
          </span>
        </div>
        <div className="card-category category-capuchino">
          <p>Típicos</p>
          <span>
              <Link to={'/tip'}>
              Ver más 
              </Link>
          </span> 
        </div>
      </div>
    </section>
    <section className="container top-products">
      <h1 className="heading-1">Mejores Productos</h1>
      <div className="container-options">
        <span className="active">Destacados</span>
        <span>Más recientes</span>
        <span>Mejores Vendidos</span>
      </div>
      <div className="container-products">
        {/* Producto 1 */}
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
            <p className="price">$4.60 <span>$5.30</span></p>
            <button>Añadir al carrito</button>
          </div>
        </div>
        {/* Producto 2 */}
        <div className="card-product">
          <div className="container-img">
          <img src={imagen2} alt="Cafe incafe-ingles.jpg" />
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
            <h3>Cocada</h3>
            <span className="add-cart">
               <Link to={'/crea-ped'}>
                <i className="fa-solid fa-basket-shopping" />
                </Link>
            </span>
            <p className="price">$5.70 <span>$7.30</span></p>
          </div>
        </div>
        {/*  */}
        <div className="card-product">
          <div className="container-img">
            <img src={imagen3} alt="Cafe Australiano" />
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
            <h3>Bocadillo</h3>
            <span className="add-cart">
               <Link to={'/crea-ped'}>
                <i className="fa-solid fa-basket-shopping" />
                </Link>
            </span>
            <p className="price">$3.20</p>
          </div>
        </div>
        {/*  */}
        <div className="card-product">
          <div className="container-img">
            <img src={imagen4} alt="Cafe Helado" />
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
            <p className="price">$5.60</p>
          </div>
        </div>
      </div>
    </section>
    <section className="gallery">
      <img src={imagen7} alt="Gallery Img1"   className="gallery-img-1" />
      <img src={imagen6} alt="Gallery Img2" className="gallery-img-2" />
      <img src={imagen5} alt="Gallery Img3" className="gallery-img-3" />
      <img src={imagen8} alt="Gallery Img4" className="gallery-img-4" />
      <img src={imagen9} alt="Gallery Img5" className="gallery-img-5" />
    </section>
    <section className="container specials">
      <h1 className="heading-1">Especiales</h1>
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
      </div>
    </section>
    <section className="container blogs">
      <h1 className="heading-1">Últimos Blogs</h1>
      <div className="container-blogs">
        <div className="card-blog">
          <div className="container-img">
            <img src={imagen14} alt="Imagen Blog 1" />
            <div className="button-group-blog">
              <span>
                <i className="fa-solid fa-magnifying-glass" />
              </span>
              <span>
                <i className="fa-solid fa-link" />
              </span>
            </div>
          </div>
          <div className="content-blog">
            <h3>Nuestros Eventos</h3>
            <span>29 Julio 2023</span>
            <p>
            Conoce un poco más sobre nuestros eventos que realizamos cada mes,
              con nuestros usuarios, para conocer más de nuestras tiendas y productos.

            </p>
            <div className="btn-read-more">Leer más</div>
          </div>
        </div>
        <div className="card-blog">
          <div className="container-img">
            <img src={imagen15} alt="Imagen Blog 2" />
            <div className="button-group-blog">
              <span>
                <i className="fa-solid fa-magnifying-glass" />
              </span>
              <span>
                <i className="fa-solid fa-link" />
              </span>
            </div>
          </div>
          <div className="content-blog">
            <h3>Nuestra Historia</h3>
            <span>29 Noviembre 2022</span>
            <p>
            Podrás conocer un poco más sobre nosotros, de como poco a poco construimos esta 
            empresa que permite que las empresas colombianas sean mas reconocidas. 
            </p>
            <div className="btn-read-more">Leer más</div>
          </div>
        </div>
        <div className="card-blog">
          <div className="container-img">
            <img src={imagen16} alt="Imagen Blog 3" />
            <div className="button-group-blog">
              <span>
                <i className="fa-solid fa-magnifying-glass" />
              </span>
              <span>
                <i className="fa-solid fa-link" />
              </span>
            </div>
          </div>
          <div className="content-blog">
            <h3>Una Colombia dulce</h3>
            <span>30 Enero 2022</span>
            <p>
            En este espacio podrás conocer un poco más de como se producen los dulces en Colombia, 
            los diferentes tipos de dulces dependiendo nuestra región y mucho más. 

            </p>
            <div className="btn-read-more">Leer más</div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="footer">
    <div className="container container-footer">
      <div className="menu-footer">
        <div className="contact-info">
          <p className="title-footer">Información de Contacto</p>
          <ul>
            <li>Calle 131 #93-25 oficina 203</li>
            <li>Teléfono: 316-298-77-96</li>
            <li>EmaiL: dulMoc@soprte.com</li>
          </ul>
          <div className="social-icons">
            <span className="whatsapp"> <i className="fa-brands fa-whatsapp" /> </span>
            <span className="facebook"> <i className="fa-brands fa-facebook" /></span>
            <span className="instagram"> <i className="fa-brands fa-instagram" /></span>
            <span className="twitter"> <i className="fa-brands fa-twitter" /></span>
          </div>
        </div>
        <div className="information">
          <p className="title-footer">Información</p>
          <ul>
            <li><Link href="#">Acerca de Nosotros</Link></li>
            <li><Link to="#">Información Delivery</Link></li>
            <li><Link to="#">Politicas de Privacidad</Link></li>
            <li><Link to="#">Términos y condiciones</Link></li>
            <li><Link to="#">ContactánosLink</Link></li>
          </ul>
        </div>
        <div className="my-account">
          <p className="title-footer">Mi cuenta</p>
          <ul>
            <li><Link href="#">Mi cuenta</Link></li>
            <li><Link to="#">Historial de ordenes</Link></li>
            <li><Link to="#">Lista de deseos</Link></li>
            <li><Link to="#">Boletín</Link></li>
            <li><Link to="#">Reembolsos</Link></li>
          </ul>
        </div>
        <div className="newsletter">
          <p className="title-footer">Boletín informativo</p>
          <div className="content">
            <p>
              Suscríbete a nuestros boletines ahora y mantente al
              día con nuevas colecciones y ofertas exclusivas.
            </p>
            <input type="email" placeholder="Ingresa el correo aquí..." />
            <button>Suscríbete</button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Desarrollado por Dulceria Mochuelo © 2023
        </p>
        <img src={imagen17} alt="Pagos" />
      </div>
    </div>
  </footer>
</div>


		
    )}


  export default Pagina1;