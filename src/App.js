import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Enrolled from './components/Enrolled/Enrolled';
import Administration from './components/Administration/Administration';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
         <Login></Login>
        </Route>
          
        <PrivateRoute path="/register/:worktitle">
          <Register></Register>
        </PrivateRoute>
        <Route path="/enrolled">
          <Enrolled />
        </Route>
        <Route path="/administration">
          <Administration></Administration>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
