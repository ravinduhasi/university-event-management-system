import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Import auth from firebaseConfig
import { signInWithEmailAndPassword } from "firebase/auth"; // Import the function

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
      navigate('/'); // Redirect to the dashboard
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 border border-gray-300 rounded-lg bg-[#dde6ed] flex flex-col gap-5 transition duration-500 ease-in-out">
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleLogin} className="w-full">
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200">Login</button>
        <p className="mt-4 text-center">
          Don&apos;t have an account? Please{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">register</Link>.
        </p>
      </form>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
