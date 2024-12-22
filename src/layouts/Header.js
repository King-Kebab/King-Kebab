import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    document.body.style.overflow = !mobileMenu ? "hidden" : "visible";
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    document.body.style.overflow = "visible";
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.header_inner}>
        <div className="container">
          <div className={styles.header_wrapper}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  alt="King Kebab"
                  width={150}
                  height={75}
                  priority
                />
              </Link>
            </div>

            <nav className={`${styles.nav_menu} ${mobileMenu ? styles.active : ""}`}>
              <ul className={styles.nav_list}>
                <li className={router.pathname === "/" ? styles.active : ""}>
                  <Link href="/" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className={router.pathname === "/about" ? styles.active : ""}>
                  <Link href="/about" onClick={closeMobileMenu}>
                    About Us
                  </Link>
                </li>
                <li className={styles.has_dropdown}>
                  <span className={styles.nav_link}>Our Shops</span>
                  <ul className={styles.dropdown_menu}>
                    <li>
                      <Link href="/kebab-akabane" onClick={closeMobileMenu}>
                        King Kebab Akabane
                      </Link>
                    </li>
                    <li>
                      <Link href="/kebab-jujo" onClick={closeMobileMenu}>
                        King Kebab Jujo
                      </Link>
                    </li>
                    <li>
                      <Link href="/kebab-higashijujo" onClick={closeMobileMenu}>
                        King Kebab Higashijujo
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={router.pathname === "/contacts" ? styles.active : ""}>
                  <Link href="/contacts" onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className={styles.header_right}>
              <div className={styles.halal_badge}>
                <Image
                  src="/assets/images/halal.png"
                  alt="Halal Certified"
                  width={40}
                  height={40}
                />
                <span>Halal Certified</span>
              </div>
              
              <button
                className={`${styles.hamburger} ${mobileMenu ? styles.active : ""}`}
                onClick={toggleMobileMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;