import React, { useEffect } from "react";

function DropdownCard({ item, handleSelectTargetPost, setPostContent }) {
  console.log(item);
  const {
    Community: { name, profileUrl, type, userId, id },
    role,
    amount,
  } = item;
  return (
    <div
      className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative   hover:bg-gray-100"
      onClick={() => {
        handleSelectTargetPost(profileUrl, name);
        setPostContent(cur => ({
          ...cur,
          communityId: id,
          postTarget: true,
        }));
      }}
    >
      <div className="w-6 flex flex-col items-center mx-3">
        <div className="flex relative w-7 h-7 bg-orange-500 justify-center items-center m-1 mr-3  mt-1 rounded-full">
          <img className="rounded-full w-7 h-7" alt="A" src={profileUrl} />
        </div>
      </div>
      <div className="w-full items-start flex flex-col">
        <div className="text-sm truncate w-full normal-case font-semibold -mt-1 text-black">{name}</div>
        <div className="text-xs trunca  te w-full normal-case font-normal -mt-1 text-gray-500">{amount} members</div>
      </div>
    </div>
  );
}

export default DropdownCard;
