function Validation(values){
    let errors={}

    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^.{6,}$/;

    if(values.email===""){
        errors.email="Email Should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        errors.email="Email is not valid"
    }
    else{
        errors.email=""
    }

    if(values.password===""){
        errors.password="Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        errors.password="Password is not valid"
    }
    else{
        errors.password=""
    }

    return errors;
}

export default Validation;
