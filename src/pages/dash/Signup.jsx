import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Import auth from firebaseConfig
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import the function

const Signup = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to the login page after successful signup
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 border border-gray-300 rounded-lg bg-[#dde6ed] flex flex-col gap-5 transition duration-500 ease-in-out">
      <h1 className="text-center">Signup</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition duration-200 transform hover:scale-105 active:scale-95">
          Sign Up
        </button>
      </form>
      <p className="text-center">
        Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
      </p>
    </div>
  );
};

export default Signup;
