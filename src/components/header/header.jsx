import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
        <header>
            <div id="sticky-header" className="menu-area transparent-header">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <i className="fas fa-bars" />
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className="active menu-item-has-children tg-mega-menu-has-children">
                        <a href="#">Home</a>
                        <div className="tg-mega-menu-wrap black-bg">
                          <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-4">
                            <div className="col">
                              <div className="mega-menu-item active">
                                <div className="mega-menu-thumb">
                                  <a href="index.html">
                                    <img
                                      src="assets/img/images/home_img01.jpg"
                                      alt
                                    />
                                  </a>
                                </div>
                                <div className="mega-menu-content">
                                  <h4 className="title">
                                    <a href="index.html">
                                      01: Ai Content Writer
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="mega-menu-item">
                                <div className="mega-menu-thumb">
                                  <a href="index-2.html">
                                    <img
                                      src="assets/img/images/home_img02.jpg"
                                      alt
                                    />
                                  </a>
                                </div>
                                <div className="mega-menu-content">
                                  <h4 className="title">
                                    <a href="index-2.html">
                                      02: Text to Video Ai
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="mega-menu-item">
                                <div className="mega-menu-thumb">
                                  <a href="index-3.html">
                                    <img
                                      src="assets/img/images/home_img03.jpg"
                                      alt
                                    />
                                  </a>
                                </div>
                                <div className="mega-menu-content">
                                  <h4 className="title">
                                    <a href="index-3.html">
                                      03:Text to Speech Ai
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="mega-menu-item">
                                <div className="mega-menu-thumb">
                                  <img
                                    src="assets/img/images/coming_soon.jpg"
                                    alt
                                  />
                                </div>
                                <div className="mega-menu-content">
                                  <h4 className="title">04: Coming Soon</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="work.html">How It Work</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq Page</a>
                          </li>
                          <li>
                            <a href="help.html">Help Center</a>
                          </li>
                          <li>
                            <a href="job.html">Job Page</a>
                          </li>
                          <li>
                            <a href="job-details.html">Job Details</a>
                          </li>
                          <li>
                            <a href="login.html">Login Page</a>
                          </li>
                          <li>
                            <a href="error.html">404 Error Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">News</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">Our Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">contacts</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="header-lang">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <img src="assets/img/icon/united-states.jpg" alt />
                            EN
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <a className="dropdown-item" href="index.html">
                              <img src="assets/img/icon/russia.jpg" alt />
                              RUS
                            </a>
                            <a className="dropdown-item" href="index.html">
                              <img src="assets/img/icon/india.jpg" alt />
                              IND
                            </a>
                            <a className="dropdown-item" href="index.html">
                              <img src="assets/img/icon/bangladesh.jpg" alt />
                              BAN
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="header-btn">
                        <a href="login.html" className="btn">
                          sign up
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* Mobile Menu  */}
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn">
                    <i className="fas fa-times" />
                  </div>
                  <div className="nav-logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="menu-outer">
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                  </div>
                  <div className="social-links">
                    <ul className="clearfix list-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop" />
              {/* End Mobile Menu */}
            </div>
          </div>
        </div>
            </div>
        </header>
    </>
    
  );
};

export default Header;
