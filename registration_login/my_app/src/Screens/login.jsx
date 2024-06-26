import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../utils/LoginValidation';
import axios from 'axios';

function Login(props) {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const { name, value } = event.target;
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault(); // to avoid refreshing every time the submit button is clicked
    setErrors(Validation(values));
    if (Object.keys(errors).length === 0) {
      axios.get('http://localhost:8080/users')
        .then(res => {
            props.setLoggedIn(true);
            navigate('/home'); // if successful then redirect to home page
          
        })
        .catch(err => {
          console.error(err);
          setErrors("An error occurred. Please try again later.");
        });
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h1>Sign-in</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" name='email' onChange={handleInput} value={values.email} className='form-control rounded-0' />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" name='password' onChange={handleInput} value={values.password} className='form-control rounded-0' />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
          <p>You agree to our terms and policies</p>
          <Link to="/signUp" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
