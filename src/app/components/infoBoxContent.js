import styles from "../styles/infoBoxContent.module.css";

export default function Content({
  title = "Placeholder title",
  content = "Placeholder content",
}) {
  return (
    <>
      <div className={styles.header}>{title}</div>
      <hr className={styles.hrStyle} />
      <div className={styles.body}>{content}</div>
    </>
  );
}