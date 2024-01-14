import styles from "./TimeLine.module.css";
import estudios from "./estudios.js";
export default function TimeLine() {
  return (
    <>
      <h3>Mis Formación en Tecnología</h3>
      <div className={styles.timeline}>
        {estudios &&
          estudios.map((estudio, index) => {
            return (
              <div
                key={index + estudio?.title}
                className={
                  index % 2 === 0 ? styles.containerLeft : styles.containerRight
                }
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/800px-Target_Corporation_logo_%28vector%29.svg.png"
                  alt="exaple image"
                  width={30}
                />
                <div className={styles.textBox}>
                  <h2>{estudio?.title}</h2>
                  <small>{estudio?.date}</small>
                  <p>{estudio?.description}</p>
                  <span
                    className={
                      index % 2 === 0
                        ? styles.leftContainerArrow
                        : styles.rightContainerArrow
                    }
                  ></span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
