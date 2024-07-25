import {react} from 'react';
import './navbar.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
  } from "react-router-dom";
  

function Navbar()


{
return (
    <div class='Nav'>
        <div class = "navbar-logo">
        <p>
            CreativeWorks
        </p>
        </div>
        <div class='navbar-options'>
        <Link to="/home">Home</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/Login">Login</Link>
        </div>
    </div>
)
}

export default Navbar;