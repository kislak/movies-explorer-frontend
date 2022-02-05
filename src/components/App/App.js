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
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});

  const fetchUserData = () => {
    mainApi.getUser().then((user) => {
      setCurrentUser(user)
    }).catch((err) => {
      console.log(err);
    })
  }

  const fetchMovies = () => {
    return moviesApi.allMovies()
    // const mv = moviesApi.allMovies()
    // setMovies(mv);
    // setSavedMovies(mv.slice(4,10));
  }

  React.useEffect(() => {
    if (localStorage.getItem("loggedin", '1')) {
      fetchUserData()
    }
  },[]);

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
            <Movies fetchMovies={fetchMovies}/>
          </ProtectedRouteElement>
        } />
        <Route path="/saved-movies" element={
          <ProtectedRouteElement>
            <SavedMovies fetchMovies={fetchMovies} savedMovies={savedMovies}/>
          </ProtectedRouteElement>
        } />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </CurrentUserContext.Provider>
    )
}

export default App;
