import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (action === "Sign Up" && !formData.username) {
            setError('Username is required');
            return false;
        }
        if (!formData.email) {
            setError('Email is required');
            return false;
        }
        if (!formData.password) {
            setError('Password is required');
            return false;
        }
        setError(''); // Clear any previous errors
        return true;
    };

    const handleActionClick = () => {
        if (validateForm()) {
            if (action === "Sign Up") {
                navigate('/signup'); // Navigate to Sign Up page
            } else {
                navigate('/login'); // Navigate to Login page
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (validateForm()) {
            console.log(formData); // Handle form submission logic (e.g., API call)
        }
    };

    const handleGoogleAuth = () => {
        // Placeholder for Google Authentication logic
        console.log(`${action} with Google`); // Replace with actual Google sign-in logic
    };
    const handleGitHubAuth = () => {
        // Placeholder for Google Authentication logic
        console.log(`${action} with GitHub`); // Replace with actual Google sign-in logic
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='container bg-slate-200 p-6 rounded-lg shadow-lg w-11/12 md:w-1/3'>
                <div className="header">
                    <div className="text text-4xl font-bold flex justify-center">{action}</div>
                    <div className="underline"></div>
                </div>
                {error && <div className="flex justify-center error-message text-red-500 mb-4">{error}</div>} {/* Display error message */}
                <form onSubmit={handleSubmit} className='inputs flex flex-col items-center my-4'>
                    {action === "Login" ? null : (
                        <div className="input flex gap-4 bg-transparent bg-gray-700 my-3">
                            <img src="src/components/Assets/user-svgrepo-com.svg" alt="User Icon" width={25} />
                            <input
                                className='p-2 rounded-full bg-slate-200'
                                placeholder='username'
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    <span className='head'>* email</span>
                    <div className="input flex gap-4 bg-transparent bg-gray-700 my-3">
                        <img src="src/components/Assets/email-1573-svgrepo-com.svg" alt="Email Icon" width={25} />
                        <input
                            className='p-2 rounded-full bg-slate-200'
                            placeholder='email'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <span className='head'>* password</span>
                    <div className="input flex gap-4 bg-transparent bg-gray-700 my-3">
                        <img src="src/components/Assets/password-minimalistic-svgrepo-com (1).svg" alt="Password Icon" width={25} />
                        <input
                            className='p-2 rounded-full bg-slate-200'
                            placeholder='password'
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className=" google-auth my-4 w-96">
                        
                        <button
                            type="button"
                            className='flex justify-center item-center gap-2 text-black p-2 border-2 border-black rounded-full w-64 mx-16'
                            onClick={handleGoogleAuth}
                        >   <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" width={23} />
                            {action === "Sign Up" ? 'Sign Up with Google' : 'Login with Google'}
                        </button>
                    </div>

                    <div className=" github-auth my-2 w-96">
                        
                        <button
                            type="button"
                            className='flex justify-center item-center gap-2 text-black p-2 border-2 border-black rounded-full w-64 mx-16'
                            onClick={handleGitHubAuth}
                        >   <img  src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width={23} />
                            {action === "Sign Up" ? 'Sign Up with GitHub' : 'Login with GitHub'}
                        </button>
                    </div>
                    <div className="forget-password my-4">
                        Lost Password? <a href="/reset-password" className="text-blue-500 hover:underline">Click Here!</a>
                    </div>
                    <div className="submit-container flex justify-center gap-4 my-4">
                        <button
                            type="button"
                            className={`submit ${action === "Login" ? "gray" : ""}`}
                            onClick={() => {
                                setAction("Sign Up");
                                handleActionClick();
                            }}
                        >
                            <span className='bg-purple-700 font-bold text-white p-4 px-10 rounded-full'>Sign Up</span>
                        </button>
                        <button
                            type="button"
                            className={`submit ${action === "Sign Up" ? "gray" : ""}`}
                            onClick={() => {
                                setAction("Login");
                                handleActionClick();
                            }}
                        >
                            <span className='bg-purple-700 font-bold text-white p-4 px-10 rounded-full'>Login</span>
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default LoginSignup;
