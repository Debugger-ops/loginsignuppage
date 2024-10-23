import React, { useState } from 'react';

const ResetPassword = () => {
    const [number, setNumber] = useState('+91');
    const [go, setGo] = useState('Submit');

    const handleChange = (event) => {
        const value = event.target.value;
        // Allow only numbers
        if (/^\+91 ?\d{0,10}$/.test(value)) {
            setNumber(value);
        }
    };

    const handleGoClick = () => {
        // Implement the action to be taken on click
        console.log('Phone Number Submitted:', number);
    };

    return (
        <div className="bg-white mx-auto my-10 p-6 sm:p-8 md:p-10 lg:p-12 w-4/5 md:w-1/3 rounded-lg shadow-lg">
            <span className="flex font-bold text-3xl mb-4">Account Recovery</span>
            <form className="flex flex-col justify-center items-center" action="">
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-illustration-download-in-svg-png-gif-file-formats--man-forget-business-activity-pack-illustrations-3551744.png?f=webp"
                    alt="Forgot Password"
                    className="w-2/3 md:w-full my-4"
                />
                <span className="my-3 text-lg">Enter your Phone No.</span>
                <input
                    className="p-2 rounded-full bg-slate-200 w-full mx-4 my-4"
                    placeholder="Enter your phone number"
                    type="tel"
                    name="phone"
                    value={number}
                    onChange={handleChange}
                    maxLength={14}
                />
                <button
                    type="button"
                    className="p-2 rounded-full bg-purple-700 mt-4 w-2/3 md:w-1/2"
                    onClick={() => {
                        setGo("Submit");
                        handleGoClick();
                    }}
                >
                    <span className="font-bold text-white px-10">Submit</span>
                </button>
            </form>
        </div>
    );
}

export default ResetPassword;
