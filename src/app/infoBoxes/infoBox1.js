import styles from "../styles/infoBoxContent.module.css";

export default function Content() {
  return (
    <>
      <div className={styles.header}>This is the other header.</div>
      <hr className={styles.hrStyle} />
      <div className={styles.body}>This is the other body.</div>
    </>
  );
}
