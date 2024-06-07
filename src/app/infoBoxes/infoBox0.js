import styles from "../styles/infoBoxContent.module.css";

export default function Content() {
  return (
    <>
      <div className={styles.header}>This is the header.</div>
      <div className={styles.body}>This is the body.</div>
    </>
  );
}