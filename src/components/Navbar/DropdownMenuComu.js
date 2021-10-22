import React from "react";

function DropdownMenuComu({ item, handleSelectTarget }) {
  return (
    <div onClick={() => handleSelectTarget(item.imgUrl, item.name)}>
      <a
        href="#"
        className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center h-8"
        role="menuitem"
      >
        <div className="flex items-center">
          <img className="rounded-full h-6 mr-4" alt="A" src={item.imgUrl} />
          <span className="flex flex-col text-sm">
            <span>{item.name}</span>
          </span>
        </div>
      </a>
    </div>
  );
}

export default DropdownMenuComu;
