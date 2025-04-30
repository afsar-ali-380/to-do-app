import styles from "./../styles/TodoApp.module.css";
import AddNewTodo from "./AddNewTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <>
      <div className={styles.app}>
        <h1>To Do App</h1>
        <AddNewTodo />
        <hr />
        <TodoList />
      </div>
    </>
  );
};

export default TodoApp;
