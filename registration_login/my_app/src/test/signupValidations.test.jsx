import Validations from '../utils/SignupValidations';

describe('Signup Validations', () => {
  it('should return an error for empty first name', () => {
    const values = { first_name: '', email: 'test@example.com', password: 'Password123' };
    const errors = Validations(values);
    expect(errors.first_name).toBe('First Name is required');
  });

  it('should return an error for first name less than 2 characters', () => {
    const values = { first_name: 'A', email: 'test@example.com', password: 'Password123' };
    const errors = Validations(values);
    expect(errors.first_name).toBe('First Name must be at least 2 characters');
  });

  it('should not return any error for valid first name', () => {
    const values = { first_name: 'John', email: 'test@example.com', password: 'Password123' };
    const errors = Validations(values);
    expect(errors.first_name).toBeUndefined();
  });

  it('should return an error for empty email', () => {
    const values = { first_name: 'John', email: '', password: 'Password123' };
    const errors = Validations(values);
    expect(errors.email).toBe('Email is required');
  });

  it('should return an error for invalid email', () => {
    const values = { first_name: 'John', email: 'invalid-email', password: 'Password123' };
    const errors = Validations(values);
    expect(errors.email).toBe('Email address is invalid');
  });

  it('should not return any error for valid email', () => {
    const values = { first_name: 'John', email: 'test@example.com', password: 'Password123' };
    const errors = Validations(values);
    expect(errors.email).toBeUndefined();
  });

  it('should return an error for empty password', () => {
    const values = { first_name: 'John', email: 'test@example.com', password: '' };
    const errors = Validations(values);
    expect(errors.password).toBe('Password is required');
  });

  it('should return an error for password less than 6 characters', () => {
    const values = { first_name: 'John', email: 'test@example.com', password: '12345' };
    const errors = Validations(values);
    expect(errors.password).toBe('Password must be at least 6 characters');
  });

  it('should not return any error for valid password', () => {
    const values = { first_name: 'John', email: 'test@example.com', password: 'Password123' };
    const errors = Validations(values);
    expect(errors.password).toBeUndefined();
  });
});
