import "./style.css";
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <div>
      <TodoForm />
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
};

export default App;
