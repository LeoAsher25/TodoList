import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";
import "./TodoList.scss";

const TodoList = (props) => {
  const { todos, setTodos, handleSetIsEditting, optionLevels } = props;

  function handleRemoveTodo(e, id) {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  }

  const handleChangeLevel = (e, isDecrease, todo, index) => {
    let indexInOptionLevels = optionLevels.findIndex(
      (item) => item.titleLevel === todo.level.titleLevel
    );

    switch (isDecrease) {
      case 0:
        if (indexInOptionLevels === optionLevels.length - 1) {
          indexInOptionLevels = 0;
        } else {
          indexInOptionLevels += 1;
        }
        break;

      case 1:
        if (indexInOptionLevels === 0) {
          indexInOptionLevels = optionLevels.length - 1;
        } else {
          indexInOptionLevels -= 1;
        }
        break;

      default:
        break;
    }

    todo.level = optionLevels[indexInOptionLevels];
    const tmpTodos = [...todos];
    tmpTodos.splice(index, 1, todo);
    setTodos([...tmpTodos]);
  };

  return (
    <div className="todo-list">
      <table border="1" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr className="table-header">
            <th width="80">STT</th>
            <th width="250">Tên công việc</th>
            <th width="250">Mức độ</th>
            <th width="200">Hành động</th>
          </tr>

          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleRemoveTodo={handleRemoveTodo}
              handleSetIsEditting={handleSetIsEditting}
              index={index}
              optionLevels={optionLevels}
              handleChangeLevel={handleChangeLevel}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  handleRemoveTodo: PropTypes.func,
};

export default TodoList;
