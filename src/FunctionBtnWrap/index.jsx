import React, { useRef, useContext, useEffect } from "react";
import PropTypes from "prop-types";

import "./FunctionBtnWrap.scss";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import ToggleThemeBtn from "../ToggleThemeBtn";

const FunctionBtnWrap = (props) => {
  const {
    sortTypesList,
    optionLevels,
    setAddBoxIsOpen,
    handleSortFormOnSubmit,
    handleFilterFormOnSubmit,
    handleSearchFormOnSubmit,
  } = props;

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLightTheme, ligthTheme, darkTheme } = theme;
  const style = isLightTheme ? ligthTheme : darkTheme;

  const bgColorBtn = isLightTheme ? "#83D8FF" : "#749DD6";

  // declare DOM ref
  const selectSortRef = useRef(null);
  const selectFilterRef = useRef(null);
  const searchInputRef = useRef(null);

  const handleSearchInputSubmit = (e) => {
    e.preventDefault();
    handleSearchFormOnSubmit(searchInputRef.current.value);
    searchInputRef.current.value = "";
    console.log(searchInputRef.current.value);
  };

  return (
    <div className="function-btn-wrap">
      {/* row1 */}
      <Row className="">
        <Col xs="12" sm="6" className="col">
          <div className="button-wrap">
            <Button
              className="add-new-todo-btn"
              onClick={() => setAddBoxIsOpen(true)}
            >
              <i className="fas fa-plus"></i>
              Thêm công việc mới
            </Button>

            <ToggleThemeBtn
              toggleTheme={toggleTheme}
              isLightTheme={isLightTheme}
              bgColorBtn={bgColorBtn}
            />
          </div>
        </Col>

        <Col xs="12" sm="6" className="col">
          <Form
            className="search-form"
            onSubmit={(e) => handleSearchInputSubmit(e)}
          >
            <Button style={{ backgroundColor: bgColorBtn }} type="submit">
              <i className="fas fa-search"></i>
            </Button>
            <Form.Control
              style={{ backgroundColor: style.bgColor, color: style.color }}
              ref={searchInputRef}
              type="text"
              name="search"
              placeholder="Search level"
              autoComplete="off"
            />
          </Form>
        </Col>
      </Row>
      {/* end of row1 */}

      {/* row2  */}
      <Row>
        <Col xs="12" sm="6" className="col">
          <Form
            action=""
            className="sort-todos-form"
            onSubmit={(e) =>
              handleSortFormOnSubmit(e, selectSortRef.current.value)
            }
          >
            <Button
              style={{ backgroundColor: bgColorBtn }}
              variant="info"
              type="submit"
            >
              Sort
            </Button>
            <Form.Select
              style={{ backgroundColor: style.bgColor, color: style.color }}
              ref={selectSortRef}
              name="sortTodos"
              id="sortTodos"
              className="sort-todos-wrap"
            >
              <option default>Sort type</option>
              {sortTypesList.map((sortType, index) => (
                <option key={index} value={sortType}>
                  {sortType}
                </option>
              ))}
            </Form.Select>
          </Form>
        </Col>
        {/*  end of sort-todos-form  */}

        {/*  sort-todos-form  */}
        <Col xs="12" sm="6" className="col">
          <Form
            action=""
            className="filter-todos-form"
            onSubmit={(e) =>
              handleFilterFormOnSubmit(e, selectFilterRef.current.value)
            }
          >
            <Button
              style={{ backgroundColor: bgColorBtn }}
              variant="info"
              type="submit"
            >
              Filter
            </Button>
            <Form.Select
              style={{ backgroundColor: style.bgColor, color: style.color }}
              ref={selectFilterRef}
              name="sortTodos"
              id="sortTodos"
              className="filter-todos-wrap"
            >
              <option default>Filter level</option>
              <option value="all">All</option>
              {optionLevels.map((filterType, index) => (
                <option key={index} value={filterType.titleLevel}>
                  {filterType.titleLevel}
                </option>
              ))}
            </Form.Select>
          </Form>
        </Col>
        {/*  end of filter-todos-form  */}
      </Row>
      {/* end of row2 */}
    </div>
  );
};

FunctionBtnWrap.propTypes = {
  sortTypesList: PropTypes.array,
  optionLevels: PropTypes.array,
  setAddBoxIsOpen: PropTypes.func,
  handleSortFormOnSubmit: PropTypes.func,
  handleFilterFormOnSubmit: PropTypes.func,
  handleSearchFormOnSubmit: PropTypes.func,
};

export default FunctionBtnWrap;
