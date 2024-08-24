// src/components/Header.jsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { login } from "../../redux/authSlice";

import Login from "../../views/Login/Login";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(login());
    }
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    try {
      await dispatch(logout());
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="header-wrapper header-layout1">
      <div className="header-top">
        <div className="container">
          <div className="top-innner">
            <div className="row align-items-center">
              <div className="col-sm-6 d-none d-md-block">
                <p className="top-title">Impulsado por Compensar. </p>
              </div>
              <div className="col-sm-6 text-end d-none d-md-block">
                <div className="d-flex align-items-center justify-content-end">
                  <ul className="social-links fs-xs text-white">
                    <li>
                      <a href="#" className="icon-btn6">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon-btn6">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon-btn6">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container position-relative">
          <div className="menu-inner">
            <div className="row align-items-center">
              <div className="col-6 col-lg-4 d-block d-xl-none py-3 py-xl-0 ml-4">
                <div className="header-logo">
                  <a href="index.html">
                    <img src="assets/img/logotype.png" alt="GamesPopUP" style={{ width: "100px", height: "100px" }}/>
                  </a>
                </div>
              </div>
              <div className="col-6 col-lg-8 col-xl-5 text-end text-xl-start">
                <nav
                  className="main-menu menu-style1 mobile-menu-active"
                  data-expand="992"
                >
                  <ul className="flex items-center">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li className="mega-menu-wrap menu-item-has-children">
                      <a href="#">Events</a>
                      <ul className="mega-menu">
                        <li>
                          <a href="shop.html">GAMERS</a>
                          <ul>
                            <li>
                              <a href="index.html">Minecraft</a>
                            </li>
                            <li>
                              <a href="index-2.html">GTA World</a>
                            </li>
                            <li>
                              <a href="index-3.html">League of Legends</a>
                            </li>
                            <li>
                              <a href="about.html">Free Fire</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">OTAKUS</a>
                          <ul>
                            <li>
                              <a href="player-details.html">Anime</a>
                            </li>
                            <li>
                              <a href="player-details.html">Pokemon GO</a>
                            </li>
                            <li>
                              <a href="team.html">Cosplay</a>
                            </li>
                            <li>
                              <a href="team-details.html">Manga </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">K-POP STANS</a>
                          <ul>
                            <li>
                              <a href="blog.html">Comunidad k-pop</a>
                            </li>
                            <li>
                              <a href="blog-details.html">BTS Cumpleaños</a>
                            </li>
                            <li>
                              <a href="shop.html">Clases de koreano</a>
                            </li>
                            <li>
                              <a href="shop-details.html">K-pop Coreografias</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Coleccionistas</a>
                          <ul>
                            <li>
                              <a href="tournament.html">Pokemon</a>
                            </li>
                            <li>
                              <a href="contact.html">Yugi-oh</a>
                            </li>
                            <li>
                              <a href="error.html"> Figuras Coleccionables </a>
                            </li>
                            <li>
                              <a href="error.html"> Manga </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="blog.html">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    {isLogged ? (
                      <li onClick={handleLogout}>
                        <button>
                          <a className="vs-btn gradient-btn pt-2 pb-2">
                            Logout
                          </a>
                        </button>
                      </li>
                    ) : (
                      <li onClick={handleLogin}>
                        <button>
                          <a className="vs-btn gradient-btn pt-2 pb-2">Login</a>
                        </button>
                      </li>
                    )}
                  </ul>
                </nav>
                <button
                  type="button"
                  className="vs-menu-toggle text-white d-inline-block d-lg-none"
                >
                  {" "}
                  <i className="far fa-bars"></i>
                </button>
              </div>
              <div className="col-lg-2  d-none d-xl-block w-99">
                <div className="header-logo1">
                  <a href="index.html">
                    <img
                      src="assets/img/logotype.png"
                      alt="Logo"
                      className="w-50 ml-12"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-lg-5 d-none d-xl-block">
                <div className="header-right d-flex align-items-center justify-content-end">
                  <a
                    href="contact.html"
                    className="vs-btn outline3 d-none d-xl-inline-block mr-20"
                  >
                    <i className="fab fa-twitch"></i>
                    <strong>Live Streaming</strong>
                  </a>
                  <button
                    className="icon-btn7 sideCartToggler has-badge"
                    type="button"
                  >
                    <i className="fas fa-shopping-cart"></i>
                    <span className="badge">0</span>
                  </button>
                  <ul className="header-list1">
                    <li>
                      <button className="icon-btn7 searchBoxTggler">
                        <i className="far fa-search"></i>
                      </button>
                    </li>
                    <li>
                      <button className="icon-btn7 sideMenuToggler">
                        <i className="far fa-bars"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
