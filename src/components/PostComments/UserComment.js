import React from "react";
import { HiChevronUp, HiChevronDown, HiOutlineEye } from "react-icons/hi";

function UserComment({ item }) {
  return (
    <div className="mb-2">
      <div className="flex p-2">
        <img className="rounded-full h-6 w-6" alt="A" src={item.imgUrl} />
        <span className="ml-2 flex text-xs w-full items-center">
          <span className="font-semibold mr-2">{item.name}</span>
          <div className="overflow-ellipsis text-xs font-light flex flex-wrap">15 hours ago</div>
        </span>
      </div>
      <p className="ml-10 text-sm font-light">{item.comment}</p>
      <div className="ml-10 flex mt-3">
        <button>
          <HiChevronUp className="w-5 h-5" />
        </button>
        <div className="flex items-center text-xs font-light">0</div>
        <button className="">
          <HiChevronDown className="w-5 h-5" />
        </button>
        <button className="flex items-center mx-2">
          <HiOutlineEye />
          <span className="text-sm ml-1 font-light">hide</span>
        </button>
        <button className="flex items-center mx-2">
          <HiOutlineEye />
          <span className="text-sm ml-1 font-light">Approve</span>
        </button>
      </div>
    </div>
  );
}

export default UserComment;
