import React, { useState } from "react";
import { db, storage } from "../firebase"; // Make sure you have Firebase Storage setup
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddClubForm = ({ onClose }) => {
  const [clubName, setClubName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [presidentName, setPresidentName] = useState("");
  const [logo, setLogo] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleAddClub = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setUploading(true);

    try {
      // If there's a logo, upload it to Firebase Storage
      let logoURL = "";
      if (logo) {
        const storageRef = ref(storage, `logos/${logo.name}`);
        const uploadTask = uploadBytesResumable(storageRef, logo);

        // Wait for the upload to complete
        await uploadTask;
        logoURL = await getDownloadURL(storageRef);
      }

      // Add club data to Firestore under "clubs" collection
      await addDoc(collection(db, "clubs"), {
        clubName,
        description,
        email,
        phone,
        presidentName,
        logoURL, // Save the logo URL if uploaded
        createdAt: new Date().toISOString(), // Add a timestamp
      });

      setSuccess("Club added successfully!");
      setClubName("");
      setDescription("");
      setEmail("");
      setPhone("");
      setPresidentName("");
      setLogo(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
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
          Add New Club
        </h2>

        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        {success && <p className="mb-4 text-sm text-green-500">{success}</p>}

        <form onSubmit={handleAddClub} className="space-y-4">
          <div>
            <label
              htmlFor="clubName"
              className="block text-sm font-medium text-gray-700"
            >
              Club Name
            </label>
            <input
              type="text"
              id="clubName"
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Club Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Describe the club"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="club@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="(123) 456-7890"
              required
            />
          </div>

          <div>
            <label
              htmlFor="presidentName"
              className="block text-sm font-medium text-gray-700"
            >
              President's Name
            </label>
            <input
              type="text"
              id="presidentName"
              value={presidentName}
              onChange={(e) => setPresidentName(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="logo"
              className="block text-sm font-medium text-gray-700"
            >
              Club Logo
            </label>
            <input
              type="file"
              id="logo"
              onChange={handleFileChange}
              accept="image/*"
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {logo && <p className="mt-2 text-sm text-gray-500">{logo.name}</p>}
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
              disabled={uploading}
            >
              {uploading ? "Adding Club..." : "Add Club"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClubForm;
