import styles from "../styles/infoBox.module.css";

export default function InfoBox({
  title = "Placeholder InfoBox title",
  body = "This is a placeholder InfoBox text.",
}) {
  return (
    <div className={styles.infoBox}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
    </div>
  );
}
