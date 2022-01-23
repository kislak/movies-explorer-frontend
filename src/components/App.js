import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Landing from './Landing.js'
import Main from './Main.js'
import Profile from './Profile.js'
import Register from './Register.js'
import Login from './Login.js'
import NotFound from './NotFound.js'

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}>
        </Route>
        <Route path="/main" element={<Main/>}>
        </Route>
        <Route path="/saved" element={<Main saved={true}/>}>
        </Route>
        <Route path="/profile" element={<Profile/>}>
        </Route>
        <Route path="/register" element={<Register/>}>
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
        <Route path="*" element={<NotFound/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
