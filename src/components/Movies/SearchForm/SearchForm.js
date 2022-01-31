import React from "react";
import FilterCheckBox from "../FilterCheckbox/FilterCheckBox";
function SearchForm(props) {
  return (
      <form className="search-form" name="search-form">
        <div className="search-form__bar">
          <input
            id="search-form-input"
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            autoComplete="off"
            required
          />
          <button className="search-form__submit" type="submit">
            Найти
          </button>
        </div>
        <FilterCheckBox isEnabled={true}/>
      </form>
  )
}

export default SearchForm;
