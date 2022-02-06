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
  const [serverError, setServerError] = React.useState(null);

  const saveHandler = (item) => {
    mainApi.createMovie(item).then((res) => {
      fetchUserMovies()
    }).catch((err) => {
      console.log(err);
    })
  }

  const deleteHandler = (item) => {
    mainApi.deleteMovie(item.main_id).then((res) => {
      fetchUserMovies()
    }).catch((err) => {
      console.log(err);
    })
  }

  const registerHandler = (name, email, password) => {
    setServerError(null)
    mainApi.signUp(name, email, password).then((res) => {
      localStorage.setItem("loggedin", '1')
      fetchUserData()
      navigate('/movies')
    }).catch((err) => {
      setServerError(`${err}. Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`);
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

  const fetchMovies = () => {
    setMovies(moviesApi.allMovies());
  }

  React.useEffect(() => {
    fetchMovies()
    if (localStorage.getItem("loggedin", '1')) {
      fetchUserData()
      fetchUserMovies()
    }
  },[currentUser]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/signup" element={
          <Register
            registerHandler={registerHandler}
            serverError={serverError}
          />}
        />
        <Route path="/signin" element={
          <Login
            loginHandler={loginHandler}
          />}
        />
        <Route path="/profile" element={
          <ProtectedRouteElement>
            <Profile
              logoutHandler={logoutHandler}
            />
          </ProtectedRouteElement>
        } />
        <Route path="/movies" element={
          <ProtectedRouteElement>
            <Movies
              movies={movies}
              userMovies={userMovies}
              saveHandler={saveHandler}
              deleteHandler={deleteHandler}
              currentUser={currentUser}
            />
          </ProtectedRouteElement>
        } />
        <Route path="/saved-movies" element={
          <ProtectedRouteElement>
            <SavedMovies
              movies={movies}
              userMovies={userMovies}
              deleteHandler={deleteHandler}
              currentUser={currentUser}
            />
          </ProtectedRouteElement>
        } />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </CurrentUserContext.Provider>
    )
}

export default App;
