import React from "react";
import {Link} from 'react-router-dom';
import "../../estilos/estilopagi.css"
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
          <h1 className="logo"><a href="/">Dulceria Mi dulce Onlei </a></h1>
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
          <li><Link to="#">Inicio Sesion</Link></li>
          <li><Link to="#">Registrate</Link></li>
          <li><Link to="#">Nosotros</Link></li>
          <li><Link to="#">Productos</Link></li>
          <li><Link to="#">Contactanos</Link></li>
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
      <Link to="#">Comprar ahora</Link>
      
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
          <p>LLámenos 24/7 al 123-456-7890</p>
        </div>
      </div>
    </section>
    <section className="container top-categories">
      <h1 className="heading-1">Mejores Categorías</h1>
      <div className="container-categories">
        <div className="card-category category-moca">
          <p>Café moca</p>
          <span>Ver más</span>
        </div>
        <div className="card-category category-expreso">
          <p>Expreso Americano</p>
          <span>Ver más</span>
        </div>
        <div className="card-category category-capuchino">
          <p>Capuchino</p>
          <span>Ver más</span>
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
            <img src="img/cafe-irish.jpg" alt="Cafe Irish" />
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
            <h3>Cafe Irish</h3>
            <span className="add-cart">
              <i className="fa-solid fa-basket-shopping" />
            </span>
            <p className="price">$4.60 <span>$5.30</span></p>
          </div>
        </div>
        {/* Producto 2 */}
        <div className="card-product">
          <div className="container-img">
            <img src="img/cafe-ingles.jpg" alt="Cafe incafe-ingles.jpg" />
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
            <h3>Cafe Inglés</h3>
            <span className="add-cart">
              <i className="fa-solid fa-basket-shopping" />
            </span>
            <p className="price">$5.70 <span>$7.30</span></p>
          </div>
        </div>
        {/*  */}
        <div className="card-product">
          <div className="container-img">
            <img src="img/cafe-australiano.jpg" alt="Cafe Australiano" />
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
            <h3>Cafe Australiano</h3>
            <span className="add-cart">
              <i className="fa-solid fa-basket-shopping" />
            </span>
            <p className="price">$3.20</p>
          </div>
        </div>
        {/*  */}
        <div className="card-product">
          <div className="container-img">
            <img src="img/cafe-helado.jpg" alt="Cafe Helado" />
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
            <h3>Cafe Helado</h3>
            <span className="add-cart">
              <i className="fa-solid fa-basket-shopping" />
            </span>
            <p className="price">$5.60</p>
          </div>
        </div>
      </div>
    </section>
    <section className="gallery">
      <img src="img/gallery1.jpg" alt="Gallery Img1" className="gallery-img-1" /><img src="img/gallery2.jpg" alt="Gallery Img2" className="gallery-img-2" /><img src="img/gallery3.jpg" alt="Gallery Img3" className="gallery-img-3" /><img src="img/gallery4.jpg" alt="Gallery Img4" className="gallery-img-4" /><img src="img/gallery5.jpg" alt="Gallery Img5" className="gallery-img-5" />
    </section>
    <section className="container specials">
      <h1 className="heading-1">Especiales</h1>
      <div className="container-products">
        {/* Producto 1 */}
        <div className="card-product">
          <div className="container-img">
            <img src="img/cafe-irish.jpg" alt="Cafe Irish" />
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
            <h3>Cafe Irish</h3>
            <span className="add-cart">
              <i className="fa-solid fa-basket-shopping" />
            </span>
            <p className="price">$4.60 <span>$5.30</span></p>
          </div>
        </div>
        {/* Producto 2 */}
        <div className="card-product">
          <div className="container-img">
            <img src="img/cafe-ingles.jpg" alt="Cafe incafe-ingles.jpg" />
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
            <h3>Cafe Inglés</h3>
            <span className="add-cart">
              <i className="fa-solid fa-basket-shopping" />
            </span>
            <p className="price">$5.70 <span>$7.30</span></p>
          </div>
        </div>
        {/*  */}
        <div className="card-product">
          <div className="container-img">
            <img src="img/cafe-viena.jpg" alt="Cafe Viena" />
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
            <h3>Cafe Viena</h3>
            <span className="add-cart">
              <i className="fa-solid fa-basket-shopping" />
            </span>
            <p className="price">$3.85 <span>$5.50</span></p>
          </div>
        </div>
        {/*  */}
        <div className="card-product">
          <div className="container-img">
            <img src="img/cafe-liqueurs.jpg" alt="Cafe Liqueurs" />
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
            <h3>Cafe Liqueurs</h3>
            <span className="add-cart">
              <i className="fa-solid fa-basket-shopping" />
            </span>
            <p className="price">$5.60</p>
          </div>
        </div>
      </div>
    </section>
    <section className="container blogs">
      <h1 className="heading-1">Últimos Blogs</h1>
      <div className="container-blogs">
        <div className="card-blog">
          <div className="container-img">
            <img src="img/blog-1.jpg" alt="Imagen Blog 1" />
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
            <h3>Lorem, ipsum dolor sit</h3>
            <span>29 Noviembre 2022</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Iste, molestiae! Ratione et, dolore ipsum
              quaerat iure illum reprehenderit non maxime amet dolor
              voluptas facilis corporis, consequatur eius est sunt
              suscipit?
            </p>
            <div className="btn-read-more">Leer más</div>
          </div>
        </div>
        <div className="card-blog">
          <div className="container-img">
            <img src="img/blog-2.jpg" alt="Imagen Blog 2" />
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
            <h3>Lorem, ipsum dolor sit</h3>
            <span>29 Noviembre 2022</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Iste, molestiae! Ratione et, dolore ipsum
              quaerat iure illum reprehenderit non maxime amet dolor
              voluptas facilis corporis, consequatur eius est sunt
              suscipit?
            </p>
            <div className="btn-read-more">Leer más</div>
          </div>
        </div>
        <div className="card-blog">
          <div className="container-img">
            <img src="img/blog-3.jpg" alt="Imagen Blog 3" />
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
            <h3>Lorem, ipsum dolor sit</h3>
            <span>29 Noviembre 2022</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Iste, molestiae! Ratione et, dolore ipsum
              quaerat iure illum reprehenderit non maxime amet dolor
              voluptas facilis corporis, consequatur eius est sunt
              suscipit?
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
            <li>
              Dirección: 71 Pennington Lane Vernon Rockville, CT
              06066
            </li>
            <li>Teléfono: 123-456-7890</li>
            <li>Fax: 55555300</li>
            <li>EmaiL: baristas@support.com</li>
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
        <img src="../imagenes/payment.png" alt="Pagos" />
      </div>
    </div>
  </footer>
</div>


		
    )}


  export default Pagina1;