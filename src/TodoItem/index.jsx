import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

const TodoItem = (props) => {
  const {
    todo,
    indexOfTodo,
    optionLevels,
    handleRemoveTodo,
    handleSetIsEditting,
    handleChangeLevel,
  } = props;

  const [disableUpLevel, setUpLevel] = useState(0.8);
  const [disableDownLevel, setDownLevel] = useState(0.8);

  useEffect(() => {
    const index = optionLevels.findIndex(
      (item) => item.titleLevel === todo.level.titleLevel
    );
    setUpLevel(index === optionLevels.length - 1 ? 0.2 : 0.8);
    setDownLevel(index === 0 ? 0.2 : 0.8);
  }, []);

  return (
    <tr className="todo-item">
      <td>
        <span>{indexOfTodo + 1}</span>
      </td>
      <td>
        <span>{todo.name}</span>
      </td>
      <td className="level-box">
        <Badge bg={todo.level.bgColor}>{todo.level.titleLevel}</Badge>

        <div className="change-level">
          <span
            style={{ opacity: disableUpLevel }}
            onClick={() =>
              handleChangeLevel("Increase", todo, setUpLevel, setDownLevel)
            }
          >
            <i className="fas fa-chevron-up"></i>
          </span>
          <span
            style={{ opacity: disableDownLevel }}
            onClick={() =>
              handleChangeLevel("Decrease", todo, setUpLevel, setDownLevel)
            }
          >
            <i className="fas fa-chevron-down"></i>
          </span>
        </div>
      </td>
      <td className="action-wrap ">
        <button className="edit-todo" onClick={() => handleSetIsEditting(todo)}>
          <span>Sửa</span>
        </button>
        <button
          className="remove-todo"
          onClick={() => handleRemoveTodo(todo.id)}
        >
          <span>Xóa</span>
        </button>
      </td>
    </tr>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
};

export default TodoItem;
