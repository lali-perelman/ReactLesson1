import styles from "./NewPost.module.css";

function NewPost() {
  return (
    <form className={styles.modal}>
      <h2 className={styles.title}>Add New Post</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name">Author Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter author name"
          className={styles.input}
          autoFocus
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="content">Post Content:</label>
        <textarea
          id="content"
          placeholder="Enter post content"
          className={styles.textarea}
          rows="4"
        />
      </div>

      <div className={styles.buttonGroup}>
        <button type="button" className={styles.cancelButton}>
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