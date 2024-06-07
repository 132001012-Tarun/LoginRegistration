import './App.css';
import React,{useState} from 'react'
import {Navigate} from 'react-router-dom';
import Login from './Screens/login';
import Signup from './Screens/singup';
import Home from './Screens/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const setLoggedInState = (value) => {
    setIsLoggedIn(value);
  };

  return (
  <Router>
    <Routes>
      {!isLoggedIn ? (
        <>
          <Route path='/' element={<Login setLoggedIn={setLoggedInState} />} />
          <Route path='/signUp' element={<Signup />} />
        </>
      ) : (
        <>
          <Route path='/' element={<Navigate to='/home' />} />  
          <Route path='/home' element={<Home />} />
        </>
      )}
    </Routes>
  </Router>
  );
}

export default App;