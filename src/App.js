import {  useState } from "react";
import AddTodoBox from "./AddTodoBox";
import "./App.scss";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Sleeping",
      level: "nguy cấp",
    },
    {
      id: 2,
      name: "Sleeping lần 2",
      level: "nguy cấp 2",
    },
    {
      id: 3,
      name: "Sleeping  lần 3",
      level: "nguy cấp 3",
    },
  ]);

  let addBoxIsOpen = false;

  function handleOpenAddTodoBox(e) {
    e.preventDefault();
    const addTodoBoxEle = document.querySelector(".add-todo-box");
    console.log(addTodoBoxEle)
    if(addTodoBoxEle){
      addTodoBoxEle.classList.toggle("active");
    }
  }


  return (
    <div className="app">
      <h3 className="app-title">To Do List - Team Web D19</h3>
      <div className="app-content">
        {/* <div className="add-todo-box"> */}
          <AddTodoBox todos={todos} setTodos={setTodos} handleOpenAddTodoBox={handleOpenAddTodoBox} />
        {/* </div> */}

        <div className="todo-wrap">
          <button className="add-new-todo-btn" 
          onClick={(e) => handleOpenAddTodoBox(e)}  >Thêm công việc mới</button>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
