import React, { useContext } from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";
import "./TodoList.scss";
import { Table } from "react-bootstrap";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const TodoList = (props) => {
  // const { todos, setTodos, handleSetIsEditting, optionLevels } = props;
  const {
    processedTodos,
    optionLevels,
    handleRemoveTodo,
    handleSetIsEditting,
    handleChangeLevel,
  } = props;

  const { theme } = useContext(ThemeContext);
  const { isLightTheme, ligthTheme, darkTheme } = theme;
  const style = isLightTheme ? ligthTheme : darkTheme;

  return (
    <div className="todo-list">
      {/* <table border="1" cellPadding="0" cellSpacing="0"> */}
      <Table
        bordered
        style={{ backgroundColor: style.bgColor, color: style.color, borderColor: "#aaa" }}
      >
        <thead>
          <tr className="table-header">
            <th width="20">STT</th>
            <th width="250">Tên công việc</th>
            <th width="250">Mức độ</th>
            <th width="200">Hành động</th>
          </tr>
        </thead>

        <tbody>
          {processedTodos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              indexOfTodo={index}
              optionLevels={optionLevels}
              handleRemoveTodo={handleRemoveTodo}
              handleSetIsEditting={handleSetIsEditting}
              handleChangeLevel={handleChangeLevel}
            />
          ))}
        </tbody>
        {/* </table> */}
      </Table>
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
