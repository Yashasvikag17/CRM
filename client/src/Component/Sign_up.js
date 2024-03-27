import React, { useState } from 'react';
import Photo from '../Assets/img.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Sign_up() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        navigate("/login"); // Navigate to the login page
        console.log(userCredential);
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // Display error message to user or handle it accordingly
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", height: "100vh", overflow: "hidden" }}>
      <div style={{ height: "100%", width: "50%", overflowY: "auto" }}>
        <div style={{ margin: "46px 31px 27px 39px" }}>
          <h1>Sign Up</h1>
        </div>

        <form onSubmit={signUp}>
          <div style={{ display: "flex", flexDirection: "column", padding: "15px 368px 16px 41px" }}>
            <label htmlFor="email" style={{ margin: '5px 7px 22px 2px ' }}> <h6>Email</h6></label>
            <input type="text" value={email} onChange={handleEmailChange} style={{ borderRadius: "44px" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", padding: "15px 368px 16px 41px", position: "relative" }}>
            <label htmlFor="password" style={{ margin: '5px 7px 22px 2px ' }}> <h6>Password</h6></label>
            <input type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} style={{ borderRadius: "44px" }} />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              style={{ position: "absolute", top: "73%", right: "383px", transform: "translateY(-50%)", cursor: "pointer" }}
              onClick={togglePasswordVisibility}
            />
          </div>

          <div>
            <button className='btn' style={{ background: "#9AA8DB", margin: '12px -20px 23px 44px' }} type="submit">Sign Up</button>
          </div>
        </form>

        <div style={{ margin: "12px -12px 23px 44px" }}>
          <p>Or <Link to='/login' style={{ textDecoration: "none" }}>You already have a account</Link></p>
        </div>
      </div>

      <div style={{ width: "50%" }}>
        <img src={Photo} alt="" style={{ width: "100%", height: "auto", height: "619px" }} />
      </div>
    </div>
  );
}
