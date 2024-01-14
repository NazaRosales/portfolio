import styles from "./NavBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <div className={styles.menuMobile}>
        <div className={styles.mobileElements}>
          <img
            src="/logos/assets/menu-mobile.png"
            alt="logotipo de menu mobile."
            className={styles.menuIcon}
            onClick={handleMenuClick}
          />
          <nav>
            <ul
              style={{ display: menuVisible ? "block" : "none" }}
              onClick={handleMenuClick}
            >
              <li>
                <Link to="/">Sobre Mi</Link>
              </li>
              <li>
                <Link to="/estudios">Estudios</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/sobre-mi">Sobre Mi</Link>
          </li>
          <li>
            <Link to="/estudios">Estudios</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
