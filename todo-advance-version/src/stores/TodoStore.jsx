import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const reducer = (currentTodos, action) => {
  switch (action.type) {
    case "ADD_NEW_TODO":
      return [
        ...currentTodos,
        { todoItem: action.payload.todoItem, dueDate: action.payload.dueDate },
      ];
    case "DELETE_TODO":
      return currentTodos.filter(
        (v) => v.todoItem !== action.payload.item.todoItem
      );
    default:
      return currentTodos;
  }
};

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);

  const addNewTodoItem = (newTodo) => {
    dispatch({ type: "ADD_NEW_TODO", payload: newTodo });
  };

  const deleteTodoItem = (item) => {
    dispatch({ type: "DELETE_TODO", payload: { item } });
  };

  const contextValues = { todos, addNewTodoItem, deleteTodoItem };

  return (
    <TodoContext.Provider value={contextValues}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
