import React, { useState } from 'react';
import './Gpt.css'; // Create App.css file for your styles
// import mountainBackground from './mountain-background.jpg'; // Replace with the path to your meaningful mountain background image

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement your sign-in logic here
    console.log('Sign in clicked!');
  };

  return (
    <div
      className="App"
      style={{
        // backgroundImage: `url(${mountainBackground})`,
        // background-image: url("https://media.istockphoto.com/vectors/abstract-finance-background-vector-id498315149?k=6&m=498315149&s=612x612&w=0&h=qABjdW-fknG5eIPnjpqKcOFI-mZuis4ZVvFPQpSyOI0=");
        
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width:'100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="overlay-layer" />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSignIn} >
          <label htmlFor="email">Username:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className='show-password-cr' htmlFor="showPassword">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{' '}
            Show Password
          </label>

          <button type="submit">Sign In</button>
        </form>
        <p>
          <a href="#">Forgot Password?</a>
        </p>
      </div>
      <div className="overlay-layer" />
    </div>
  );
};

export default App;
