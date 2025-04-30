import styles from "./../styles/TodoApp.module.css";
import { useContext, useState } from "react";
import { TodoContext } from "../stores/TodoStore";

const AddNewTodo = () => {
  const { addNewTodoItem } = useContext(TodoContext);

  const [newTodo, setNewTodo] = useState({
    todoItem: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div className={styles.addNewTodo}>
        <input
          type="text"
          name="todoItem"
          placeholder="Enter Todo Here"
          onChange={handleChange}
          value={newTodo.todoItem}
        />
        <input
          type="date"
          name="dueDate"
          onChange={handleChange}
          value={newTodo.dueDate}
        />
        <button type="button" onClick={() => addNewTodoItem(newTodo)}>
          Add
        </button>
      </div>
    </>
  );
};

export default AddNewTodo;
