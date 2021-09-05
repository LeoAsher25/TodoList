import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";
import './TodoList.scss';

const TodoList = (props) => {
  const { todos, setTodos } = props;

  function handleRemoveTodo(e, id) {
    // e.prevenDefault();
    let newTodos = todos.filter(todo => todo.id !== id)
    newTodos.forEach((todo, index) => todo.id = index+1)
    setTodos(newTodos)
  }
  
  return (
    <div className="todo-list">
      <table  border="1" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr className="table-header">
            <th width="80">STT</th>
            <th width="300">Tên công việc</th>
            <th width="200">Mức độ</th>
            <th width="200">Hành động</th>
          </tr>

          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} handleRemoveTodo={handleRemoveTodo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
};

export default TodoList;
