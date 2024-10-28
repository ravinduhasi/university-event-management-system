import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { auth } from './Firebase';

const db = getFirestore();

function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [snumber, setSNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                name,
                email,
                department,
                snumber,
                phone,
                createdAt: new Date()
            });

            console.log("User registered successfully:", user);
            setSuccess(true);

            setTimeout(() => {
                window.location.replace("/home");
            }, 2000);
        } catch (error) {
            console.log("Error:", error.message);
        }
    }

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className='w-full max-w-md bg-[#000000] p-8 rounded-[12px] flex flex-col items-center'>
                <div className='flex flex-col w-full'>
                    <form onSubmit={handleSubmit}>
                        <h3 className='text-2xl font-semibold mb-2 text-[30px] text-[#0284c7]'>Sign Up</h3>
                        <p className='mb-4 text-base text-[#5d5858]'>Please Enter your details.</p>

                        {success && (
                            <p className="mb-4 text-base text-green-500">
                                Signup successful! Redirecting to home...
                            </p>
                        )}
                        
                        <div className='flex flex-col w-full'>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter Your Name"
                                className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <input 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Your Email"
                                className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input 
                                type="text"
                                id="department"
                                name="department"
                                placeholder="Enter Your Department"
                                className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            />

                            <input 
                                type="text"
                                id="snumber"
                                name="snumber"
                                placeholder="Enter Your Number"
                                className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                                value={snumber}
                                onChange={(e) => setSNumber(e.target.value)}
                            />

                            <input 
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter Your Password"
                                className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <input 
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm Your Password"
                                className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <button className='w-full text-white font-semibold bg-gradient-to-r from-[#38bdf8] to-[#0369a1] rounded-md p-4 text-center mb-4'>
                            Sign Up
                        </button>

                        <div className='text-center'>
                            <p className='text-sm text-[#ffffff]'>Already have an account? <span className='font-semibold underline cursor-pointer text-[#5d5858]'>Sign In</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;
