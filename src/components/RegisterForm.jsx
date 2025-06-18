import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'; 


const RegisterForm = ({ onSuccess }) => {
  const navigate = useNavigate();
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
            zip: parseInt(formData.zip, 10),
          },
        }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        onSuccess(data);
        navigate('/login'); // Automatisch zur Login-Seite navigieren
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
    <>
      <h1>Registrierungsformular</h1>
      <form onSubmit={handleSubmit} className="register-form">
        {[
          'name',
          'email',
          'password',
          'firstName',
          'lastName',
          'street',
          'city',
          'state',
          'zip',
        ].map((field) => (
          <label key={field} className="register-label">
            {field.charAt(0).toUpperCase() + field.slice(1)}:
            <input
              type={field === 'email' ? 'email' : field === 'zip' ? 'number' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="register-input"
            />
            {formErrors[field] && <p className="register-warning">{formErrors[field]}</p>}
          </label>
        ))}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`register-button ${isSubmitting ? 'disabled' : ''}`}
        >
          {isSubmitting ? 'Wird gesendet…' : 'Registrieren'}
        </button>
        {message && <p className="register-warning">{message}</p>}
      </form>
    </>
  );
};
export default RegisterForm;