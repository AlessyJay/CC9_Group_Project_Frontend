import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";

function CommuSideCard({ item, index }) {
  const { name, profileUrl } = item;
  return (
    <div className="flex p-2 px-6  text-md text-gray-700 h-12  items-center justify-between border-b-2 border-gray-200">
      <Link to={"/"} className="  " role="menuitem">
        <div className="flex items-center">
          <span className="flex text-base">
            <span className="mr-4">{`${index + 1}.`}</span>
            {/* <img className="rounded-full h-7 mr-4" alt="A" src={profileUrl} /> */}
            {profileUrl ? (
              <img className="rounded-full h-7 mr-4" alt="A" src={profileUrl} />
            ) : (
              <HiOutlineUserCircle className="rounded-full h-7 w-7 mr-4" />
            )}
            <span>{name}</span>
          </span>
        </div>
      </Link>
      <div>
        <button
          type="button"
          className=" max-w-sm text-sm  border-2 border-blue-500 rounded-full font-semibold  text-blue-500 px-2  transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white  "
        >
          Join
        </button>
      </div>
    </div>
  );
}

export default CommuSideCard;
