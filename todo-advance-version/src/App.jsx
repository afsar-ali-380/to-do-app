import TodoContextProvider from "./stores/TodoStore";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <>
      <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider>
    </>
  );
};

export default App;
