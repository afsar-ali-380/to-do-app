import styles from "./../styles/TodoApp.module.css";
import { staticTodoItems } from "../constants/staticTodoItems";
import { useState } from "react";
import AddNewTodo from "./AddNewTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todoItems, setTodoItem] = useState(staticTodoItems);

  const addNewTodoItem = (todoItem, dueDate) => {
    setTodoItem((prevState) => [...prevState, { todoItem, dueDate }]);
  };

  const deleteTodoItem = (todo) => {
    setTodoItem((prevState) =>
      prevState.filter((v) => v.todoItem !== todo.todoItem)
    );
  };

  return (
    <>
      <div className={styles.app}>
        <h1>To Do App</h1>
        <AddNewTodo addNewTodoItem={addNewTodoItem} />
        <hr />
        <TodoList todoItems={todoItems} deleteTodoItem={deleteTodoItem} />
      </div>
    </>
  );
};

export default TodoApp;
