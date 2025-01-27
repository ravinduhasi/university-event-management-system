import React, { useRef, useState } from "react";
import { auth, db } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const AddManagerForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");

  const formRef = useRef(); // Ref for the EmailJS form

  const handleAddManager = async (e) => {
    e.preventDefault();

    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Retrieve the current manager ID from the 'counters' collection
      const counterRef = doc(db, "counters", "managerID");
      const counterDoc = await getDoc(counterRef);

      let newManagerId = 1; // Default ID if it doesn't exist

      if (counterDoc.exists()) {
        newManagerId = counterDoc.data().currentId + 1; // Increment the current manager ID
      } else {
        // If no document exists, create it with a starting ID of 1
        await setDoc(counterRef, {
          currentId: 1,
        });
      }

      // Add manager data to Firestore under "users" collection with UID as the document ID
      await setDoc(doc(db, "users", user.uid), {
        managerId: newManagerId, // Assign custom manager ID
        uid: user.uid, // Store the user's UID for future reference
        name,
        department,
        phone,
        email,
        role: "manager",
        createdAt: new Date().toISOString(), // Add a timestamp
      });

      // Update the manager ID counter
      await updateDoc(counterRef, {
        currentId: newManagerId, // Set the current ID to the newly generated ID
      });

      // Send the email using EmailJS
      emailjs
        .sendForm(
          "service_iug25ol", // Replace with your service ID
          "template_k0kiqgj", // Replace with your template ID
          formRef.current, // Form reference for dynamic data
          "tHLpli36-HDHgPev8" // Replace with your public key
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            toast.success("Manager added and email sent successfully!");
          },
          (error) => {
            console.error("Failed to send email:", error);
            toast.error("Manager added, but email sending failed.");
          }
        );

      // Clear form fields
      setEmail("");
      setPassword("");
      setName("");
      setDepartment("");
      setPhone("");
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="mb-6 text-2xl font-bold text-center text-blue-600">
          Add New Manager
        </h2>

        <form ref={formRef} onSubmit={handleAddManager} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name" // Required for EmailJS
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email" // Required for EmailJS
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="johndoe@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <input
              type="text"
              id="department"
              name="department" // Optional for EmailJS
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Human Resources"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone" // Optional for EmailJS
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="(123) 456-7890"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Temporary Password
            </label>
            <input
              type="password"
              id="password"
              name="user_password" // Required for EmailJS
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Temporary password"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Add Manager
            </button>
          </div>
        </form>
      </div>
      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default AddManagerForm;
