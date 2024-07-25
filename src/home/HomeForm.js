import React from 'react';
import './home.css'
import { useNavigate } from 'react-router-dom';
import './home.css'

function HomeForm() {
    const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToSignup = () => {
    navigate('/signup');
  };
  const goTohome = () => {
    navigate('/');
  };

    return(
        <div className="App-header">
         
            <h1> Welcome </h1>
            {/* <div class = "buttons"><button onClick={goToLogin}>Login</button>
            <button onClick={goToSignup}>Signup</button></div> */}
            
        </div>
    )
}

export default HomeForm;