import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import Button from '../Shared/Button';

const Login = ({ loginPopup, handleLoginPopup, handleRegistrationPopup }) => {
    // State for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // State for error message
    const [error, setError] = useState('');

    // Handle input changes
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch('http://localhost:3000/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                
                // Handle successful login, e.g., redirect or update state
                console.log('Login successful');
                handleLoginPopup(); // Close the login popup on successful login
            } else {
                // Handle errors, e.g., display error message
                const errorData = await response.json();
                setError(errorData.message || 'Login failed');
            }
        } catch (error) {
            setError('An error occurred');
        }
    };

    return (
        <>
            {loginPopup && (
                <div>
                    <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
                        <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl'>
                            {/*header section*/}
                            <div className='flex items-center justify-between'>
                                <h1>Login</h1>
                                <div>
                                    <IoCloseOutline
                                        onClick={handleLoginPopup}
                                        className='text-2xl cursor-pointer' />
                                </div>
                            </div>
                            {/*form section*/}
                            <div className='mt-4'>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="email"
                                        placeholder='Email'
                                        value={email}
                                        onChange={handleEmailChange}
                                        className='form-input'
                                    />
                                    <input
                                        type="password"
                                        placeholder='Password'
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className='form-input'
                                    />
                                    {error && <p className='text-red-500'>{error}</p>}
                                    <a
                                        onClick={handleRegistrationPopup}
                                        className='flex justify-center mb-4'
                                        style={{ textDecoration: 'underline', cursor: 'pointer' }}
                                    >
                                        New User? Register now
                                    </a>
                                    <div className='flex justify-center'>
                                        <Button
                                            text="Login"
                                            bgColor={"bg-primary"}
                                            textColor={"text-white"}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
