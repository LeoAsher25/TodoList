import React from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

const TodoItem = (props) => {
  const {
    todo,
    indexOfTodo,
    handleRemoveTodo,
    handleSetIsEditting,
    handleChangeLevel,
  } = props;

  const getBgColor = (titleLevel) => {
    switch (titleLevel) {
      case "Không làm không sao":
        return "success";

      case "Phải làm":
        return "warning";

      case "Làm ngay":
        return "danger";
    }
  };

  return (
    <tr className="todo-item">
      <td>
        <span>{indexOfTodo + 1}</span>
      </td>
      <td>
        <span>{todo.name}</span>
      </td>
      <td className="level-box">
        <Badge bg={getBgColor(todo.level.titleLevel)}>
          {todo.level.titleLevel}
        </Badge>

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
