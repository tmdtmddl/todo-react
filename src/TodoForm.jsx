import PropTypes from "prop-types";
import { useState, useRef } from "react";

const TodoForm = ({ payload, isEditing, todos, setTodos, oncancel }) => {
  const [todo, setTodo] = useState(payload ?? "");

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (todo.length === 0) {
      alert("");
      return;
    }
    const foundTodo = todos.find((item) => item === todo);
    if (foundTodo) {
      alert("");
      return;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="item">장 볼 물건</label>
        <input type="text" id="item" onChange={onChange} />
      </div>
      <button>추가</button>
    </form>
  );
};

export default TodoForm;

TodoForm.prototypes = {
  payload: PropTypes.string,
  isEditing: PropTypes.bool,

  todos: PropTypes.array,
  setTodos: PropTypes.func,

  oncancel: PropTypes.func,
};
