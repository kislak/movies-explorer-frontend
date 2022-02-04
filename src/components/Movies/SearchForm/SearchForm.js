import React from "react";
import FilterCheckBox from "../FilterCheckbox/FilterCheckBox";
function SearchForm(props) {
  const [text, setText] = React.useState('')
  const [short, setShort] = React.useState(false)

  const submitForm = (e) => {
    e.preventDefault()
    props.searchHandler(text, short)
  }

  const switchHandler = () => {
    setShort( !short )
  }

  return (
      <form className="search-form" name="search-form" onSubmit={submitForm}>
        <div className="search-form__bar">
          <input
            id="search-form-input"
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            autoComplete="off"
            required
            onChange={(e) => setText(e.currentTarget.value)}
            value={text}
          />
          <button className="search-form__submit" type="submit">
            Найти
          </button>
        </div>

        <FilterCheckBox short={short} switchHandler={switchHandler}/>
      </form>
  )
}

export default SearchForm;
