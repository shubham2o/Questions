// https://codedamn.com/problem/Wyy4u_Txj1W67PIYDSsc_

import React, { useState } from 'react';
import styled from 'styled-components';

const ValidateSignUpForm = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    };

    const validateForm = () => {
        const { firstName, lastName, email, password, confirmPassword } = formValues;
        let isValid = true;
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

        let newErrors = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };

        if (!firstName.length) {
            newErrors.firstName = 'First name cannot be empty';
            isValid = false;
        }

        if (!lastName.length) {
            newErrors.lastName = 'Last name cannot be empty';
            isValid = false;
        }

        if (!emailRegex.test(email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }

        if (password.length <= 7) {
            newErrors.password = 'Password must be greater than 7 characters';
            isValid = false;
        }

        if (password !== confirmPassword) {
            newErrors.password = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted successfully');
        }
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <input
                    data-test-id="first-name-id"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formValues.firstName}
                    onChange={handleChange}
                />

                <p
                    data-test-id="first-name-error-id"
                    className="error"
                > {errors.firstName}
                </p>

                <input
                    data-test-id="last-name-id"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formValues.lastName}
                    onChange={handleChange}
                />

                <p
                    data-test-id="last-name-error-id"
                    className="error"
                > {errors.lastName}
                </p>

                <input
                    data-test-id="email-id"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formValues.email}
                    onChange={handleChange}
                />

                <p
                    data-test-id="email-error-id"
                    className="error"
                > {errors.email}
                </p>

                <input
                    data-test-id="password-id"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={handleChange}
                />

                <p
                    data-test-id="password-error-id"
                    className="error"
                > {errors.password}
                </p>

                <input
                    data-test-id="confirm-password-id"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                />

                <p
                    data-test-id="confirm-password-error-id"
                    className="error"
                > {errors.confirmPassword}
                </p>

                <button type="submit">Sign Up</button>
            </form>
        </Wrapper>
    );
};

export default ValidateSignUpForm;

const Wrapper = styled.div`
    margin-top: 24px;
    font-family: sans-serif;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    input {
        padding: 8px 12px;
        font-size: 18px;
        margin-bottom: 6px;
        width: clamp(200px, 40%, 400px);
    }

    button {
        padding: 10px 20px;
        font-size: 18px;
        border: none;
        border-radius: 4px;
        background-color: #333;
        color: #fff;
        cursor: pointer;
        margin-top: 24px;

        $:hover {
            opacity: 0.8;
        }
    }

    .error {
        margin: 0 0 24px 0;
        color: red;
    }
`;