import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Form() {
  const [note, setNote] = useState("");
  const [submissions, setSubmissions] = useState([]);

  function handleChange(e) {
    setNote(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmissions([...submissions, note]);
    console.log(submissions);
    setNote("");
  }

  const removeNote = index => {
    const newSubmissions = [...submissions];
    newSubmissions.splice(index, 1);
    setSubmissions(newSubmissions);
  };
  
  const noteItem = submissions.map((note, index) => (
    <div key={index}>
      {note}
      <button onClick={removeNote}>
        delete
      </button>
    </div>
  ));

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>What's on your mind?</label>
        <br />
        <textarea name="note" value={note} onChange={handleChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {noteItem}
    </div>
  );
}
