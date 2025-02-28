import React, { useState, useEffect } from "react";
import { auth, db } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, getDoc } from "firebase/firestore";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle Sign-Up
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Assign role based on email
      let role = "user";
      if (email === "admin1@gmail.com" || email === "admin2@gmail.com" || email === "admin3@gmail.com") {
        role = "admin";
      } else if (email.endsWith("@managerdomain.com")) {
        role = "manager";
      }

      // Store user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        department,
        phone,
        email,
        role,
      });

      toast.success("Sign-up successful! You can now log in.");
      setIsSignUp(false); // Switch to sign-in form after registration
    } catch (err) {
      toast.error("Sign-up failed: Email already exists.");
    }
  };

  // Handle Sign-In
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user details from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();

        // Store session data in localStorage
        const sessionData = {
          uid: user.uid,
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          role: userData.role,
        };
        localStorage.setItem("userSession", JSON.stringify(sessionData));

        toast.success(`Welcome back, ${userData.name}!`);

        // Add delay before navigation
        setTimeout(() => {
          navigateBasedOnRole(userData.role);
        }, 4000); 
      } else {
        toast.error("Sign-in failed: No user data found.");
      }
    } catch (err) {
      toast.error("Sign-in failed: User password and username do not match.");
    }
  };

  // Navigate based on user role
  const navigateBasedOnRole = (role) => {
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "manager") {
      navigate("/manager");
    } else {
      navigate("/user");
    }
  };

  // Check session on page load
  useEffect(() => {
    const session = localStorage.getItem("userSession");
    if (session) {
      const { role } = JSON.parse(session);
      navigateBasedOnRole(role);
    }
  }, []);

  // Handle form submission
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="w-full max-w-md bg-[#000000] p-8 rounded-[12px] flex flex-col items-center">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full mb-4 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-[30px] text-[#0284c7]">
                {isSignUp ? "Sign Up" : "Sign In"}
              </h3>
              <p className="mb-4 text-base text-[#5d5858]">Please Enter your details.</p>
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
                <>
                  <input
                    type="text"
                    placeholder="Enter Your Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]"
                  />
                  <input
                    type="text"
                    placeholder="Enter Your Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]"
                  />
                </>
              )}

              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-[#ffffff] py-2 mb-4 bg-transparent border-b border-[#7b6767] outline-none placeholder-[#ffffff36]"
              />

              <button
                type="submit"
                className="w-[350px] ml-5 text-white font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md p-3 text-center mb-4"
              >
                {isSignUp ? "Sign Up" : "Login"}
              </button>
            </form>

            <div className="text-center">
              <p className="text-sm text-[#ffffff]">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}
                <span
                  className="font-semibold underline cursor-pointer text-[#5d5858] ml-1"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
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
