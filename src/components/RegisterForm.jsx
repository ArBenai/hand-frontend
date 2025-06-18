import React, { useState } from 'react';
import './RegisterForm.css';


const RegisterForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = 'Dieses Feld darf nicht leer sein.';
      }
    });
    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setFormErrors({});
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          adress: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            street: formData.street,
            city: formData.city,
            state: formData.state,
            zip: parseInt(formData.zip),
          },
        }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        onSuccess(data);
      } else {
        setMessage(`:x: Fehler: ${data.message || 'Unbekannter Fehler'}`);
      }
    } catch (error) {
      console.error(error);
      setMessage(':x: Serverfehler.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="register-form">
      {['name', 'email', 'password', 'firstName', 'lastName', 'street', 'city', 'state', 'zip'].map((field) => (
        <label key={field}>
          {field.charAt(0).toUpperCase() + field.slice(1)}:
          <input
            type={field === 'email' ? 'email' : field === 'zip' ? 'number' : 'text'}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
          />
          {formErrors[field] && <p className="warning">{formErrors[field]}</p>}
        </label>
      ))}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Registrieren'}
      </button>
      {message && <p className="warning">{message}</p>}
    </form>
  );
};
export default RegisterForm;