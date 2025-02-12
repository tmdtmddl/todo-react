import PropTypes from "prop-types";
import { useState } from "react";

const TodoForm = ({ payload, isEditing, todos, setTodos, onCancel }) => {
  const [todo, setTodo] = useState(payload ?? "");
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.lenght === 0) {
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
    <form action="">
      <div>
        <label htmlFor="item">장 볼 물건</label>
        <input type="text" id="item" />
      </div>
      <button>추가</button>
    </form>
  );
};

export default TodoForm;

TodoForm.PropTypes = {
  payload: PropTypes.string,
  isEditing: PropTypes.bool,

  todos: PropTypes.array,
  setTodos: PropTypes.func,
  onCancel: PropTypes,
};
