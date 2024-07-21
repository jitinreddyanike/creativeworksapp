import React from 'react';

import { useNavigate } from 'react-router-dom';

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
            <button onClick={goToLogin}>Login</button>
      <button onClick={goToSignup}>Signup</button>
        </div>
    )
}

export default HomeForm;