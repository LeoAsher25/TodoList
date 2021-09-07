import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AddTodoBox.scss";

const AddTodoBox = (props) => {
  const { todos, setTodos, setAddBoxIsOpen } = props;

  const [newTodo, setNewTodo] = useState({
    id: 0,
    name: "",
    level: "Nguy cấp",
  });

  // handle when form submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTodo.name.trim() != "") {
      newTodo.id = todos.length + 1;

      setTodos([...todos, newTodo]);

      setNewTodo({
        id: 0,
        name: "",
        level: "Nguy cấp",
      });

      setAddBoxIsOpen(false);
    }
  };

  // handle when input or select ele change
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  return (
    <div className="add-todo-box">
      <span className="close-box" onClick={() => setAddBoxIsOpen(false)}>
        {" "}
        &times;{" "}
      </span>
      <h3 className="heading">Thêm công việc mới: </h3>

      <form action="" className="form-wrap">
        <div className="form-gr">
          <label htmlFor="todoName">Tên công việc: </label>
          <input
            type="text"
            id="todoName"
            name="name"
            value={newTodo.name}
            onChange={(e) => handleOnChange(e)}
            placeholder="nhập công việc"
            autoComplete="off"
          />
        </div>

        <div className="form-gr">
          <label htmlFor="todoLevel">Mức độ</label>

          <select
            id="todoLevel"
            name="level"
            value={newTodo.level}
            onChange={(e) => handleOnChange(e)}
          >
            <option value="Nguy cấp">Nguy cấp</option>
            <option value="Nguy cấp 2">Nguy cấp 2</option>
            <option value="Nguy cấp 3">Nguy cấp 3</option>
          </select>
        </div>

        <div className="btn-wrap">
          <button type="submit" onClick={(e) => handleFormSubmit(e)}>
            Thêm
          </button>
          <button onClick={() => setAddBoxIsOpen(false)}>Hủy bỏ</button>
        </div>
      </form>
    </div>
  );
};

AddTodoBox.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  setAddBoxIsOpen: PropTypes.func,
};

export default AddTodoBox;
