import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./AddTodoBox.scss";
import { Form } from "react-bootstrap";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const AddTodoBox = (props) => {
  const {
    newTodo,
    isEditting,
    setIsEditting,
    optionLevels,
    setNewTodo,
    setAddBoxIsOpen,
    handleAddTodoBoxSubmit,
  } = props;

  const { theme } = useContext(ThemeContext);
  const { isLightTheme, ligthTheme, darkTheme } = theme;
  const style = isLightTheme ? ligthTheme : darkTheme;

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

  const handleCloseBox = (e) => {
    e.preventDefault();
    setAddBoxIsOpen(false);
    setIsEditting(false);
    setNewTodo({
      id: 0,
      name: "",
      level: optionLevels[0],
    });
  };

  return (
    <div className="add-todo-wrap">
      <div className="overlay" onClick={() => setAddBoxIsOpen(false)}></div>
      <div
        className="add-todo-box"
        style={{ backgroundColor: style.bgColor, color: style.color }}
      >
        <Form className="form-wrap">
          <span className="close-box" onClick={(e) => handleCloseBox(e)}>
            &times;
          </span>
          <h3 className="heading">
            {isEditting ? "Edit công việc" : "Thêm công việc mới: "}{" "}
          </h3>
          <Form.Group md="4" className="form-gr">
            <Form.Label htmlFor="todoName">Tên công việc</Form.Label>
            <Form.Control
              required
              type="text"
              id="todoName"
              name="name"
              value={newTodo.name}
              onChange={(e) => handleOnChange(e)}
              placeholder="Nhập công việc"
              autoComplete="off"
              style={{ backgroundColor: style.bgColor, color: style.color }}
            />
            {inputIsEmpty ? (
              <div className="input-empty-alert">
                Tên công việc không được để trống!
              </div>
            ) : (
              ""
            )}
          </Form.Group>

          <Form.Group className="form-gr">
            <Form.Label htmlFor="todoLevel">Mức độ</Form.Label>
            <Form.Select
              aria-label="Default select example"
              id="todoLevel"
              name="level"
              value={JSON.stringify(newTodo.level)}
              onChange={(e) => handleOnChange(e)}
              style={{ backgroundColor: style.bgColor, color: style.color }}
            >
              {optionLevels.map((option, index) => (
                <option key={index} value={JSON.stringify(option)}>
                  {option.titleLevel}{" "}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <div className="btn-wrap">
            <button type="submit" onClick={(e) => handleFormSubmit(e)}>
              {!isEditting ? "Thêm" : "Save"}
            </button>
            <button
              onClick={(e) => {
                return handleCloseBox(e);
              }}
            >
              Hủy bỏ
            </button>
          </div>
        </Form>
      </div>
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
