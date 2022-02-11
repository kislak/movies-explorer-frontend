import React from "react";
function FilterCheckBox(props) {
  return (
    <div className="filter-check-box" >
      <div onClick={props.switchHandler} className={`filter-check-box__container ${!props.short && 'filter-check-box__container_off'}`}>
        <span className={`filter-check-box__circle ${!props.short && 'search-form__short-circle_off'}`}>
        </span>
      </div>
      <label
        htmlFor="search-form-short"
        className="filter-check-box__label"
      >Короткометражки
      </label>
    </div>
  )
}

export default FilterCheckBox;
