import styles from "./../styles/TodoApp.module.css";

const TodoItem = ({ item, deleteTodoItem }) => {
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
