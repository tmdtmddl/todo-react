import "./style.css";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   console.log(requirement)
  //   console.log(detail)
  // }, [requirement, detail])
  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <ul>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo}
              payload={todo}
              setTodos={setTodos}
              todos={todos}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
