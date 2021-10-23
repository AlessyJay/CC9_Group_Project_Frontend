import React, { useState } from 'react';
import LoginFacebook from './LoginFacebook';
import LoginGoogle from './LoginGoogle';
import axios from '../config/axios';
function Login() {
  const [loginObj, setLoginObj] = useState({
    email: '',
    password: '',
  });

  const handleChangeInput = (e) => {
    setLoginObj((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };
  const submitLoginform = (e) => {
    e.preventDefault();

    try {
    } catch (err) {
      console.log(err);
      console.dir(err);
    }
  };
  return (
    <div className=" flex py-12 px-4 sm:px-6 lg:px-8 flex-col">
      <div className="mx-auto p-24 pt-40 pb-40 bg-yellow-50 rounded-3xl shadow-md">
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
          <form className="mt-8 space-y-6" onSubmit={submitLoginform}>
            <input type="hidden" name="remember" value="true" />
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
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={loginObj.password}
                  onChange={handleChangeInput}
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  for="remember-me"
                  className="ml-2 mr-9 block text-sm text-gray-900"
                >
                  Remember
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>

            <div className="flex items-center justify-around">
              <div className="flex items-center">
                <label
                  for="remember-me"
                  className="ml-7 mr-4 block text-sm text-gray-900"
                >
                  Don't have an account?
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500 mr-9"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
