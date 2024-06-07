import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validations from '../utils/SignupValidations';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
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
    const frontendErrors = Validations(values);
    setErrors(frontendErrors);

    // Check if frontend validation passed
    if (Object.keys(frontendErrors).length === 0) {
      const formData = new URLSearchParams();
      formData.append('firstName', values.first_name);
      formData.append('lastName', values.last_name);
      formData.append('email', values.email);
      formData.append('password', values.password);
      axios.post('http://localhost:8080/register/save', formData.toString())
        .then(res => {
          navigate('/');        // if succesfull then redirect to login page
        })
        .catch(err => {
          if (err.response && err.response.data && err.response.data.errors) {
            setErrors(err.response.data.errors);          // if not succesfull then show error.
          } else {
            console.log(err);
          }
        });
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-4 rounded' style={{ width: '90%', maxWidth: '500px' }}>
        <h1>Sign-up</h1>
        <p className='text-muted'>
          Fields marked with <span className='text-danger'>*</span> are required.
        </p>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="first_name"><strong>First Name</strong>
              <span className='text-danger'> *</span>
            </label>
            <input type="text" placeholder="Enter First Name" name='first_name' value={values.first_name}
              onChange={handleInput} className='form-control rounded-0' />
            {errors.first_name && <span className='text-danger'>{errors.first_name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="last_name"><strong>Last Name</strong></label>
            <input type="text" placeholder="Enter Last Name" name='last_name' value={values.last_name}
              onChange={handleInput} className='form-control rounded-0' />
            {errors.last_name && <span className='text-danger'>{errors.last_name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong>
              <span className='text-danger'> *</span>
            </label>
            <input type="email" placeholder="Enter Email" name='email' value={values.email}
              onChange={handleInput} className='form-control rounded-0' />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong>
              <span className='text-danger'> *</span>
            </label>
            <input type="password" placeholder="Enter Password" name='password' value={values.password}
              onChange={handleInput} className='form-control rounded-0' />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
          <p className='text-center'>You are agreeing to our terms and policies</p>
          <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
