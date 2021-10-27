import React, { useState } from "react";
import useValidate from "../../services/useValidate";
import validate from "../../services/ValidateForm";

export default function CreateCommunity() {
  const [closeButton, setCloseButton] = useState("visible");
  const { values, errors, handleChange, handleSubmit } = useValidate(test, validate);

  function test() {
    console.log("No errors, submit callback called!");
  }

  return (
    //  hide element when click close button

    <div className={closeButton}>
      <form action="#" method="POST" onSubmit={handleSubmit} noValidate>
        <div className="flex justify-center h-screen items-center bg-gray-200 antialiased">
          <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
            {/* head */}
            <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
              <p className="block text-xl font-bold font-small text-gray-700">Create a community</p>
              <button onClick={() => setCloseButton("invisible")}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            {/* content */}
            {/* เพิ่ม validat */}
            <div className="flex flex-col px-6 py-5 bg-gray-50">
              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-xl font-bold font-small text-gray-700">
                  Name
                </label>
                <div className="block text-xs font-small text-gray-500">
                  Community names including capitalization cannot be changed.
                </div>
                <input
                  value={values.nameCommunity || ""}
                  onChange={handleChange}
                  maxLength="30"
                  required
                  type="text"
                  name="nameCommunity"
                  id="nameCommunity"
                  autoComplete="nameCommunity"
                  placeholder=""
                  className=" appearance-none outline-none pl-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-9 shadow-sm sm:text-sm border-gray-300 rounded-md "
                />
                {errors.nameCommunity && (
                  <p className="block text-xs font-small text-red-500">{errors.nameCommunity}</p>
                )}

                <div className="block text-xs font-small text-gray-500"> 30 Characters remaining</div>
              </div>
              <label className="inline-flex items-center mt-3">
                <input type="radio" name="selection" className="form-radio h-5 w-5 text-blue-600" />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span className="ml-2 text-gray-700 font-normal">Public</span>
                <span className="ml-2 text-gray-700 text-sm">Anyone can view, post, and comment to this community</span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input type="radio" name="selection" className="form-radio h-5 w-5 text-blue-600" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2 text-gray-700 font-normal">Restricted</span>
                <span className="ml-2 text-gray-700 text-sm">
                  Anyone can view this community, but only approved users can post
                </span>
              </label>
            </div>
            <button className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
              <p className="font-semibold text-gray-600 " onClick={() => setCloseButton("invisible")}>
                Cancel
              </p>
              <button type="submit" className="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
                Create Community
              </button>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
