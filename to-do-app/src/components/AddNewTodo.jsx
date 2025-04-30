import { useState } from "react";
import styles from "./../styles/TodoApp.module.css";

const AddNewTodo = ({ addNewTodoItem }) => {
  const [getTodoItem, setGetTodoItem] = useState("");
  const [getDueDate, setGetDueDate] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "todoItem") {
      setGetTodoItem(value);
    } else if (name === "dueDate") {
      setGetDueDate(value);
    }
  };

  return (
    <>
      <div className={styles.addNewTodo}>
        <input
          type="text"
          name="todoItem"
          placeholder="Enter Todo Here"
          onChange={handleChange}
          value={getTodoItem}
        />
        <input
          type="date"
          name="dueDate"
          onChange={handleChange}
          value={getDueDate}
        />
        <button
          type="button"
          onClick={() => addNewTodoItem(getTodoItem, getDueDate)}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddNewTodo;
