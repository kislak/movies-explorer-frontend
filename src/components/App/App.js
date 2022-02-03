import React from "react";

import {
  BrowserRouter,
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

function App(props) {
  const [allMovies, setAllMovies] = React.useState('');

  React.useEffect(() => {
    //cors issue for localhost:3000 - probably https
    setAllMovies(moviesApi.allMovies());
    console.log(moviesApi.allMovies())

    // api.getAllFilms().then((films) => {
    //   console.log(films)
    //
    // }).catch((err) => {
    //   console.log(err);
    // });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
        </Route>
        <Route path="/movies" element={<Movies/>}>
        </Route>
        <Route path="/saved-movies" element={<SavedMovies/>}>
        </Route>
        <Route path="/signup" element={<Register/>}>
        </Route>
        <Route path="/signin" element={<Login/>}>
        </Route>
        <Route path="/profile" element={<Profile/>}>
        </Route>
        <Route path="*" element={<NotFound/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
