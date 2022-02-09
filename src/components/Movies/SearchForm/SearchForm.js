import React from "react";
import FilterCheckBox from "../FilterCheckbox/FilterCheckBox";
function SearchForm(props) {
  const [text, setText] = React.useState(props.text || '')
  const [short, setShort] = React.useState(props.short === 'true')
  const [showError, setShowError] = React.useState(false)

  const submitForm = (e) => {
    e.preventDefault()

    if (props.allowEmpty || text.length >= 1) {
      setShowError(false)
      props.searchHandler(text, short)
    } else {
      setShowError(true)
    }
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
            onChange={(e) => setText(e.currentTarget.value)}
            value={text}
          />
          <button className="search-form__submit" type="submit">
            Найти
          </button>
        </div>

        {showError &&
          <div className="search-form__error">
            Нужно ввести ключевое слово
          </div>
        }

        <FilterCheckBox short={short} switchHandler={switchHandler}/>
      </form>
  )
}

export default SearchForm;
