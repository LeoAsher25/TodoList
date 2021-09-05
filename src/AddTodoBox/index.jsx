import React from "react";
import PropTypes from "prop-types";
import './AddTodoBox.scss';

const AddTodoBox = (props) => {
  const { todos, setTodos, handleOpenAddTodoBox } = props;

  function handleFormSubmit(e) {
    e.preventDefault();
    const formEle = document.querySelector(".form-wrap");
    const nameInputEle = formEle.querySelector("input[type='text']");
    const levelSelectEle = formEle.querySelector("select");

    if (nameInputEle.value.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        name: nameInputEle.value,
        level: levelSelectEle.value,
      };
      setTodos([...todos, newTodo]);
    }
    nameInputEle.value = "";
    levelSelectEle.value = "Nguy cấp";
  }



  return (
    <div className="add-todo-box">
      <span className="close-box" onClick={(e) =>handleOpenAddTodoBox(e)}> &times; </span>
      <h3 className="heading">Thêm công việc mới: </h3>

      <form action="" className="form-wrap">
        <div className="form-gr">
          <label htmlFor="todoName">Tên công việc: </label>
          <input type="text" id="todoName" placeholder="nhập công việc" />
        </div>

        <div className="form-gr">
          <label htmlFor="todoLevel">Mức độ</label>

          <select name="todoLevel" id="todoLevel">
            <option value="Nguy cấp">Nguy cấp</option>
            <option value="Nguy cấp 2">Nguy cấp 2</option>
            <option value="Nguy cấp 3">Nguy cấp 3</option>
          </select>
        </div>

        <div className="btn-wrap">
          <button type="submit" onClick={(e) => handleFormSubmit(e)}>
            Thêm
          </button>
          <button onClick={(e) =>handleOpenAddTodoBox(e)}>Hủy bỏ</button>
        </div>
      </form>
    </div>
  );
};

AddTodoBox.propTypes = {
  todo: PropTypes.array,
  handleAddTodo: PropTypes.func,
};

export default AddTodoBox;
