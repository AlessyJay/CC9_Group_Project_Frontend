import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useHistory } from "react-router-dom";

function SearchCard({ item, setSearch }) {
  const { id, name, username, profileUrl } = item;

  const history = useHistory();

  const handleClickTo = () => {
    if (name) {
      history.push(`/community/${name}/${id}`);
    } else if (username) {
      history.push(`/user/${id}`);
    }
    setSearch("");
  };

  return (
    <div className="py-1">
      <div
        onClick={handleClickTo}
        className=" px-2 pr-2 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 h-8 flex items-center"
        role="menuitem"
      >
        <div className="flex items-center">
          <div>
            {profileUrl ? (
              <img className="rounded-full h-6 w-6 mr-4" alt="A" src={profileUrl} />
            ) : (
              <HiOutlineUserCircle className="rounded-full h-6 w-6 mr-4" />
            )}
          </div>
          <span className="cursor-pointer flex flex-col text-sm">
            <span>{name || username}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
