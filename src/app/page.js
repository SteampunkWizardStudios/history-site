import styles from "./styles/homestyle.module.css";
import TaskBar from "./components/taskBar.js";
import Question from "./components/question.js";

export default function Home() {
  return (
    <>
      <Question />
      <h1 className={styles.credit}>By: Elijah N.</h1>
      <h2 className={styles.credit2}>Group: Gabriel V, Zachary W, Owen R</h2>
      <TaskBar />
    </>
  );
}
