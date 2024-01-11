import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className={styles.contactSection}>
      <form>
        <fieldset className={styles.contactForm}>
          <legend>Contacto</legend>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" className={styles.inputField} />

          <label htmlFor="asunto">Asunto</label>
          <input type="text" id="asunto" className={styles.inputField} />

          <label htmlFor="correo">Correo</label>
          <input type="text" id="correo" className={styles.inputField} />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            cols="20"
            rows="6"
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </fieldset>
      </form>
    </section>
  );
}
