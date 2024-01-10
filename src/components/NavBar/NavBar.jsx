import styles from "./NavBar.module.css"
export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li> <a href="/proyectos">Proyectos</a></li>
                <li> <a href="/contacto">Contacto</a></li>
                <li> <a href="/sobre-mi">Sobre mi</a></li>
            </ul>
        </nav>
    )
}
