import styles from "./../styles/TodoApp.module.css";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoContext } from "../stores/TodoStore";
import EmptyTodo from "./EmptyTodo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return todos.length ? (
    <ul className={styles.list}>
      {todos.map((v, i) => (
        <TodoItem key={i} item={v} />
      ))}
    </ul>
  ) : (
    <EmptyTodo />
  );
};

export default TodoList;
