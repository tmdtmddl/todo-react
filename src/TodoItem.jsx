import PropTypes from "prop-types";
import { useState } from "react";
import TodoForm from "./TodoForm";

const TodoItem = () => {
  const onDelete = () =>
    setTodos((prev) => prev.filter((item) => item !== payload));
  const [isEditing, setIsEditing] = useState(false);
  const editHeandler = () => setIsEditing((prev) => !prev);

  return (
    <li>
      {isEditing ? (
        <TodoForm
          isEditing={isEditing}
          onCancel={oncancel}
          payload={payload}
          setTodos={setTodos}
          todos={todos}
        />
      ) : (
        <>
          <p>
            {index + 1}.{payload}
          </p>
          <button>수정</button>
          <button>삭제</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  payload: PropTypes.string,
  index: PropTypes.number,
};
