import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <div className={styles.menuMobile}>
        <div className= {styles.mobileElements}>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.menuIcon}
            onClick={handleMenuClick}
          />
          <nav>
            <ul style={{ display: menuVisible ? "block" : "none" }}>
              <li>
                <a href="/proyectos">Proyectos</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
              <li>
                <a href="/sobre-mi">Sobre mi</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="/proyectos">Proyectos</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
          <li>
            <a href="/sobre-mi">Sobre mi</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
