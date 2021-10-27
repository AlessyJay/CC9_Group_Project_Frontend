import React from "react";

function DropdownMenu({ item, handleSelectTarget }) {
  return (
    <div onClick={() => handleSelectTarget(item.name, item.icon)}>
      <div className="cursor-pointer px-2 pr-2 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 h-8 flex items-center">
        <div className="flex items-center">
          <div className="mr-2">{item.icon}</div>
          <span className="flex flex-col font-light text-sm">
            <span>{item.name}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
