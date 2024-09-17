import React, { useState } from 'react';
import './RegistrationForm.css'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Invalid email address'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords do not match'),
  gender: Yup.string().required('Gender is required'),
  interests: Yup.array().min(1, 'At least one interest is required'),
  termsAccepted: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' }
];

const allInterests = ['Reading', 'Traveling', 'Cooking', 'Sports', 'Others'];

function RegistrationForm() {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);

  return (
    <div className="container">
      <div className="form-container">
        <Formik
          initialValues={{ 
            name: '', 
            email: '', 
            password: '', 
            confirmPassword: '', 
            gender: '', 
            interests: [], 
            termsAccepted: false 
          }}
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
          {({ isSubmitting, setFieldValue, values }) => (
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
              <div className="form-group">
                <label>Gender:</label>
                <div className="radio-group">
                  {genderOptions.map(option => (
                    <label key={option.value}>
                      <Field type="radio" name="gender" value={option.value} />
                      {option.label}
                    </label>
                  ))}
                </div>
                <ErrorMessage name="gender" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label>Interests:</label>
                <Autocomplete
                  multiple
                  options={allInterests}
                  getOptionLabel={(option) => option}
                  value={selectedInterests}
                  onChange={(event, newValue) => {
                    setSelectedInterests(newValue);
                    setFieldValue('interests', newValue);
                  }}
                  renderInput={(params) => <TextField {...params} label="Select Interests" variant="outlined" />}
                />
                <ErrorMessage name="interests" component="div" className="error-message" />
              </div>
              <div className="form-group terms-container">
                <label className="terms-label">
                  <Field type="checkbox" name="termsAccepted" className="terms-checkbox" />
                  I accept the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
                </label>
                <ErrorMessage name="termsAccepted" component="div" className="error-message" />
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
