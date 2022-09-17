import styles from "../styles/Home.module.css";
import Form from "../components/form";
import Submissions from "../components/submissions";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Note Taking App</h1>
      <p>HTML 5 Local Storage & React</p>
      <Form />
    </div>
  );
}
