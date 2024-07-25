import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './login.css'
function LoginForm() {
    const [loginUserName, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const loginSubmit = (login) => {
        login.preventDefault();
        console.log('LoginuserName is ' + loginUserName);
        console.log('loginPassword is ' + loginPassword);
    };
    const navigate = useNavigate();

    const goTohome = () => {
        navigate('/');
      };

    const goToSignup = () => {
        navigate('/signup');
      };

    return(
        <div className = "LoginForm">
            <h1> Login</h1>
            <form onSubmit={loginSubmit}>
                <div>
                    <label> Username </label>
                    <input 
                        type ="text" 
                        value = {loginUserName}
                        placeholder = "Enter your username" 
                        onChange = { (loginUserNameValue) => setLoginUsername(loginUserNameValue.target.value)}
                        required
                    />
                </div>
                <div>
                    <label> Password </label>
                    <input 
                        type ="text" 
                        value = {loginPassword}
                        placeholder = "Enter your username" 
                        onChange = { (loginPasswordValue) => setLoginPassword(loginPasswordValue.target.value)}
                        required
                    />    
                </div>
                <button  type="submit">Submit</button>
                <div class = "signupbutton"> <button onClick={goToSignup}>Signup</button> </div>
                
                
            </form>
        </div>
    )
}

export default LoginForm;