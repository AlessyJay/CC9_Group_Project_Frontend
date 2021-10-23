import React from "react";

function SearchCard({ item }) {
  return (
    <div className="py-1">
      <a
        href="#"
        className="block px-2 pr-2 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 h-8 flex items-center"
        role="menuitem"
      >
        <div className="flex items-center">
          <div className="mr-2">
            <img className="rounded-full h-6 mr-4" alt="A" src={item.imgUrl} />
          </div>
          <span className="flex flex-col text-sm">
            <span>{item.name}</span>
          </span>
        </div>
      </a>
    </div>
  );
}

export default SearchCard;
