import React, { useRef } from "react";
import PropTypes from "prop-types";

import "./FunctionBtnWrap.scss";

const FunctionBtnWrap = (props) => {
  const {
    sortTypesList,
    optionLevels,
    setAddBoxIsOpen,
    handleSortFormOnSubmit,
    handleFilterFormOnSubmit,
    handleSearchFormOnSubmit,
  } = props;

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
      <div className="row1">
        <button
          className="add-new-todo-btn"
          onClick={() => setAddBoxIsOpen(true)}
        >
          Thêm công việc mới
        </button>

        <form
          className="search-form"
          onSubmit={(e) => handleSearchInputSubmit(e)}
        >
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
          <input
            ref={searchInputRef}
            type="text"
            name="search"
            placeholder="Search level"
          />
        </form>
      </div>
      {/* end of row1 */}

      {/* row2  */}
      <div className="row2">
        {/* sort-todos-form  */}
        <form
          action=""
          className="sort-todos-form"
          onSubmit={(e) =>
            handleSortFormOnSubmit(e, selectSortRef.current.value)
          }
        >
          <button type="submit">Sort</button>
          <select
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
          </select>
        </form>
        {/*  end of sort-todos-form  */}

        {/*  sort-todos-form  */}
        <form
          action=""
          className="filter-todos-form"
          onSubmit={(e) =>
            handleFilterFormOnSubmit(e, selectFilterRef.current.value)
          }
        >
          <button type="submit">Filter</button>
          <select
            ref={selectFilterRef}
            name="sortTodos"
            id="sortTodos"
            className="filter-todos-wrap"
          >
            <option default>Filter type</option>
            <option value="all">All</option>
            {optionLevels.map((filterType, index) => (
              <option key={index} value={filterType.titleLevel}>
                {filterType.titleLevel}
              </option>
            ))}
          </select>
        </form>
        {/*  end of filter-todos-form  */}
      </div>
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
