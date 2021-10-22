import React, { useState } from "react";
import { Link } from "react-router-dom";

function ButtonLogin({ setShowLogin, setShowRegister }) {
  return (
    <div className="block md:">
      <button
        type="button"
        className="max-w-sm  border-2 border-blue-500 rounded-full font-semibold  text-blue-500 px-4  transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-3 "
        onClick={() => {
          setShowLogin(true);
        }}
      >
        Log in
      </button>
      <button
        className="max-w-sm border-2 border-blue-500 rounded-full font-semibold  text-white px-2  transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 bg-blue-500  mr-6 "
        onClick={() => setShowRegister(true)}
      >
        Sign Up
      </button>
    </div>
  );
}

export default ButtonLogin;
