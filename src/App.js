import { useEffect, useState, useContext } from "react";
import { v1 as uuidv1 } from "uuid";

// import components
import AddTodoBox from "./AddTodoBox";
import TodoList from "./TodoList";
import FunctionBtnWrap from "./FunctionBtnWrap";
import { ThemeContext } from "./contexts/ThemeContextProvider";

// import scss
import "./App.scss";
import { Container } from "react-bootstrap";

function App() {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, ligthTheme, darkTheme } = theme;
  const style = isLightTheme ? ligthTheme : darkTheme;

  const [currentSortType, setCurrentSortType] = useState("");
  const [currentFilterType, setCurrentFilterType] = useState("");

  const sortTypesList = [
    "Tên: a-z",
    "Tên: z-a",
    "Mức độ: Tăng dần",
    "Mức độ: Giảm dần",
  ];

  const optionLevels = [
    {
      titleLevel: "Không làm không sao",
      orderLevel: 3,
      bgColor: "success",
    },
    {
      titleLevel: "Phải làm",
      orderLevel: 2,
      bgColor: "warning",
    },
    {
      titleLevel: "Làm ngay",
      orderLevel: 1,
      bgColor: "danger",
    },
  ];

  const [todos, setTodos] = useState([]);
  const [processedTodos, setProcessedTodos] = useState(todos);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [newTodo, setNewTodo] = useState({
    id: 0,
    name: "",
    level: optionLevels[0],
  });

  const [isEditting, setIsEditting] = useState(false);

  const [addBoxIsOpen, setAddBoxIsOpen] = useState(false);

  // handle edit or add todo when click submit form in AddTodoBox
  // {isEditting
  // ? (find index of edited todo in processedTodos, then replace tmpTodos to edited todo)
  // : (add newTodo to the end of todos) }
  const handleAddTodoBoxSubmit = () => {
    if (isEditting) {
      const tmpTodos = [...todos];
      const index = todos.findIndex((todo) => todo.id === newTodo.id);
      tmpTodos.splice(index, 1, newTodo);

      setTodos(sorting(filtering(tmpTodos)));
      setProcessedTodos([...tmpTodos]);
      setIsEditting(false);
    } else {
      newTodo.id = uuidv1();
      setTodos([...todos, newTodo]);
      setProcessedTodos([...todos, newTodo]);
    }

    setNewTodo({
      id: 0,
      name: "",
      level: optionLevels[0],
    });
  };

  // handle when click "Sửa" button of todoItem in table todolist
  // take a param and pass this param to setNewTodo
  const handleSetIsEditting = (todo) => {
    setNewTodo({
      id: todo.id,
      name: todo.name,
      level: todo.level,
    });
    setIsEditting(true);
    setAddBoxIsOpen(true);
  };

  // handle when click on "Sort" button in FunctionBtnWrap
  // takes a param d pass this param to setCurrentSortType
  const handleSortFormOnSubmit = (e, sortType) => {
    e.preventDefault();
    setCurrentSortType(sortType);
  };

  // handle when click on "Filter" button in FunctionBtnWrap
  // takes a param and pass this param to setCurrentFilterType
  const handleFilterFormOnSubmit = (e, filterType) => {
    e.preventDefault();
    setCurrentFilterType(filterType);
  };

  const handleSearchFormOnSubmit = (searchTerm) => {
    const searchedTodos = [];
    searchTerm = searchTerm.toLowerCase().trim();
    todos.forEach((todo) => {
      if (
        todo.id.toString().includes(searchTerm) ||
        todo.name.toLowerCase().includes(searchTerm) ||
        todo.level.titleLevel.toLowerCase().includes(searchTerm)
      ) {
        searchedTodos.push(todo);
      }
    });
    setProcessedTodos(sorting(filtering(searchedTodos)));
  };

  // handle sorting,
  function sorting(Todos) {
    const tmpTodos = [...Todos];
    switch (currentSortType) {
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
    // setProcessedTodos([...tmpTodos]);
    return tmpTodos;
  }

  // handle filtering
  function filtering(Todos) {
    let tmpTodos = [];
    if (
      optionLevels.findIndex(
        (level) => level.titleLevel === currentFilterType
      ) !== -1
    ) {
      tmpTodos = Todos.filter(
        (todo) => todo.level.titleLevel === currentFilterType
      );
    } else {
      tmpTodos = [...Todos];
    }
    // setProcessedTodos(tmpTodos);
    return tmpTodos;
  }

  // handle to remove the selected todo when click "Xóa" btn in TodoItem
  function handleRemoveTodo(id) {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  }

  // handle change level of todo when click on level box in table
  // take three params: changeType, todo, index
  const handleChangeLevel = (changeType, todo, setUpLevel, setDownLevel) => {
    let indexInOptionLevels = optionLevels.findIndex(
      (item) => item.titleLevel === todo.level.titleLevel
    );

    switch (changeType) {
      case "Decrease":
        setUpLevel(0.8);
        if (indexInOptionLevels === 0) {
          setDownLevel(0.2);
        } else if (indexInOptionLevels === 1) {
          setDownLevel(0.2);
          indexInOptionLevels -= 1;
        } else {
          indexInOptionLevels -= 1;
        }
        break;

      case "Increase":
        setDownLevel(0.8);
        if (indexInOptionLevels === optionLevels.length - 1) {
          setUpLevel(0.2);
        } else if (indexInOptionLevels === optionLevels.length - 2) {
          setUpLevel(0.2);
          indexInOptionLevels += 1;
        } else {
          indexInOptionLevels += 1;
        }
        break;

      default:
        break;
    }

    todo.level = optionLevels[indexInOptionLevels];
    const tmpTodos = [...todos];
    const index = todos.findIndex((item) => item.id === todo.id);
    tmpTodos.splice(index, 1, todo);
    setProcessedTodos(sorting(filtering(tmpTodos)));
  };

  useEffect(() => {
    setProcessedTodos([...filtering(todos)]);
  }, [todos.length, currentFilterType]);

  useEffect(() => {
    setProcessedTodos(sorting(todos));
  }, [todos.length, currentSortType]);

  return (
    <div
      className="app"
      style={{ backgroundColor: style.bgColor, color: style.color }}
    >
      <Container className="app">
        <h3 className="app-title">LA's Task</h3>
        <div className="app-content">
          {addBoxIsOpen ? (
            <AddTodoBox
              hidden={!addBoxIsOpen}
              newTodo={newTodo}
              isEditting={isEditting}
              setIsEditting={setIsEditting}
              optionLevels={optionLevels}
              setNewTodo={setNewTodo}
              setAddBoxIsOpen={setAddBoxIsOpen}
              handleAddTodoBoxSubmit={handleAddTodoBoxSubmit}
            />
          ) : (
            ""
          )}

          <div className="todo-wrap">
            <FunctionBtnWrap
              sortTypesList={sortTypesList}
              optionLevels={optionLevels}
              setAddBoxIsOpen={setAddBoxIsOpen}
              handleSortFormOnSubmit={handleSortFormOnSubmit}
              handleFilterFormOnSubmit={handleFilterFormOnSubmit}
              handleSearchFormOnSubmit={handleSearchFormOnSubmit}
            />

            <TodoList
              processedTodos={processedTodos}
              optionLevels={optionLevels}
              handleRemoveTodo={handleRemoveTodo}
              handleSetIsEditting={handleSetIsEditting}
              handleChangeLevel={handleChangeLevel}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
