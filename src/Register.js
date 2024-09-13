import React, { useState } from 'react';
import './RegistrationForm.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
});

function RegistrationForm() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-container">
        <Formik
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log('Form submitted:', values);
              alert('Thanks for registration!');
              setSubmitting(false);
              navigate('/login', { replace: true }); 
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <h2 className="title">Registration Form</h2>
              <div className="form-group">
                <label>Name:</label>
                <Field type="text" name="name" placeholder="Enter your name" className="form-input" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <Field type="email" name="email" placeholder="Enter your email" className="form-input" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <Field type="password" name="password" placeholder="Enter your password" className="form-input" />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label>Confirm Password:</label>
                <Field type="password" name="confirmPassword" placeholder="Confirm your password" className="form-input" />
                <ErrorMessage name="confirmPassword" component="div" className="error-message" />
              </div>
              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                Register
              </button>
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegistrationForm;