import styles from "./NewPost.module.css";
import { useState } from "react";
function NewPost({ close , onAdd}) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
    const hendleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }
    const hendleContentChange = (event) => {
        setContent(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(author, content);
        setAuthor("");
        setContent("");
        close();
    }
  return (
    <form className={styles.modal} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Add New Post</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name">Author Name:</label>
        <input 
          id="name"
          type="text"
          placeholder="Enter author name"
          className={styles.input}
          autoFocus
          value={author}
          onChange={hendleAuthorChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="content">Post Content:</label>
        <textarea
          id="content"
          placeholder="Enter post content"
          className={styles.textarea}
          rows="4"
          value={content}
          onChange={hendleContentChange}
        />
      </div>

      <div className={styles.buttonGroup}>
        <button type="button" className={styles.cancelButton} onClick={close}>
          Cancel
        </button>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewPost;