import styles from "./../styles/TodoApp.module.css";
import { useContext } from "react";
import { TodoContext } from "../stores/TodoStore";

const TodoItem = ({ item }) => {
  const { deleteTodoItem } = useContext(TodoContext);

  return (
    <li className={styles.list_Item}>
      <span>{item.todoItem}</span>
      <span>{item.dueDate}</span>
      <button type="button" onClick={() => deleteTodoItem(item)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
