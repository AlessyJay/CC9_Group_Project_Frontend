import { Link } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import { HiOutlineUserCircle } from "react-icons/hi";

function DropdownMenuComu({ item, handleSelectTarget }) {
  const {
    Community: { id, name, profileUrl },
  } = item;

  const history = useHistory();

  const handleToCommu = e => {
    history.push(`/community/${name}/${id}`);
    handleSelectTarget(name, profileUrl);
  };
  return (
    <div onClick={handleToCommu}>
      <div className="cursor-pointer px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center h-8">
        <div className="flex items-center">
          {profileUrl ? (
            <img className="rounded-full h-6 w-6 mr-4" alt="A" src={profileUrl} />
          ) : (
            <HiOutlineUserCircle className="rounded-full h-6 w-6 mr-4" />
          )}
          <span className="flex flex-col text-sm">
            <span>{name}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenuComu;
