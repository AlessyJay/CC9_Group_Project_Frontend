import React, { useState } from 'react';
import { validateCommuObject, validateInput } from '../../services/validations';
import { HiOutlineX, HiUserGroup, HiLockOpen } from 'react-icons/hi';
import axios from '../../config/axios';
import { useHistory } from 'react-router-dom';
export default function CreateCommunity({ setShowCreatecommunity }) {
  const history = useHistory();
  const [communityInput, setCommunityInput] = useState({ name: '', type: '' });
  const [error, setError] = useState({});
  const [nameLength, setNameLength] = useState(0);
  const [responseText, setResponseText] = useState('');

  const handleChangeInput = (e) => {
    const errMessage = validateInput(e.target.name, e.target.value);
    setError((cur) => ({ ...cur, [e.target.name]: errMessage }));
    setResponseText('');
    if (e.target.name === 'name') {
      setError((cur) => ({
        ...cur,
        checkname: '',
      }));
      setNameLength(e.target.value.length);
    }

    setCommunityInput((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };
  const handleCheckCommunityName = async (e) => {
    if (e.target.value !== '') {
      try {
        const res = await axios.post('/communities/checkname', {
          name: communityInput.name,
        });
        setResponseText(res.data.message);
      } catch (err) {
        setError((cur) => ({ ...cur, checkname: err.response.data.message }));
      }
    }
  };
  const handleSubmitCommunity = async (e) => {
    e.preventDefault();
    const errMessage = validateCommuObject(communityInput);
    setError(errMessage);
    if (Object.keys(errMessage).length === 0) {
      try {
        console.log(communityInput);
        const res = await axios.post('/communities/', communityInput);
        history.push(
          `/community/${res.data.community.name}/${res.data.community.id}`
        );
      } catch (err) {
        setError((cur) => ({ ...cur, checkname: err.response.data.message }));
      }
    }
  };
  return (
    //  hide element when click close button

    <div className="items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-90 filter z-30">
      <form onSubmit={handleSubmitCommunity}>
        <div className="flex justify-center h-screen items-center  antialiased">
          <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border  shadow-xl">
            {/* head */}
            <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
              <p className="block text-xl font-bold font-small text-gray-700">
                Create a community
              </p>
              <button onClick={() => setShowCreatecommunity(false)}>
                <HiOutlineX size="20px" />
              </button>
            </div>
            {/* content */}
            {/* เพิ่ม validat */}
            <div className="flex flex-col px-6 py-3 bg-gray-50">
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="community"
                  className="block text-xl font-bold font-small text-gray-700"
                >
                  Name
                </label>
                <div className="block text-xs font-small text-gray-500">
                  Community names including capitalization cannot be changed.
                </div>

                <input
                  value={communityInput.name}
                  onChange={handleChangeInput}
                  maxLength="30"
                  type="text"
                  name="name"
                  id="community"
                  placeholder=""
                  className=" appearance-none outline-none pl-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-9 shadow-sm sm:text-sm border-gray-300 rounded-md "
                  onBlur={handleCheckCommunityName}
                />
                {error.name && (
                  <p className="text-red-600 text-sm italic">{error.name}</p>
                )}
                {responseText && (
                  <p className="text-green-400 text-sm italic">
                    {responseText}
                  </p>
                )}
                {error.checkname && (
                  <p className="text-red-600 text-sm italic">
                    {error.checkname}
                  </p>
                )}
                <div
                  className={`block text-xs font-small text-gray-500 ${
                    nameLength === 30 ? 'text-red-600' : ''
                  }`}
                >
                  {`${30 - nameLength} /30 Characters remaining`}
                </div>
              </div>
              <label className="inline-flex items-center mt-3">
                <input
                  type="radio"
                  name="type"
                  className="form-radio h-5 w-5 text-blue-600"
                  onChange={handleChangeInput}
                  value="PUBLIC"
                />
                <HiUserGroup className="h-5 w-5 ml-2 text-gray-700" />

                <span className="ml-2 text-gray-700 font-semibold">Public</span>
                <span className="ml-2 text-gray-700 text-sm">
                  Anyone can view, post, and comment to this community
                </span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input
                  type="radio"
                  name="type"
                  className="form-radio h-5 w-5 text-blue-600"
                  onChange={handleChangeInput}
                  value="RESTRICTED"
                />
                <HiLockOpen
                  className="h-5 w-5 ml-2 text-gray-700"
                  viewBox="0 0 20 20"
                />

                <span className="ml-2 text-gray-700 font-semibold">
                  Restricted
                </span>
                <span className="ml-2 text-gray-700 text-sm">
                  Anyone can view this community, but only approved users can
                  post
                </span>
              </label>
              {error.type && (
                <span className="text-red-600 text-sm italic mt-1">
                  {error.type}
                </span>
              )}
            </div>
            <button className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
              <p
                className="font-semibold text-gray-600 "
                onClick={() => setShowCreatecommunity(false)}
              >
                Cancel
              </p>
              <button
                type="submit"
                className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
              >
                Create Community
              </button>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
