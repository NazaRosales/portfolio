import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>¡Gracias por revisar mi portafolio!</h3>
      <section className={styles.socialMedia}>
        <a href="https://github.com/NazaRosales" target="_blank">
          <img src="/logos/socialmedia/github-logo.png" alt="Mi github" width={26} />
        </a>
        <a href="https://www.linkedin.com/in/nazareno-rosales/" target="_blank">
          <img src="/logos/socialmedia/linkedin-logo.png" alt="Mi linkedin" width={30} />
        </a>
      </section>
    </footer>
  );
}
