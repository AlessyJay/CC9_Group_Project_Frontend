import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";

function DropdownCard({ item, handleSelectTargetPost, setPostContent }) {
  const { user } = useContext(UserContext);
  const {
    Community: { name, profileUrl, type, userId, id },
    role,
    amount,
  } = item;
  const hanldeSelectCommunity = () => {
    handleSelectTargetPost(profileUrl, name);
    if (type === "PUBLIC") {
      setPostContent((cur) => ({
        ...cur,
        communityId: id,
        status: true,
        postTarget: true,
      }));
    } else if (type === "RESTRICTED" && userId === user.id) {
      setPostContent((cur) => ({
        ...cur,
        communityId: id,
        status: true,
        postTarget: true,
      }));
    } else {
      setPostContent((cur) => ({
        ...cur,
        communityId: id,
        status: false,
        postTarget: true,
      }));
    }
  };
  return (
    <div
      className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative   hover:bg-gray-100"
      onClick={hanldeSelectCommunity}
    >
      <div className="w-6 flex flex-col items-center mx-3">
        <div className="flex relative w-7 h-7 bg-orange-500 justify-center items-center m-1 mr-3  mt-1 rounded-full">
          <img className="rounded-full w-7 h-7" alt="A" src={profileUrl} />
        </div>
      </div>
      <div className="w-full items-start flex flex-col">
        <div className="text-sm truncate w-full normal-case font-semibold -mt-1 text-black">
          {name}
        </div>
        <div className="text-xs trunca  te w-full normal-case font-normal -mt-1 text-gray-500">
          {amount} members
        </div>
      </div>
    </div>
  );
}

export default DropdownCard;
