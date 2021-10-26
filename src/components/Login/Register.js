import React, { useState } from 'react';
import { validateRegisterObject } from '../../services/validations';
import LoginFacebook from './LoginFacebook';
import LoginGoogle from './LoginGoogle';
import axios from '../../config/axios';
function Register({ setShowRegister, setShowLogin }) {
  const [error, setError] = useState({});
  const [registerObj, setRegisterObj] = useState({
    email: '',
    username: '',
    password: '',
    confirmpassword: '',
  });

  const handleChangeInput = (e) => {
    setRegisterObj((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };
  console.log(error);
  const submitRegisterform = async (e) => {
    e.preventDefault();
    const errMessage = validateRegisterObject(registerObj);
    setError(errMessage);
    if (Object.keys(errMessage).length === 0) {
      try {
        const res = await axios.post('/users/register', registerObj);
        setShowRegister(false);
        setShowLogin(true);
      } catch (err) {
        setError((cur) => ({ ...cur, username: err.response.data.message }));
        console.dir(err);
        console.log(err);
      }
    }
  };
  return (
    <div className=" flex py-12 px-4 sm:px-6 lg:px-8 flex-col items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-90 filter z-30">
      <div className="mx-auto p-24 pt-28 pb-28 bg-yellow-50 rounded-3xl shadow-md">
        <div className="max-w-sm w-full mb-2">
          <LoginGoogle />
        </div>
        <div className="max-w-sm w-full ">
          <LoginFacebook />
        </div>
        <div class="my-2 flex flex-row justify-center">
          <span class="absolute bg-yellow-50 px-4 text-gray-900">or</span>
          <div class="w-full bg-gray-200 mt-3" style={{ height: '1px' }}></div>
        </div>
        <div className="max-w-sm w-full space-y-8 ">
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  onChange={handleChangeInput}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {error.email && (
                  <p className="text-red-600 text-xs italic mb-1">
                    {error.email}
                  </p>
                )}
              </div>
              <div>
                <label for="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autocomplete="username"
                  required
                  onChange={handleChangeInput}
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
                {error.username && (
                  <p className="text-red-600 text-xs italic mb-1">
                    {error.username}
                  </p>
                )}
              </div>
              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={handleChangeInput}
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                {error.password && (
                  <p className="text-red-600 text-xs italic mb-1">
                    {error.password}
                  </p>
                )}
              </div>
              <div>
                <label for="confirmpassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  required
                  onChange={handleChangeInput}
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
                {error.confirmpassword && (
                  <p className="text-red-600 text-xs italic">
                    {error.confirmpassword}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-around">
              <div className="flex items-center">
                <label
                  for="remember-me"
                  className="ml-7 mr-4 block text-sm text-gray-900"
                >
                  Already have an account?
                </label>
              </div>
              <div className="text-sm">
                <div
                  className="font-medium text-blue-600 hover:text-blue-500 mr-9 cursor-pointer"
                  onClick={() => {
                    setShowLogin(true);
                    setShowRegister(false);
                  }}
                >
                  Login
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={submitRegisterform}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
