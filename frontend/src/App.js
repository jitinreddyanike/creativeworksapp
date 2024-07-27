import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from './navbar/Navbar.js';
import SignupForm from './signup/SignupForm';
import LoginForm from './login/LoginForm.js';
import HomeForm from './home/HomeForm.js';

function App() {
  return (
   
    <Router>
       <Navbar />
      <Routes>
        <Route
          index 
          element = {<HomeForm/>}
        />
        <Route
          exact path = '/home'
          element = {<HomeForm/>}
        />
        <Route
          exact path = '/login'
          element = {<LoginForm/>}
        />
        <Route
          exact path = "/signup"
          element = {<SignupForm/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
