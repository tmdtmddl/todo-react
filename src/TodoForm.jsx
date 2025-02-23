import PropTypes from "prop-types";
import { useState, useRef } from "react";

const TodoForm = ({ payload, isEditing, todos, setTodos, onCancel }) => {
  const [todo, setTodo] = useState(payload ?? "");

  const onChange = (e) => setTodo(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (todo.length === 0) {
      alert("아무것도 입력되지 않았습니다.");
      return;
    }

    const foundTodo = todos.find((item) => item === todo);
    if (foundTodo) {
      alert("중복된 값입니다.");
      return;
    }

    setTodos((prev) => {
      // 수정할때
      console.log({ payload });
      console.log({ todo });
      let copy = [...prev];
      // console.log(copy);
      if (isEditing) {
        const index = todos.findIndex((t) => t === payload);
        // 수정중일때 todo에서 페이로드랑 같은게 있는지 검사

        if (index >= 0) {
          copy[index] = todo;
          // 카피의 인덱스를 지금만들고 있는 투두랑 바꿔치기 해달라
          // console.log(index);
          console.log(payload);
          console.log(todo);
          // console.log(copy);
        }
      } else {
        copy.unshift(todo);
        // 수정중이 아닐때 카피에 추가해줘
      }

      return copy;
    });

    alert(isEditing ? "수정되었습니다." : "추가되었습니다.");

    setTodo("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="item">장 볼 물건</label>
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
