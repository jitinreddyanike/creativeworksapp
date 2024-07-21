import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SignupForm from './signup/SignupForm';
import LoginForm from './login/LoginForm.js';
import HomeForm from './home/HomeForm.js';
import { useNavigate } from 'react-router-dom';
function App() {
  return (
    <Router>
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
