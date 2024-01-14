import styles from "./TimeLine.module.css";
export default function TimeLine() {
  return (
    <div className={styles.timeline}>
      <div className={styles.containerLeft}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/800px-Target_Corporation_logo_%28vector%29.svg.png"
          alt="exaple image"
          width={30}
        />
        <div className={styles.textBox}>
          <h2>Curso Básico de Programación</h2>
          <small>27/01/2018</small>
          <p>
            En este curso aprendí las bases de la programación en JavaScript. Es
            impartido por Platzi y cuenta con 34 Horas de teoría y práctica.
          </p>
          <span className={styles.leftContainerArrow}></span>
        </div>
      </div>
      <div className={styles.containerRight}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/800px-Target_Corporation_logo_%28vector%29.svg.png"
          alt="exaple image"
          width={30}
        />
        <div className={styles.textBox}>
          <h2>Curso Básico de JavaScript</h2>
          <small>9/03/2020</small>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur voluptatum.
          </p>
          <span className={styles.rightContainerArrow}></span>
        </div>
      </div>
      <div className={styles.containerLeft}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/800px-Target_Corporation_logo_%28vector%29.svg.png"
          alt="exaple image"
          width={30}
        />
        <div className={styles.textBox}>
          <h2>Curso de Git y Github</h2>
          <small>14/03/2020</small>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur voluptatum.
          </p>
          <span className={styles.leftContainerArrow}></span>
        </div>
      </div>
      <div className={styles.containerRight}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/800px-Target_Corporation_logo_%28vector%29.svg.png"
          alt="exaple image"
        />
        <div className={styles.textBox}>
          <h2>Desarrollo Web FullStack</h2>
          <small>2023</small>
          <p>
            Bootcamp Con mas de 800 horas de código. Con conocimientos en: HTML,
            CSS, JavaScript, Node.js, React.js, Redux.js y SQL
          </p>
          <span className={styles.rightContainerArrow}></span>
        </div>
      </div>
    </div>
  );
}
