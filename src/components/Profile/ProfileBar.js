import React from "react";
import { Link } from "react-router-dom";

function ProfileBar({ user, page }) {
  return (
    <div className="bg-white shadow">
      <div className="max-w-none w-full mx-auto px-56 text-sm flex">
        <Link
          to={`/profile/${user.id}`}
          className={`py-2 px-2 hover:bg-gray-100 border-b-2 mr-4 ${
            page === 1 ? "border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"
          }`}
        >
          OVERVIEW
        </Link>
        <Link
          to={`/profile/${user.id}/posts`}
          className={`py-2 px-2 hover:bg-gray-100 border-b-2 mr-4 ${
            page === 2 ? "border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"
          }`}
        >
          POSTS
        </Link>
        <Link
          to={`/profile/${user.id}/comments`}
          className={`py-2 px-2 hover:bg-gray-100 border-b-2 mr-4 ${
            page === 3 ? "border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"
          }`}
        >
          COMMENTS
        </Link>
        <Link
          to={`/profile/${user.id}/save`}
          className={`py-2 px-2 hover:bg-gray-100 border-b-2 mr-4 ${
            page === 4 ? "border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"
          }`}
        >
          SAVE
        </Link>
        <Link
          to={`/profile/${user.id}/hidden`}
          className={`py-2 px-2 hover:bg-gray-100 border-b-2 mr-4 ${
            page === 5 ? "border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"
          }`}
        >
          HIDDEN
        </Link>
      </div>
    </div>
  );
}

export default ProfileBar;
