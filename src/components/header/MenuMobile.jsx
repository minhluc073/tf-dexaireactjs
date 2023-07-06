import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

function MenuMobile({ handleCloseMenu }) {
  // active menu current
  const { pathname } = useLocation();
  const [current, setCurrent] = useState("home");

  useEffect(() => {
    if (pathname) {
      let activePath = pathname.slice(1, pathname.length);
      setCurrent(activePath ? activePath : "home");
    }
  }, [pathname]);

  const handleCurrent = useCallback(
    (param = "") => {
      setCurrent(param);
    },
    [current]
  );

  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <ul className="navigation">
      <li
        className={`${
          current === "home" ? "active" : ""
        } menu-item-has-children tg-mega-menu-has-children`}
        onClick={() => handleCurrent("home")}
      >
        <h5 onClick={() => handleToggle(1)}>Home</h5>
        <div
          className="tg-mega-menu-wrap black-bg"
          style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
        >
          <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-4">
            <div className="col">
              <div className="mega-menu-item">
                <div className="mega-menu-thumb" onClick={handleCloseMenu}>
                  <Link to="/">
                    <img src="assets/img/images/home_img01.jpg" alt="" />
                  </Link>
                </div>
                <div className="mega-menu-content">
                  <h4 className="title" onClick={handleCloseMenu}>
                    <Link to="/">01: Ai Content Writer</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mega-menu-item">
                <div className="mega-menu-thumb" onClick={handleCloseMenu}>
                  <Link to="/index-2">
                    <img src="assets/img/images/home_img02.jpg" alt="" />
                  </Link>
                </div>
                <div className="mega-menu-content">
                  <h4 className="title" onClick={handleCloseMenu}>
                    <Link to="/index-2">02: Text to Video Ai</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mega-menu-item">
                <div className="mega-menu-thumb" onClick={handleCloseMenu}>
                  <Link to="/index-3">
                    <img src="assets/img/images/home_img03.jpg" alt="" />
                  </Link>
                </div>
                <div className="mega-menu-content">
                  <h4 className="title" onClick={handleCloseMenu}>
                    <Link to="/index-3">03:Text to Speech Ai</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mega-menu-item">
                <div className="mega-menu-thumb">
                  <img src="assets/img/images/coming_soon.jpg" alt="" />
                </div>
                <div className="mega-menu-content">
                  <h4 className="title">04: Coming Soon</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-btn" onClick={() => handleToggle(1)}>
          <span className="fas fa-angle-down" />
        </div>
      </li>
      <li onClick={handleCloseMenu}>
        <Link to="/about">About Us</Link>
      </li>
      <li className="menu-item-has-children">
        <h5 onClick={() => handleToggle(2)}>Pages</h5>
        <ul
          className="sub-menu"
          style={{
            display: `${isActive.key == 2 ? "block" : "none"}`,
            transition: "all 700ms ease",
          }}
        >
          <li onClick={handleCloseMenu}>
            <Link to="/work">How It Work</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/faq">Faq Page</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/help">Help Center</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/job">Job Page</Link>
          </li>
          <li>
            <Link to="/job-details">Job Details</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/login">Login Page</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/404">404 Error Page</Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => handleToggle(2)}>
          <span className="fas fa-angle-down" />
        </div>
      </li>
      <li className="menu-item-has-children">
        <h5 onClick={() => handleToggle(3)}>News</h5>
        <ul
          className="sub-menu"
          style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
        >
          <li onClick={handleCloseMenu}>
            <Link to="/blog">Our Blog</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/blog-details">Blog Details</Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => handleToggle(3)}>
          <span className="fas fa-angle-down" />
        </div>
      </li>
      <li onClick={handleCloseMenu}>
        <Link to="/contact">contacts</Link>
      </li>
    </ul>
  );
}

export default MenuMobile;
