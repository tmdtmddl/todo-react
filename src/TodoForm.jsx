import PropTypes from "prop-types";
import { useState, useRef } from "react";

const TodoForm = ({ payload, isEditing, todos, setTodos, onCancel }) => {
  const [todo, setTodo] = useState(payload ?? "");
  const onChange = (e) => setTodo(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (todo.length === 0) {
      alert("아무것도 입력되자 않았습니다");
      return;
    }

    const foundTodo = todos.find((item) => item === todo);
    if (foundTodo) {
      alert("중복된 값입니다");
      return;
    }

    setTodos((prev) => {
      let copy = [...prev];

      if (isEditing) {
        const index = todos.findIndex((item) => item === payload);

        if (index) {
          copy.splice(index, 1);
        }
      } else {
        copy.unshift(todo);
      }

      return copy;
    });

    alert(isEditing ? "수정되었습니다" : "추가되었습니다");

    setTodo("");
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <div>
        <label htmlFor="item">장볼 물건</label>
        <input type="text" id="item" value={todo} onChange={onChange} />
      </div>
      <button>{isEditing ? "수정" : "추가"}</button>
      {isEditing && (
        <button type="button" onClick={onCancel}>
          취소
        </button>
      )}
    </form>
  );
};

export default TodoForm;

TodoForm.propTypes = {
  payload: PropTypes.string,
  isEditing: PropTypes.bool,

  todos: PropTypes.array,
  setTodos: PropTypes.func,

  onCancel: PropTypes.func,
};
