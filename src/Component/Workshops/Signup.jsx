import React from 'react';
import backgroundImage from '../../Images/signup.jpeg'; // Adjust the path as needed

const Signup = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Optional overlay for better text visibility */}
      <div className="relative flex justify-between items-center h-full p-8 px-10 text-white">
        <h1 className="text-3xl font-bold">Section Title</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Signup;
