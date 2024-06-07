import styles from "../styles/infoBox.module.css";
import ReactMarkDown from "react-markdown";

export default function InfoBox({
  content = "## Right click a marker to learn more"
}) {
  return (
    <div className={styles.infoBox}>
      <ReactMarkDown>{content}</ReactMarkDown>
    </div>
  );
}
