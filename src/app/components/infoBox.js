import styles from "../styles/infoBox.module.css";
import ReactMarkDown from "react-markdown";

export default function InfoBox({
  content = "# No content provided"
}) {
  return (
    <div className={styles.infoBox}>
      <ReactMarkDown>{content}</ReactMarkDown>
    </div>
  );
}
