import Link from "next/link";
import { useEffect, useState } from "react";
import { stickyNav } from "../utils";

const Header = () => {
  useEffect(() => {
    stickyNav();
  }, []);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (document.querySelector("header").className.includes("animated")) {
      setTimeout(() => {
        document.querySelector("header").classList.add("opened", "show");
      }, 800);
    }
  }, [toggle]);

  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <header className={`kf-header ${toggle ? "animated" : ""}`}>
      {/* navbar */}
      <div className="kf-navbar">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            {/* logo */}
            <div className="">
              <Link href="/">
                <img src="/images/logo.svg" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
            {/* main menu */}
            <div className="kf-main-menu">
              <ul>
                <li className="px-3">
                  <Link href="/">Home</Link>
                </li>
                <li className="px-3">
                  <Link href="kebab-akabane">Our Shop</Link>
                </li>

                <li className="px-3">
                  <Link href="about">ABOUT US</Link>
                </li>
                <li className="px-3">
                  <Link href="contacts">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
            {/* menu btn */}
            <a
              href="#"
              className={`kf-menu-btn ${toggle ? "active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </a>
            {/* btn */}
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="kf-navbar-mobile">
        {/* mobile menu */}
        <div className="kf-main-menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="has-children" onClick={() => activeMenuSet("Menu")}>
              <Link href="">OUR SHOPS</Link>
              <i className="las la-angle-down" />
              <ul style={activeLi("Menu")}>
                <li>
                  <Link href="menu-coffee">Tokyo Sushi Delight</Link>
                </li>
                <li>
                  <Link href="menu-restaurant">Osaka Ramen House</Link>
                </li>
                <li>
                  <Link href="menu-restaurant">Kyoto Matcha Café</Link>
                </li>
                <li>
                  <Link href="menu-restaurant">Hokkaido Grill & BBQ</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="about">ABOUT</Link>
            </li>
            <li>
              <Link href="contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        {/* mobile topline */}
        <div className="kf-topline">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* social */}
              <div className="kf-h-social">
                <a href="facebook.com" target="blank">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="twitter.com" target="blank">
                  <i className="fab fa-twitter" />
                </a>
                <a href="instagram.com" target="blank">
                  <i className="fab fa-instagram" />
                </a>
                <a href="youtube.com" target="blank">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* hours */}
              <div className="kf-h-group">
                <i className="far fa-clock" /> <em>opening hours :</em> 08:00 am
                - 09:00 pm
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* location */}
              <div className="kf-h-group">
                <i className="fas fa-map-marker-alt" /> <em>Location :</em> 55
                main street, new york
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
