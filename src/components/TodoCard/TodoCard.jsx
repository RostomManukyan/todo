import { useState } from 'react';
import styles from './TodoCard.module.css';

function TodoCard({ titleTask, description, onDelete, id, onEdit }) {
  const [title, setTitle] = useState(titleTask);
  const [desc, setDesc] = useState(description);
  const [isEditable, setIsEditable] = useState(true);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDesc(event.target.value);
  };

  const toggleEdit = () => {
    setIsEditable((prev) => !prev);
  };

  const handleEdit = () => {
    if (title.length <= 0 || desc.length <= 0) return;
    let newObj = {
      title,
      description:desc
    }

    onEdit(id, newObj)
    toggleEdit()
  }
  return (
    <div className={styles.todoCard}>
      <h1 className={styles.txt}>Title:</h1>
      <input
        type="text"
        value={title}
        onChange={handleChangeTitle}
        placeholder="Title"
        className={styles.input}
        disabled={isEditable}
      />
      <h1 className={styles.txt}>Description:</h1>
      <textarea
        type="text"
        value={desc}
        onChange={handleChangeDescription}
        placeholder="Description"
        className={styles.textarea}
        disabled={isEditable}
      />

      {
        isEditable ? <button className={styles.button} onClick={toggleEdit}>Edit</button>
          : <button className={styles.button} onClick={handleEdit}>Save</button>
      }
      <button onClick={() => { onDelete(id) }} className={styles.button}>
        Delete
      </button>
    </div>
  );
}
export default TodoCard;
