import styles from "../styles/Home.module.css";
import Form from "../components/form";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Note Taking App</h1>
      <p>React</p>
      <Form />
    </div>
  );
}
