import React, { useState } from 'react';
import { auth, db } from './Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const AddManager = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleAddManager = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Set manager role in Firestore
            await setDoc(doc(db, "users", user.uid), {
                name,
                department,
                phone,
                email,
                role: "manager",
            });

            setSuccess("Manager added successfully!");
            setEmail("");
            setPassword("");
            setName("");
            setDepartment("");
            setPhone("");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="w-full max-w-md bg-[#000000] p-8 rounded-[12px] flex flex-col items-center">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col w-full mb-4 text-center">
                        <h3 className="text-2xl font-semibold mb-2 text-[30px] text-[#0284c7]">
                            Add Manager
                        </h3>
                        <p className="mb-4 text-base text-[#5d5858]">
                            Enter the details to add a new manager.
                        </p>
                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-500">{success}</p>}
                    </div>

                    <form onSubmit={handleAddManager} className="flex flex-col w-full">
                        <input
                            type="text"
                            placeholder="Enter Manager's Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Enter Manager's Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Enter Manager's Department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Enter Manager's Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]"
                            required
                        />

                        <input
                            type="password"
                            placeholder="Enter Temporary Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]"
                            required
                        />

                        <button
                            type="submit"
                            className="w-[350px] ml-5 text-white font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md p-3 text-center mb-4"
                        >
                            Add Manager
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

