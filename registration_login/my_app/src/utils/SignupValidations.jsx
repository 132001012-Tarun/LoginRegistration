export default function Validations(values) {
    let errors = {};
  
    if (!values.first_name) {
        errors.first_name = 'First Name is required';
    } else if (values.first_name.length < 2) {
        errors.first_name = 'First Name must be at least 2 characters';
    }
  
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
  
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }
  
    return errors;
  }
  