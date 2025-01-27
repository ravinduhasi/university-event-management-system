import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth, db } from "../Firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent successfully! Check your inbox.");
      setError("");
    } catch (err) {
      setError("Failed to send password reset email. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-md shadow-md w-96">
        <h2 className="mb-6 text-2xl font-bold text-center">Forgot Password</h2>
        <form onSubmit={handlePasswordReset}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#253346]"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white transition duration-200 bg-[#27374d] rounded-md hover:bg-[#161f2b]"
          >
            Send Reset Email
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
