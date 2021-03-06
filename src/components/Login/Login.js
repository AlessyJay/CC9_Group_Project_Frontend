import React, { useState } from "react";
import LoginFacebook from "./LoginFacebook";
import LoginGoogle from "./LoginGoogle";
import axios from "../../config/axios";
import { useHistory, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { setToken } from "../../services/localStorage";
import { HiOutlineX } from "react-icons/hi";
import { Toast } from "../../services/alert";

function Login({ setShowLogin, setShowRegister, setShowResetpass }) {
  const [error, setError] = useState("");
  const [loginObj, setLoginObj] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const handleChangeInput = (e) => {
    setLoginObj((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const submitLoginform = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/login", {
        email: loginObj.email,
        password: loginObj.password,
      });
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));
      setShowLogin(false);
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
      console.dir(err);
      Toast.fire({
        icon: "error",
        title: "Signed in failed",
      });
    }
  };

  console.log(error);
  return (
    <div className=" flex py-12 px-4 sm:px-6 lg:px-8 flex-col  items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-90 filter z-30">
      <div className="mx-auto p-24 pt-28 pb-28 bg-yellow-50 rounded-3xl shadow-md relative">
        <div className="absolute right-9 top-5">
          <HiOutlineX
            className="w-7 h-7 cursor-pointer"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="max-w-sm w-full mb-2">
          <LoginGoogle setShowLogin={setShowLogin} />
        </div>
        <div className="max-w-sm w-full ">
          <LoginFacebook setShowLogin={setShowLogin} />
        </div>
        <div class="my-2 flex flex-row justify-center">
          <span class="absolute bg-yellow-50 px-4 text-gray-900">or</span>
          <div class="w-full bg-gray-200 mt-3" style={{ height: "1px" }}></div>
        </div>
        <div className="max-w-sm w-full space-y-8 ">
          <form className="mt-8 space-y-6" onSubmit={submitLoginform}>
            {error && <p className="text-red-600 text-xs italic">{error}</p>}
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
                  onChange={handleChangeInput}
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
                <Link
                  to={"/#"}
                  className="font-medium text-blue-600 hover:text-blue-500"
                  onClick={() => setShowResetpass(true)}
                >
                  Forgot your password?
                </Link>
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
                <p
                  className="font-medium text-blue-600 hover:text-blue-500 mr-9 cursor-pointer"
                  onClick={() => {
                    setShowRegister(true);
                    setShowLogin(false);
                  }}
                >
                  Sign Up
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
