import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Login.css';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

const Login = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          if (values.email === 'shakti@gmail.com' && values.password === 'Shakti@123') {
            console.log('Valid login credentials');
            navigate('/home', { replace: true }); 
            console.log('Navigating to Home page');
          } else {
            console.log('Invalid login credentials');
            
          }
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>Email:</label>
          <Field type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component="div" className="error-message" />
          <br />
          <label>Password:</label>
          <Field type="password" name="password" placeholder="Enter your password" />
          <ErrorMessage name="password" component="div" className="error-message" />
          <br />
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;