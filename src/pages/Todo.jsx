import { useState, useEffect } from 'react';
import TodoCard from '../components/TodoCard/TodoCard';

const TODO_URL = 'http://localhost:3000/todos';

function Todo() {
  const [tasksArr, setTasksArr] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchTodos = async () => {
    const response = await fetch(TODO_URL);
    const data = await response.json();
    setTasksArr(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleNewItem = async () => {
    if (!title || !description) return;
    const newTodo = { title, description };
    try {
      const response = await fetch(TODO_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      const savedTodo = await response.json();
      setTasksArr(prev => [...prev, savedTodo]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  const updateTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`${TODO_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type":   "application/json" },
        body: JSON.stringify(updatedTask),
      });
      const updated = await response.json();
      setTasksArr(prev =>
        prev.map(task => (task.id === id ? updated : task))
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  const deleteTask = async (id) => {
    try {
      const res = await fetch(`${TODO_URL}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setTasksArr(prevTasks => prevTasks.filter(task => task.id !== id));
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="centerContainer">
      <div className="addTaskContainer">
        <label className="label">Title:</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />

        <label className="label">Description:</label>
        <textarea
          rows="5"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea"
        />

        <button onClick={handleNewItem} className="btn">
          Add new Item
        </button>
      </div>

      <div className="cardsContainer">
        {tasksArr.map((item) => (
          <TodoCard
            key={item.id}
            id={item.id}
            titleTask={item.title}
            description={item.description}
            onEdit={updateTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
