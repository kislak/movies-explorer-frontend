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


function App(props) {
  const navigate = useNavigate();
  const [allMovies, setAllMovies] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState('');

  React.useEffect(() => {
    //cors issue for localhost:3000 - probably https
    setAllMovies(moviesApi.allMovies());
    console.log(moviesApi.allMovies())

    mainApi.getUser().then((user) => {
      setCurrentUser(user)
    }).catch((err) => {
      console.log(err);
    })

    // api.getAllFilms().then((films) => {
    //   console.log(films)
    //
    // }).catch((err) => {
    //   console.log(err);
    // });
  }, []);


  const registerHandler = (name, email, password) => {
    mainApi.signUp(name, email, password).then((res) => {
      localStorage.setItem("loggedin", 1)
      navigate('/movies')
    }).catch((err) => {
      console.log(err);
    })
  }

  const loginHandler = (email, password) => {
    mainApi.signIn(email, password).then((res) => {
      localStorage.setItem("loggedin", 1)
      navigate('/movies')
    }).catch((err) => {
      console.log(err);
    })
  }

  const logoutHandler = () => {
    mainApi.signOut().then((res) => {
      localStorage.setItem("loggedin", 0)
      navigate('/')
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/saved-movies" element={<SavedMovies/>} />
        <Route path="/signup" element={<Register registerHandler={registerHandler} />} />
        <Route path="/signin" element={<Login loginHandler={loginHandler} />} />
        <Route path="/profile" element={<Profile logoutHandler={logoutHandler}/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </CurrentUserContext.Provider>
    )
}

export default App;
