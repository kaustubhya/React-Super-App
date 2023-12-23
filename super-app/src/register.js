import React, { useState } from 'react';
import './register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    termsAccepted: '',
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    let valid = true;
    const newErrors = {
      username: '',
      email: '',
      password: '',
      termsAccepted: '',
    };

    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
      valid = false;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
      valid = false;
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
      valid = false;
    }

    setErrors(newErrors);

    // If form is valid, save data to local storage
    if (valid) {
      // Save registration data to local storage
      localStorage.setItem('registrationData', JSON.stringify(formData));

      // You may want to redirect the user to another page or perform other actions
      alert('Registration successful!');
    }
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <div className="error">{errors.username}</div>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error">{errors.email}</div>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error">{errors.password}</div>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            Accept Terms and Conditions
          </label>
          <div className="error">{errors.termsAccepted}</div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
