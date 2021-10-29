import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineCamera } from "react-icons/hi";

function ProfileSide({ user }) {
  console.log(user);
  return (
    <div className=" bg-white max-w-xs mt-4 shadow rounded-sm hidden md:block">
      <div className="group shadow relative rounded-sm w-full h-28 bg-cover text-xl font-semibold flex p-3 text-white bg-blue-300 rounded-b-none">
        <div className="group">
          {user.profileUrl ? (
            <img
              className="rounded-sm h-20 w-20 shadow absolute -bottom-5 left-4 border-2 border-gray-200 "
              alt="A"
              src={user.profileUrl}
            />
          ) : (
            <img
              className="rounded-sm h-20 w-20 shadow absolute -bottom-5 left-4 border-2 border-gray-200 "
              alt="A"
              src="https://randomuser.me/api/portraits/men/85.jpg"
            />
          )}
        </div>
      </div>
      <div className=" px-4 py-6 rounded-sm rounded-t-none">
        <p className="text-xs mb-2">{user.username}</p>
        <p className="text-sm mb-5 font-light">
          {user.description
            ? user.description
            : "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        </p>
      </div>
      <div className="flex justify-center mx-2 pb-2"></div>
      <div className="mt-2 mx-8 border-b-2 text-sm border-gray-100"></div>
      <div className="mx-8 py-4 text-sm">Created Jul 31, 2013</div>
    </div>
  );
}

export default ProfileSide;
