import Validation from "../utils/LoginValidation";

describe('loginValidations', () => {
  it('should return an error for empty email', () => {
    const values = { email: '', password: 'password123' };
    const errors = Validation(values);
    expect(errors.email).toBe('Email Should not be empty');
  });

  it('should return an error for empty password', () => {
    const values = { email: 'test@example.com', password: '' };
    const errors = Validation(values);
    expect(errors.password).toBe('Password should not be empty');
  });

  it('should not return any errors for valid email and password', () => {
    const values = { email: 'test@example.com', password: 'passw' };
    const errors = Validation(values);
    expect(errors.email).toBe('');
    expect(errors.password).toBe('Password is not valid');
  });
});
