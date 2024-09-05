// Feedbacks.js
import React from 'react';

// Import your icons or replace these paths with URLs
import {
  gh,
  linkedin,
  email,
} from "../assets";

const Feedbacks = () => {
  return (
    <div className="flex justify-center items-center min-h-screen py-1 space-x-8">
      <a
        href="https://www.linkedin.com/in/muhibkhn"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-48 h-48 bg-gray-800 rounded-full transition-transform transform hover:scale-110 hover:bg-blue-600"
      >
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/muhibkhn"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-48 h-48 bg-gray-800 rounded-full transition-transform transform hover:scale-110 hover:bg-blue-600"
      >
        <img src={gh} alt="GitHub" className="w-24 h-24" />
      </a>
      <a
        href="mailto:khan2ma@mail.uc.edu"
        className="flex items-center justify-center w-48 h-48 bg-gray-800 rounded-full transition-transform transform hover:scale-110 hover:bg-blue-600"
      >
        <img src={email} alt="Email" className="w-24 h-24" />
      </a>
    </div>
  );
};

export default Feedbacks;
