import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";

function SearchCard({ item }) {
  const { name, username, profileUrl } = item;
  return (
    <div className="py-1">
      <a
        href="#"
        className="block px-2 pr-2 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 h-8 flex items-center"
        role="menuitem"
      >
        <div className="flex items-center">
          <div>
            {profileUrl ? (
              <img className="rounded-full h-6 mr-4" alt="A" src={profileUrl} />
            ) : (
              <HiOutlineUserCircle className="rounded-full h-6 w-6 mr-4" />
            )}
          </div>
          <span className="flex flex-col text-sm">
            <span>{name || username}</span>
          </span>
        </div>
      </a>
    </div>
  );
}

export default SearchCard;
