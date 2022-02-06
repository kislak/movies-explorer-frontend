import React from "react";

import {
  Routes,
  Route
} from "react-router-dom/index";

import Main from '../Main/Main.js'
import Movies from '../Movies/Movies.js'
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'
import Profile from '../Profile/Profile.js'
import NotFound from '../NotFound/NotFound.js'
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js"
import { useNavigate } from "react-router-dom/index";
import ProtectedRouteElement from "../ProtectedRouteElement";

function App(props) {
  const navigate = useNavigate();
  const [movies, setMovies] = React.useState([]);
  const [userMovies, setUserMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([])
  const [savedFilteredMovies, setSavedFilteredMovies] = React.useState([])

  const SHORT_DURATION = 40

  const searchSavedHandler = (text, shortFlag) => {
    const result =  savedMovies.filter((item) => {
      if (shortFlag && item.duration > SHORT_DURATION) {
        return false
      }

      if (!text) {
        return true
      }

      return (
        (item.nameRU && item.nameRU.toUpperCase().includes(text.toUpperCase())) ||
        (item.nameEN && item.nameEN.toUpperCase().includes(text.toUpperCase()))
      )
    })

    setSavedFilteredMovies(result)
  }

  const moviesWithRefs = movies.map((movie) => {
    let userMovie = userMovies.find((userMovie) => userMovie.movieId === movie.id)
    movie.main_id = (userMovie && userMovie._id)
    return movie
  }).filter((movie) => { return movie.main_id  })


  // const searchHandler = (text, shortFlag) => {
  //   const result = movies.filter((item) => {
  //     if (shortFlag && item.duration > SHORT_DURATION) {
  //       return false
  //     }
  //     return (
  //       (item.nameRU && item.nameRU.toUpperCase().includes(text.toUpperCase())) ||
  //       (item.nameEN && item.nameEN.toUpperCase().includes(text.toUpperCase()))
  //     )
  //   })
  //
  //   setFilteredMovies(result)
  // }

  const saveHandler = (item) => {
    mainApi.createMovie(item).then((res) => {
      item.main_id = res._id

      setSavedMovies(moviesWithRefs)
      // let result = filteredMovies.map((i) => {
      //   return (i.id === item.id) ? item : i
      // })

      // setFilteredMovies(result)
    }).catch((err) => {
      console.log(err);
    })
  }

  const deleteHandler = (item) => {
    mainApi.deleteMovie(item.main_id).then((res) => {
      console.log(res)
      item.main_id = undefined;

      // let result = filteredMovies.map((i) => {
      //   if (i.id === item.id){
      //     i.main_id = null;
      //     return i;
      //   } else {
      //     return i
      //   }
      // })
      // setFilteredMovies(result)
      //

      let result = savedMovies.filter(i => i.id !== item.id)
      setSavedMovies(result)

      result = savedFilteredMovies.filter(i => i.id !== item.id)
      setSavedFilteredMovies(result)

    }).catch((err) => {
      console.log(err);
    })
  }

  const fetchUserData = () => {
    mainApi.getUser().then((user) => {
      setCurrentUser(user)
    }).catch((err) => {
      console.log(err);
    })
  }

  const fetchUserMovies = () => {
    mainApi.getMovies().then((movies) => {
      setUserMovies(movies)
    }).catch((err) => {
      console.log(err);
      return []
    })
  }

  const registerHandler = (name, email, password) => {
    mainApi.signUp(name, email, password).then((res) => {
      localStorage.setItem("loggedin", '1')
      fetchUserData()

      navigate('/movies')
    }).catch((err) => {
      console.log(err);
    })
  }

  const loginHandler = (email, password) => {
    mainApi.signIn(email, password).then((res) => {
      localStorage.setItem("loggedin", '1')
      fetchUserData()

      navigate('/movies')
    }).catch((err) => {
      console.log(err);
    })
  }

  const logoutHandler = () => {
    mainApi.signOut().then((res) => {
      localStorage.setItem("loggedin", '0')
      navigate('/')
      setCurrentUser({})
    }).catch((err) => {
      console.log(err);
    })
  }

  React.useEffect(() => {
    if (localStorage.getItem("loggedin", '1')) {
      fetchUserData()
      fetchUserMovies()
    }
    setMovies(moviesApi.allMovies());
    setSavedMovies(moviesWithRefs);
    setSavedFilteredMovies(moviesWithRefs);
  },[]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/signup" element={<Register registerHandler={registerHandler} />} />
        <Route path="/signin" element={<Login loginHandler={loginHandler} />} />
        <Route path="/profile" element={
          <ProtectedRouteElement>
            <Profile logoutHandler={logoutHandler}/>
          </ProtectedRouteElement>
        } />
        <Route path="/movies" element={
          <ProtectedRouteElement>
            <Movies
              // filteredMovies={filteredMovies}
              movies={movies}
              saveHandler={saveHandler}
              deleteHandler={deleteHandler}
            />
          </ProtectedRouteElement>
        } />
        <Route path="/saved-movies" element={
          <ProtectedRouteElement>
            <SavedMovies
              savedMovies={savedMovies}
              savedFilteredMovies={savedFilteredMovies}
              searchSavedHandler={searchSavedHandler}
              deleteHandler={deleteHandler}
            />
          </ProtectedRouteElement>
        } />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </CurrentUserContext.Provider>
    )
}

export default App;
