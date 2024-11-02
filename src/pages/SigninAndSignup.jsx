import React, { useState } from 'react';
import { auth,db } from './Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { doc, setDoc } from "firebase/firestore";



const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Initialize navigate function

    const handleSignUp = async () => {
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
    
            // Store additional user data in Firestore under the user's UID
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                department: department,
                phone: phone,
                email: email
            });
    
            console.log("User signed up and data stored in Firestore:", user);
            
            // Toggle to the "Sign In" form after successful sign-up
            setIsSignUp(false);
        } catch (err) {
            setError(err.message);
        }
    };
    
    

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User signed in:", userCredential.user);
            navigate("/skills"); // Redirect to the dashboard or another page after sign-in
        } catch (err) {
            setError(err.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        if (isSignUp) {
            handleSignUp();
        } else {
            handleSignIn();
        }
    };

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className='w-full max-w-md bg-[#000000] p-8 rounded-[12px] flex flex-col items-center'>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col w-full mb-4 text-center'>
                        <h3 className='text-2xl font-semibold mb-2 text-[30px] text-[#0284c7]'>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </h3>
                        <p className='mb-4 text-base text-[#5d5858]'>
                            Please Enter your details.
                        </p>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>

                    <form onSubmit={handleSubmit} className='flex flex-col w-full'>
                        {isSignUp && (
                            <input 
                                type="text"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                            />
                        )}

                        <input 
                            type="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                        />

                        {isSignUp && (
                            <input 
                                type="text"
                                placeholder="Enter Your Department"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                            />
                        )}

                        {isSignUp && (
                            <input 
                                type="text"
                                placeholder="Enter Your Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                            />
                        )}

                        <input 
                            type="password"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]'
                        />

                        <div className='flex items-center justify-between w-full mb-4'>
                            <div className='flex items-center'>
                                <input type="checkbox" className='w-4 h-4 mr-2'/>
                                <p className='text-sm text-[#7a68689e]'>Remember me</p>
                            </div>
                            {!isSignUp && (
                                <p className='text-sm font-medium underline cursor-pointer whitespace-nowrap underline-offset-2 text-[#7a68689e]'>
                                    Forget password
                                </p>
                            )}
                        </div>

                        <button type="submit" className='w-[350px] ml-5 text-white font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md p-3 text-center mb-4'>
                            {isSignUp ? 'Sign Up' : 'Login'}
                        </button>
                    </form>

                    <div className='text-center'>
                        <p className='text-sm text-[#ffffff]'>
                            {isSignUp ? "Already have an account?" : "Don't have an account?"}
                            <span 
                                className='font-semibold underline cursor-pointer text-[#5d5858] ml-1'
                                onClick={() => setIsSignUp(!isSignUp)} // Toggle between signup and login
                            >
                                {isSignUp ? 'Sign In' : 'Sign Up'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
