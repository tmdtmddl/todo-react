import "./style.css";
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <ul>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo}
              index={index}
              payload={todo}
              setTodos={setTodos}
              todos={todos}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
