import { saveAs } from "file-saver";
import styles from "./DownloadCV.module.css";
export default function DownloadCV() {
  const handleDownload = () => {
    const cvName = "DESARROLLO WEB - NAZARENO ROSALES - CURRICULUM.pdf";
    saveAs(`/public/documents/${cvName}`, cvName);
  };
  return (
    <>
      <button className={styles.btnDownload} onClick={handleDownload}>
        Descargar CV
      </button>
    </>
  );
}
