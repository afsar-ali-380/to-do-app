import styles from "./../styles/TodoApp.module.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todoItems, deleteTodoItem }) => {
  return (
    <ul className={styles.list}>
      {todoItems.map((v, i) => (
        <TodoItem key={i} item={v} deleteTodoItem={deleteTodoItem} />
      ))}
    </ul>
  );
};

export default TodoList;
