import React, { useState } from 'react';
import { auth, db } from './Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, getDoc } from "firebase/firestore";
import Navbar from '../components/Navbar';

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Determine the role
            let role = "user"; // Default role
            if (email === "admin1@gmail.com" || email === "admin2@gmail.com" || email === "admin3@gmail.com") {
                role = "admin";
            } else if (email.endsWith("@managerdomain.com")) {
                role = "manager"; // Example manager logic: domain-based
            }

            // Store user data in Firestore
            await setDoc(doc(db, "users", user.uid), {
                name,
                department,
                phone,
                email,
                role,
            });

            console.log("User signed up and data stored in Firestore:", user);
            setIsSignUp(false); // Switch to the sign-in form
        } catch (err) {
            setError(err.message);
        }
    };

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Get user data from Firestore
            const userDoc = await getDoc(doc(db, "users", user.uid));

            if (userDoc.exists()) {
                const userData = userDoc.data();

                // Redirect based on the user's role
                if (userData.role === "admin") {
                    navigate("/admin");
                } else if (userData.role === "manager") {
                    navigate("/manager"); // Redirect managers to their dashboard
                } else {
                    navigate("/skills");
                }
            } else {
                console.error("No user data found in Firestore!");
            }
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
        <>
            <Navbar />
            <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="w-full max-w-md bg-[#000000] p-8 rounded-[12px] flex flex-col items-center">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col w-full mb-4 text-center">
                            <h3 className="text-2xl font-semibold mb-2 text-[30px] text-[#0284c7]">
                                {isSignUp ? 'Sign Up' : 'Sign In'}
                            </h3>
                            <p className="mb-4 text-base text-[#5d5858]">
                                Please Enter your details.
                            </p>
                            {error && <p className="text-red-500">{error}</p>}
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col w-full">
                            {isSignUp && (
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]"
                                />
                            )}

                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]"
                            />

                            {isSignUp && (
                                <input
                                    type="text"
                                    placeholder="Enter Your Department"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    className="w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]"
                                />
                            )}

                            {isSignUp && (
                                <input
                                    type="text"
                                    placeholder="Enter Your Number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]"
                                />
                            )}

                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]"
                            />

                            <div className="flex items-center justify-between w-full mb-4">
                                <div className="flex items-center">
                                    <input type="checkbox" className="w-4 h-4 mr-2" />
                                    <p className="text-sm text-[#7a68689e]">Remember me</p>
                                </div>
                                {!isSignUp && (
                                    <p className="text-sm font-medium underline cursor-pointer whitespace-nowrap underline-offset-2 text-[#7a68689e]">
                                        Forget password
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-[350px] ml-5 text-white font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md p-3 text-center mb-4"
                            >
                                {isSignUp ? 'Sign Up' : 'Login'}
                            </button>
                        </form>

                        <div className="text-center">
                            <p className="text-sm text-[#ffffff]">
                                {isSignUp ? "Already have an account?" : "Don't have an account?"}
                                <span
                                    className="font-semibold underline cursor-pointer text-[#5d5858] ml-1"
                                    onClick={() => setIsSignUp(!isSignUp)}
                                >
                                    {isSignUp ? 'Sign In' : 'Sign Up'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthPage;
