// LandingPage.js
import React from "react";
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="preloader  "></div>
      <div className="sticky-header-wrap sticky-header bg-black py-1 py-sm-2 py-lg-1">
        <div className="container position-relative">
          <div className="row align-items-center justify-content-between">
            <div className="col-5 col-md-3">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="assets/img/logotype.png"
                    alt="GamesPopUP"
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-7  justify-content-around " >
              <nav className="main-menu menu-sticky1 d-none d-lg-block link-inherit">
                <ul>
                  <li>
                    <a href="index.html" className="">
                      Home
                    </a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="blog.html">Blog</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="events.html">Eventos</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Eventos</a>
                  </li>
                </ul>
              </nav>
              <button className="vs-menu-toggle text-theme border-theme d-inline-block d-lg-none">
                <i className="far fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="popup-search-box d-none d-lg-block">
        <button className="searchClose border-theme text-theme">
          <i className="fal fa-times"></i>
        </button>
        <form action="#">
          <input
            type="text"
            className="border-theme"
            placeholder="What are you looking for"
          />
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div>
      <div className="vs-menu-wrapper">
        <div className="vs-menu-area bg-dark">
          <button className="vs-menu-toggle">
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <a href="index.html">
              <img src="assets/img/logo.png" alt="Gamio" />
            </a>
          </div>
          <div className="vs-mobile-menu link-inherit"></div>
        </div>
      </div>
      <div className="sideCart-wrapper offcanvas-wrapper d-none d-lg-block">
        <div className="sidemenu-content">
          <button className="closeButton border-theme bg-theme-hover sideMenuCls2">
            <i className="far fa-times"></i>
          </button>
          <div className="widget widget_shopping_cart">
            <h3 className="widget_title">Shopping cart</h3>
            <div className="widget_shopping_cart_content">
              <ul className="cart_list">
                <li className="mini_cart_item">
                  <a href="shop.html" className="remove">
                    <i className="fal fa-trash-alt"></i>
                  </a>{" "}
                  <a href="shop.html">
                    <img
                      src="assets/img/cart/cart-img-1.png"
                      alt="Cart Image"
                    />
                    Whether a medieval
                  </a>
                  <span className="quantity">
                    1 ×{" "}
                    <span className="amount">
                      <span>$</span>100.00
                    </span>
                  </span>
                </li>
                <li className="mini_cart_item">
                  <a href="shop.html" className="remove">
                    <i className="fal fa-trash-alt"></i>
                  </a>{" "}
                  <a href="shop.html">
                    <img
                      src="assets/img/cart/cart-img-2.png"
                      alt="Cart Image"
                    />
                    Creation timelines{" "}
                  </a>
                  <span className="quantity">
                    1 ×{" "}
                    <span className="amount">
                      <span>$</span>19.00
                    </span>
                  </span>
                </li>
                <li className="mini_cart_item">
                  <a href="shop.html" className="remove">
                    <i className="fal fa-trash-alt"></i>
                  </a>{" "}
                  <a href="shop.html">
                    <img
                      src="assets/img/cart/cart-img-3.png"
                      alt="Cart Image"
                    />
                    McClintock's eye
                  </a>
                  <span className="quantity">
                    1 ×{" "}
                    <span className="amount">
                      <span>$</span>10.00
                    </span>
                  </span>
                </li>
              </ul>
              <div className="total">
                <strong>Subtotal:</strong>{" "}
                <span className="amount">
                  <span>$</span>129.00
                </span>
              </div>
              <div className="buttons">
                <a href="cart.html" className="vs-btn gradient-btn">
                  View cart
                </a>
                <a href="checkout.html" className="vs-btn black-skew">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="vs-blog-wrapper bg-dark vs-blog-layout1 link-inherit space-top space-md-bottom mt-5"
        id="blog"
      >
        <div className="container">
          <div className="section-title text-center">
            <h4 className="sec-title1 text-white mt-4">ultimos eventos</h4>
          </div>
          <div
            className="row vs-carousel arrow-white"
            data-slide-show="3"
            data-md-slide-show="2"
            data-sm-slide-show="1"
            data-xs-slide-show="1"
            data-arrows="true"
            data-xl-arrows="true"
          >
            <div className="col-lg-4">
              <div className="vs-blog">
                <div className="blog-image image-scale-hover">
                  <a href="blog-details.html">
                    <img
                      src="assets/img/blog/event1.jpg"
                      alt="Blog Image"
                      className="w-100"
                    />
                  </a>
                  <div className="blog-category">
                    <a href="blog.html">Otakus</a>
                  </div>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title text-white fs-20">
                    <a href="blog-details.html">Cosplay Day</a>
                  </h3>
                  <div className="blog-meta text-light fs-xs">
                    <a href="blog.html">
                      <i className="fal fa-calendar-alt"></i>June 21, 2025
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-user"></i>Centro Mayor
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="vs-blog">
                <div className="blog-image image-scale-hover">
                  <a href="blog-details.html">
                    <img
                      src="assets/img/blog/event2.jpg"
                      alt="Blog Image"
                      className="w-100"
                    />
                  </a>
                  <div className="blog-category">
                    <a href="blog.html">Gamers</a>
                  </div>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title text-white fs-20">
                    <a href="blog-details.html">Torneo League of Legends</a>
                  </h3>
                  <div className="blog-meta text-light fs-xs">
                    <a href="blog.html">
                      <i className="fal fa-calendar-alt"></i>Augest 21, 2025
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-user"></i>Centro Mayor
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="vs-blog">
                <div className="blog-image image-scale-hover">
                  <a href="blog-details.html">
                    <img
                      src="assets/img/blog/event3.jpg"
                      alt="Blog Image"
                      className="w-100"
                    />
                  </a>
                  <div className="blog-category">
                    <a href="blog.html">Coleccionistas</a>
                  </div>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title text-white fs-20">
                    <a href="blog-details.html">Pokemon GO Day </a>
                  </h3>
                  <div className="blog-meta text-light fs-xs">
                    <a href="blog.html">
                      <i className="fal fa-calendar-alt"></i>March 21, 2025
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-user"></i>CUR
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ver-mas flex justify-center items-center">
              <a href="blog.html" className="vs-btn gradient-btn">
                Ver mas
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="vs-member-area vs-member-layout1 bg-light-dark space-top ">
        <div className="container">
          <div className="section-title flex justify-center">
            <h2 className="sec-title1 text-white">destacado</h2>
          </div>
          <div
            className="row vs-carousel arrow-white arrow-style2"
            data-arrows="true"
            data-xl-arrows="true"
            data-lg-slide-show="4"
            data-md-slide-show="3"
            data-sm-slide-show="2"
            data-xs-slide-show="1"
            data-slide-show="4"
          >
            <div className="col-lg-3">
              <div className="vs-member">
                <div className="member-img">
                  <a href="team-details.html">
                    <img
                      src="assets/img/member/top1.jpg"
                      className="w-100 uniform-image"
                      alt="Member Image"
                    />
                  </a>
                </div>
                <div className="member-content">
                  <span className="degi">Cosplay</span>
                  <h3 className="member-name fs-20">
                    <a href="team-details.html">otakus</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="vs-member">
                <div className="member-img">
                  <a href="team-details.html">
                    <img
                      src="assets/img/member/top2.jpg"
                      className="w-100 uniform-image"
                      alt="Member Image"
                    />
                  </a>
                </div>
                <div className="member-content">
                  <span className="degi">cine</span>
                  <h3 className="member-name fs-20">
                    <a href="team-details.html">k-drama fans</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="vs-member">
                <div className="member-img">
                  <a href="team-details.html">
                    <img
                      src="assets/img/member/top3.jpg"
                      className="w-100 uniform-image"
                      alt="Member Image"
                    />
                  </a>
                </div>
                <div className="member-content">
                  <span className="degi">anime</span>
                  <h3 className="member-name fs-20">
                    <a href="team-details.html">otakus</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="vs-member">
                <div className="member-img">
                  <a href="team-details.html">
                    <img
                      src="assets/img/member/top4.jpg"
                      className="w-100 uniform-image"
                      alt="Member Image"
                    />
                  </a>
                </div>
                <div className="member-content">
                  <span className="degi">live actions</span>
                  <h3 className="member-name fs-20">
                    <a href="team-details.html">otakus</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="vs-member">
                <div className="member-img">
                  <a href="team-details.html">
                    <img
                      src="assets/img/member/top8.jpg"
                      className="w-100 uniform-image"
                      alt="Member Image"
                    />
                  </a>
                </div>
                <div className="member-content">
                  <span className="degi">streaming</span>
                  <h3 className="member-name fs-20">
                    <a href="team-details.html">gamers</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="vs-member">
                <div className="member-img">
                  <a href="team-details.html">
                    <img
                      src="assets/img/member/top6.jpg"
                      className="w-100 uniform-image"
                      alt="Member Image"
                    />
                  </a>
                </div>
                <div className="member-content">
                  <span className="degi">competencias</span>
                  <h3 className="member-name fs-20">
                    <a href="team-details.html">gamers</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="vs-member">
                <div className="member-img">
                  <a href="team-details.html">
                    <img
                      src="assets/img/member/top7.jpg"
                      className="w-100 uniform-image"
                      alt="Member Image"
                    />
                  </a>
                </div>
                <div className="member-content">
                  <span className="degi">merchan</span>
                  <h3 className="member-name fs-20">
                    <a href="team-details.html">comunidad</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="vs-member">
                <div className="member-img">
                  <a href="team-details.html">
                    <img
                      src="assets/img/member/top5.jpg"
                      className="w-100 uniform-image"
                      alt="Member Image"
                    />
                  </a>
                </div>
                <div className="member-content">
                  <span className="degi">competencias</span>
                  <h3 className="member-name fs-20">
                    <a href="team-details.html">k-pop</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vs-contact-wrapper bg-light-dark space">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title1">Contacto</span>
            <h2 className="sec-title1 text-white">Unete a una comunidad</h2>
          </div>
          <form
            action="mail.php"
            method="POST"
            className="contact-form contact-form-style1 form-dark px-40 py-20"
          >
            <div className="row">
              <div className="col-lg-6 form-group">
                <label className="text-white" for="name">
                  Ingresa Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Tu Nombre Favorito o tu apodo"
                />
                <i className="fal fa-user"></i>
              </div>
              <div className="col-lg-6 form-group">
                <label className="text-white" for="email">
                  Ingresa Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Tu Email Favorito"
                />
                <i className="fal fa-envelope"></i>
              </div>
              <div className="col-12 form-group">
                <label className="text-white" for="message">
                  Tu Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="11"
                  cols="50"
                  name="message"
                  placeholder="Cuentanos algo"
                ></textarea>
                <i className="fal fa-pencil-alt"></i>
              </div>
              <div className="col-12 form-group mb-0 text-center">
                <button type="submit" className="vs-btn gradient-btn ">
                  Enviar Mensaje
                </button>
                <p className="form-messages text-white mt-20 mb-0 text-center"></p>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="vs-newsletter-wrapper bg-dark z-index-step1  ">
        <div className="container ">
          <div className="position-relative">
            <div className="inner-wrapper bg-black position-absolute top-40 start-50 translate-middle w-100 px-60 py-20">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-6 text-center text-xl-start mb-3 mb-xl-0">
                  <span className="sub-title2 mt-2">News </span>
                  <h2 className="mb-0 text-white">
                    Obten actualizaciones en tu email
                  </h2>
                </div>
                <div className="col-md-10 col-lg-8 col-xl-6">
                  <form action="#" className="newsletter-style1 d-md-flex">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Ingresa tu email favorito"
                    />
                    <button className="vs-btn gradient-btn">
                      Subsribirse Ahora
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-wrapper footer-layout1 bg-fluid bg-major-black position-relative">
        <div
          className="bg-fluid d-none d-none d-xl-block position-absolute start-0 top-0 w-100 h-100"
          data-bg-src="assets/img/bg/footer-bg-1-1.jpg"
        ></div>
        <div className="footer-widget-wrapper  dark-style1 z-index-common">
          <div className="container">
            <div className="row justify-content-between">
              <div>
                <div className="widget footer-widget pt-0">
                  <div className="vs-widget-about">
                    <div className="d-flex gap-2 text-white mt-45">
                      <a className="icon-btn" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="icon-btn" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="icon-btn" href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                <div className="widget widget_categories footer-widget   ">
                  <h3 className="widget_title">Categorias</h3>
                  <ul>
                    <li>
                      <a href="#">Gamers</a>
                    </li>
                    <li>
                      <a href="#">Otakus</a>
                    </li>
                    <li>
                      <a href="#">Kpop Fans</a>
                    </li>
                    <li>
                      <a href="#">K-drama Fans</a>
                    </li>
                    <li>
                      <a href="#">Anime Fans</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                <div className="widget widget_nav_menu footer-widget  ">
                  <h3 className="widget_title">NEED HELP?</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="#">Company</a>
                      </li>
                      <li>
                        <a href="#">For the fans</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3">
                <div className="widget footer-widget  ">
                  <h3 className="widget_title">Contact Us</h3>
                  <div className="vs-widget-about">
                    <p className="contact-info mb-4">
                      <i className="fal fa-map-marker-alt text-white"></i>
                      Calle 26 # 68-91
                    </p>
                    <p className="contact-info">
                      <i className="fal fa-phone text-white"></i>
                      <a href="tel:+65965252561">(+57)-3507058463</a>
                    </p>
                    <p className="contact-info">
                      <i className="fal fa-envelope text-white"></i>
                      <a href="mailto:info@example.com">
                        games-pop-up@compensar.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright bg-black z-index-step1">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-auto align-self-center text-center py-3 py-xl-0 text-xl-start">
                <p className="copywrite-text">
                  Copyright &copy; 2024 <a href="index.html">Games Pop Up</a>{" "}
                  All Rights Reserved
                </p>
              </div>
              <div className="col-xl-auto d-none d-xl-block">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Request</a>
                    </li>
                    <li>
                      <a href="#">Imprint</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Cookie</a>
                    </li>
                    <li>
                      <a href="#">Content</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a href="#" className="scrollToTop icon-btn3">
        <i className="far fa-angle-up"></i>
      </a>

      <div className="vs-cursor"></div>
      <div className="vs-cursor2"></div>
    </div>
  );
};

export default LandingPage;
