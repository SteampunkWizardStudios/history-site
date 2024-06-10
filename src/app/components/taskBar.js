import Link from "next/link";
import styles from "../styles/taskBar.module.css";

export default function TaskBar() {
  return (
    <>
      <div className={styles.taskBar}>
        <div className={styles.taskBarItem}>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </div>
        <div className={styles.taskBarItem}>
          <Link className={styles.link} href="/map">
            Map
          </Link>
        </div>
        <div className={styles.taskBarItem}>
          <Link className={styles.link} href="/bibliography">
            Bibliography
          </Link>
        </div>
      </div>
    </>
  );
}
