import Link from "next/link";
import styles from '../styles/taskBar.module.css';

export default function TaskBar() {
    return (
        <>
            <div className={styles.taskBar}>
                <Link href="/">Home</Link>
                <Link href="/map">Map</Link>
            </div>
        </>
    );
}