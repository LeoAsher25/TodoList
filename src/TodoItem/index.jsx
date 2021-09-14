import React from "react";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  const {
    todo,
    indexOfTodo,
    handleRemoveTodo,
    handleSetIsEditting,
    handleChangeLevel,
  } = props;

  return (
    <tr className="todo-item">
      <td>{indexOfTodo + 1}</td>
      <td>{todo.name}</td>
      <td className="level-box">
        <span>{todo.level.titleLevel}</span>
        <div className="change-level">
          <span
            onClick={() => handleChangeLevel("Decrease", todo, indexOfTodo)}
          >
            <i className="fas fa-chevron-up"></i>
          </span>
          <span
            onClick={() => handleChangeLevel("Increase", todo, indexOfTodo)}
          >
            <i className="fas fa-chevron-down"></i>
          </span>
        </div>
      </td>
      <td className="action-wrap ">
        <button className="edit-todo" onClick={() => handleSetIsEditting(todo)}>
          Sửa
        </button>
        <button
          className="remove-todo"
          onClick={(e) => handleRemoveTodo(todo.id)}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
};

export default TodoItem;
