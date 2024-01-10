import { Chrono } from "react-chrono";
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
          <h2>Curso 1</h2>
          <small>2018 - 2019</small>
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
          width={30}
        />
        <div className={styles.textBox}>
          <h2>Curso 1</h2>
          <small>2018 - 2019</small>
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
          <h2>Curso 1</h2>
          <small>2018 - 2019</small>
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
          <h2>Curso 1</h2>
          <small>2018 - 2019</small>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur voluptatum.
          </p>
          <span className={styles.rightContainerArrow}></span>
        </div>
      </div>
    </div>
  );
}
