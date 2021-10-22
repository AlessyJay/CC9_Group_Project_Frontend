import React from "react";

function ResetPassword() {
  return (
    <div className=" flex py-12 px-4 sm:px-6 lg:px-8 flex-col">
      <div className="mx-auto p-24 py-28 bg-yellow-50 rounded-3xl shadow-md">
        <div className="mb-3 text-left text-xl">Reset your password</div>
        <div className=" max-w-sm w-full text-left font-extralight text-gray-900 text-sm">
          Tell us the username and email address
          <br /> associated with your account.
        </div>

        <div className="max-w-sm w-full space-y-8 ">
          <form className="mt-12 space-y-6" action="#" method="POST">
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
                <label for="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autocomplete="username"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reset
              </button>
            </div>

            <div className="flex items-center">
              <label for="remember-me" className="ml-3.5 mr-4 block text-xs text-gray-900">
                Need assistance logging in or having trouble <br /> with resetting password?
              </label>
            </div>

            <div className="flex items-center justify-around">
              <div className="text-xs">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500 mr-8">
                  Contact assistance
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
