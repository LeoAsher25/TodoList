import { useRef, useState } from "react";
import AddTodoBox from "./AddTodoBox";
import "./App.scss";
import TodoList from "./TodoList";

function App() {
  const SelectEleRef = useRef(null);

  // const optionLevels = ["Không làm không sao", "Phải làm", "Làm ngay"];
  const optionLevels = [
    {
      titleLevel: "Không làm không sao",
      orderLevel: 3,
    },
    {
      titleLevel: "Phải làm",
      orderLevel: 2,
    },
    {
      titleLevel: "Làm ngay",
      orderLevel: 1,
    },
  ];

  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Sleeping",
      level: optionLevels[0],
    },
  ]);

  const [newTodo, setNewTodo] = useState({
    id: 0,
    name: "",
    level: optionLevels[0],
  });

  const [isEditting, setIsEditting] = useState(false);

  const [addBoxIsOpen, setAddBoxIsOpen] = useState(true);

  const handleSetIsEditting = (todo) => {
    setNewTodo({
      id: todo.id,
      name: todo.name,
      level: todo.level,
    });
    setIsEditting(true);
    setAddBoxIsOpen(true);
  };

  const handleSortTodo = (e) => {
    const sortType = e.target.value;
    const tmpTodos = [...todos];

    switch (sortType) {
      case "Tên: a-z":
        tmpTodos.sort((t1, t2) => {
          let t1name = t1.name.toLowerCase();
          let t2name = t2.name.toLowerCase();
          if (t1name < t2name) {
            return -1;
          }
          if (t1name > t2name) {
            return 1;
          }
          return 0;
        });
        break;

      case "Tên: z-a":
        tmpTodos.sort((t1, t2) => {
          let t1name = t1.name.toLowerCase();
          let t2name = t2.name.toLowerCase();
          if (t1name > t2name) {
            return -1;
          }
          if (t1name < t2name) {
            return 1;
          }
          return 0;
        });
        break;

      case "Mức độ: Tăng dần":
        tmpTodos.sort((t1, t2) => t2.level.orderLevel - t1.level.orderLevel);
        break;

      case "Mức độ: Giảm dần":
        tmpTodos.sort((t1, t2) => t1.level.orderLevel - t2.level.orderLevel);
        break;

      default:
        break;
    }

    setTodos(tmpTodos);
  };

  return (
    <div className="app">
      <h3 className="app-title">To Do List - Team Web D19</h3>
      <div className="app-content">
        {addBoxIsOpen ? (
          <AddTodoBox
            todos={todos}
            setTodos={setTodos}
            optionLevels={optionLevels}
            setAddBoxIsOpen={setAddBoxIsOpen}
            isEditting={isEditting}
            setIsEditting={setIsEditting}
            newTodo={newTodo}
            setNewTodo={setNewTodo}
          />
        ) : (
          ""
        )}

        <div className="todo-wrap">
          <div className="home-btn-wrap">
            <button
              className="add-new-todo-btn"
              onClick={() => setAddBoxIsOpen(!addBoxIsOpen)}
            >
              Thêm công việc mới
            </button>

            <form action="" className="sort-todos-form">
              <select
                ref={SelectEleRef}
                name="sortTodos"
                id="sortTodos"
                className="sort-todos-wrap"
                onChange={(e) => handleSortTodo(e)}
              >
                <option default>Sort</option>
                <option value="Tên: a-z">Tên: a-z</option>
                <option value="Tên: z-a">Tên: z-a</option>
                <option value="Mức độ: Tăng dần">Mức độ: Tăng dần</option>
                <option value="Mức độ: Giảm dần">Mức độ: Giảm dần</option>
              </select>
            </form>
          </div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            handleSetIsEditting={handleSetIsEditting}
            setNewTodo={setNewTodo}
            optionLevels={optionLevels}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
