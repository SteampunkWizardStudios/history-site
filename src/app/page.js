import styles from "./styles/homestyle.module.css";
import TaskBar from "./components/taskBar.js";
import Question from "./components/question.js";

export default function Home() {
  return (
    <>
      <Question />
      <TaskBar />
    </>
  );
}
