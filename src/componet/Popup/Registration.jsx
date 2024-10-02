import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Button from '../Shared/Button';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = ({ registrationPopup, handleRegistrationPopup }) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.password !== data.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            console.log('data', data);
            const response = await axios.post("http://localhost:3001/v1/auth/register", {
                name: data.name,
                email: data.email,
                password: data.password,
                role: 'user'
            });
            console.log(response.status, response.data.token);
            toast.success('Registration successful!');
            handleRegistrationPopup();
        } catch (error) {
            toast.error('Error registering user. Please try again.');
            console.error('Error registering user:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <>
            {registrationPopup && (
                <div>
                    <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
                        <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl'>
                            {/*header section*/}
                            <div className='flex items-center justify-between'>
                                <h1>Register Now</h1>
                                <div>
                                    <IoCloseOutline
                                        onClick={handleRegistrationPopup}
                                        className='text-2xl cursor-pointer' />
                                </div>
                            </div>
                            {/*form section*/}
                            <form onSubmit={handleSubmit}>
                                <div className='mt-4'>
                                    <input 
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        placeholder='Username'
                                        className='form-input'
                                        onChange={handleChange}
                                    />
                                    <input 
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder='Email'
                                        className='form-input'
                                        onChange={handleChange}
                                    />
                                    <input 
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder='Password'
                                        className='form-input'
                                        onChange={handleChange}
                                    />
                                    <input 
                                        type="password"
                                        name="confirmPassword"
                                        value={data.confirmPassword}
                                        placeholder='Confirm Password'
                                        className='form-input'
                                        onChange={handleChange}
                                    />
                                    <div className='flex justify-center'>
                                        <Button 
                                            type="submit" 
                                            text="Register"
                                            bgColor={"bg-primary"}
                                            textColor={"text-white"}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </>
    );
};

export default Registration;
