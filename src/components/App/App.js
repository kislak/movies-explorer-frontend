import React from "react";

import { Route, Switch, withRouter, useHistory } from 'react-router-dom';

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
import ProtectedRoute from "../ProtectedRoute";


function App(props) {
  const [movies, setMovies] = React.useState([]);
  const [userMovies, setUserMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [serverError, setServerError] = React.useState(undefined);
  const history = useHistory();

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
    setServerError(undefined)
    mainApi.signUp(name, email, password).then((res) => {
      localStorage.setItem("loggedin", '1')
      fetchUserData()
      history.push('/movies');
    }).catch((err) => {
      setServerError(`${err}. Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`);
      setTimeout(() => setServerError(undefined), 10000);
      console.log(err);
    })
  }

  const loginHandler = (email, password) => {
    mainApi.signIn(email, password).then((res) => {
      localStorage.setItem("loggedin", '1')
      fetchUserData()
      fetchUserMovies()
      history.push('/movies');
    }).catch((err) => {
      console.log(err);
    })
  }

  const logoutHandler = () => {
    mainApi.signOut().then((res) => {
      history.push('/');
      setCurrentUser({})
      localStorage.clear();
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
    const movies = localStorage.getItem('movies')
    if (movies) {
      setMovies(JSON.parse(movies));
      return;
    }

    moviesApi.getAllMovies().then((movies) => {
      setMovies(movies);
      localStorage.setItem("movies", JSON.stringify(movies))
    }).catch((err) => {
      console.log(err);
    })
  }

  React.useEffect(() => {
    fetchMovies()
  },[]);

  React.useEffect(() => {
    if (localStorage.getItem("loggedin") === "1") {
      fetchUserData()
      fetchUserMovies()
    }
  }, []);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route path="/signup" exact>
          <Register
            registerHandler={registerHandler}
            serverError={serverError}
          />
        </Route>
        <Route path="/signin" exact>
          <Login
            loginHandler={loginHandler}
          />
        </Route>

        <Route path="/" exact>
          <Main/>
        </Route>

        <ProtectedRoute path="/profile">
          <Profile
            logoutHandler={logoutHandler}
            fetchUserData={fetchUserData}
          />
        </ProtectedRoute>

        <ProtectedRoute path="/movies">
          <Movies
              movies={movies}
              userMovies={userMovies}
              saveHandler={saveHandler}
              deleteHandler={deleteHandler}
              currentUser={currentUser}
            />
        </ProtectedRoute>

        <ProtectedRoute path="/saved-movies">
          <SavedMovies
              movies={movies}
              userMovies={userMovies}
              deleteHandler={deleteHandler}
              currentUser={currentUser}
            />
        </ProtectedRoute>

        <Route path="/" >
          <NotFound/>
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
    )
}

export default withRouter(App);
