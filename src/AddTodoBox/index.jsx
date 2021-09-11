import React from "react";
import PropTypes from "prop-types";
import "./AddTodoBox.scss";

const AddTodoBox = (props) => {
  const {
    todos,
    setTodos,
    optionLevels,
    setAddBoxIsOpen,
    isEditting,
    setIsEditting,
    newTodo,
    setNewTodo,
  } = props;

  // handle when form submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (newTodo.name.trim() !== "") {
      if (isEditting) {
        const tmpTodos = [...todos];
        const index = todos.findIndex((todo) => todo.id === newTodo.id);
        tmpTodos.splice(index, 1, newTodo);

        setTodos([...tmpTodos]);
        setIsEditting(false);
      } else {
        newTodo.id = todos.length + 1;
        setTodos([...todos, newTodo]);
      }

      setNewTodo({
        id: 0,
        name: "",
        level: optionLevels[0],
      });

      setAddBoxIsOpen(false);
    }
  };

  // handle when input or select ele change
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewTodo({
      ...newTodo,
      [name]: name === "name" ? value : JSON.parse(value),
    });
  };

  return (
    <div className="add-todo-box">
      <span className="close-box" onClick={() => setAddBoxIsOpen(false)}>
        {" "}
        &times;{" "}
      </span>
      <h3 className="heading">
        {isEditting ? "Edit công việc" : "Thêm công việc mới: "}{" "}
      </h3>

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
            value={JSON.stringify(newTodo.level)}
            onChange={(e) => handleOnChange(e)}
          >
            {optionLevels.map((option, index) => (
              <option key={index} value={JSON.stringify(option)}>
                {option.titleLevel}{" "}
              </option>
            ))}
          </select>
        </div>

        <div className="btn-wrap">
          <button type="submit" onClick={(e) => handleFormSubmit(e)}>
            {!isEditting ? "Thêm" : "Save"}
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
  isEditting: PropTypes.bool,
  setIsEditting: PropTypes.func,
  newTodo: PropTypes.object,
  setNewTodo: PropTypes.func,
};

export default AddTodoBox;
