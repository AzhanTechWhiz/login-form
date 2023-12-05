// SignupForm.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';

const SignupForm = () => {
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required !'),
        email: Yup.string().email('Invalid email !').required('Email is required !'),
        password: Yup.string().required('Password is required !').min(6, 'Password must be at least 6 characters !'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match !')
            .required('Confirm Password is required !'),
    });

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    };

    return (
        <div className="form-container">
            <h2>SIGN_UP FORM</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="field">
                            <Field type="text" name="username" placeholder="Username :" />
                            <ErrorMessage name="username" component="div" className="error" />
                        </div>
                        <div className="field">
                            <Field type="email" placeholder="Email :" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div className="field">
                            <Field type="password" placeholder="Password :" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <div className="field">
                            <Field type="password" placeholder="Confirm Password :" name="confirmPassword" />
                            <ErrorMessage name="confirmPassword" component="div" className="error" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            SIGN UP 
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignupForm;
