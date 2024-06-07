import styles from "../styles/infoBox.module.css";

export default function InfoBox({
  content = "Right click a marker to learn more"
}) {
  return (
    <div className={styles.infoBox}>
      {content}
    </div>
  );
}
