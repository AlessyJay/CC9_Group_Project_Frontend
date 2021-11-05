import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";

function CommuSideCard({ item, index }) {
  const { name, profile_url, id } = item;

  return (
    <div className="flex p-2 px-6  text-md text-gray-700 h-12  items-center justify-between border-b-2 border-gray-200">
      <Link to={`/community/${name}/${id}`}>
        <div className="flex items-center">
          <span className="flex text-base">
            <span className="mr-4">{`${index + 1}.`}</span>
            {profile_url ? (
              <img className="rounded-full h-7 w-7 mr-4" alt="A" src={profile_url} />
            ) : (
              <HiOutlineUserCircle className="rounded-full h-7 w-7 mr-4" />
            )}
            <span className="truncate text-sm flex items-center font-light">{name}</span>
          </span>
        </div>
      </Link>
    </div>
  );
}

export default CommuSideCard;
