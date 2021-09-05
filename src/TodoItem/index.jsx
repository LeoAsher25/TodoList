import React from "react";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  const { todo, handleRemoveTodo } = props;



  return (
    <tr className="todo-item">
      <td>{todo.id}</td>
      <td>{todo.name}</td>
      <td>{todo.level}</td>
      <td  className="action-wrap ">
        <button className="edit-todo">Sửa</button>
        <button className="remove-todo" onClick={(e) => handleRemoveTodo(e, todo.id)} >Xóa</button>
      </td>
    </tr>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
};

export default TodoItem;
