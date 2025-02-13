import PropTypes from "prop-types";
import { useState } from "react";
import TodoForm from "./TodoForm";

const TodoItem = ({ todos, setTodos, payload, index }) => {
  const onDelete = () => {
    setTodos((prev) => prev.filter((item) => item !== payload));
  };

  const [isEditing, setIsEditing] = useState(false);
  const editHandler = () => setIsEditing((prev) => !prev);

  return (
    <li>
      {isEditing ? (
        <TodoForm
          isEditing={isEditing}
          onCancel={editHandler}
          payload={payload}
          setTodos={setTodos}
          todos={todos}
        />
      ) : (
        <>
          <p>
            {index + 1}.{payload}
          </p>
          <button onClick={editHandler}>수정</button>
          <button onClick={onDelete}>삭제</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;

TodoItem.protType = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  payload: PropTypes.string,
  index: PropTypes.number,
};
