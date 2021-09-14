import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AddTodoBox.scss";

const AddTodoBox = (props) => {
  const {
    newTodo,
    isEditting,
    optionLevels,
    setNewTodo,
    setAddBoxIsOpen,
    handleAddTodoBoxSubmit,
  } = props;

  const [inputIsEmpty, setInputIsEmpty] = useState(false);

  // handle when form submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (newTodo.name.trim() !== "") {
      handleAddTodoBoxSubmit();

      setAddBoxIsOpen(false);
      setInputIsEmpty(false);
    } else {
      setInputIsEmpty(true);
    }
  };

  // handle when input or select ele change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputIsEmpty(false);

    setNewTodo({
      ...newTodo,
      [name]: name === "name" ? value : JSON.parse(value),
    });
  };

  return (
    <div className="add-todo-box">
      <span className="close-box" onClick={() => setAddBoxIsOpen(false)}>
        &times;
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

          <span
            className="input-empty-alert"
            hidden={!inputIsEmpty}
            style={{ color: "red", margin: "5px 0 0 15px", fontSize: "12px" }}
          >
            Tên công việc không được để trống
          </span>
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
          <button
            onClick={(e) => {
              e.preventDefault();
              return setAddBoxIsOpen(false);
            }}
          >
            Hủy bỏ
          </button>
        </div>
      </form>
    </div>
  );
};

AddTodoBox.propTypes = {
  newTodo: PropTypes.object,
  isEditting: PropTypes.bool,
  optionLevels: PropTypes.array,
  setNewTodo: PropTypes.func,
  setAddBoxIsOpen: PropTypes.func,
  handleAddTodoBoxSubmit: PropTypes.func,
};

export default AddTodoBox;
