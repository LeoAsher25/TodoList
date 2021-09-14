import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";
import "./TodoList.scss";

const TodoList = (props) => {
  // const { todos, setTodos, handleSetIsEditting, optionLevels } = props;
  const {
    processedTodos,
    handleRemoveTodo,
    handleSetIsEditting,
    handleChangeLevel,
  } = props;
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

          {processedTodos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              indexOfTodo={index}
              handleRemoveTodo={handleRemoveTodo}
              handleSetIsEditting={handleSetIsEditting}
              handleChangeLevel={handleChangeLevel}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TodoList.propTypes = {
  processedTodos: PropTypes.array,
  handleRemoveTodo: PropTypes.func,
  handleSetIsEditting: PropTypes.func,
  handleChangeLevel: PropTypes.func,
};

export default TodoList;
