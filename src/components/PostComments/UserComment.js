import React from "react";
import { HiChevronUp, HiChevronDown, HiOutlineTrash, HiOutlinePencilAlt, HiOutlineUserCircle } from "react-icons/hi";

function UserComment({ item, user }) {
  return (
    <div className="mb-2">
      <div className="flex p-2">
        {item.User.profileUrl ? (
          <img className="rounded-full h-6 w-6" alt="A" src={item.User.profileUrl} />
        ) : (
          <HiOutlineUserCircle className="rounded-full h-6 w-6" />
        )}
        <span className="ml-2 flex text-xs w-full items-center">
          <span className="font-semibold mr-2">{item.User.username}</span>
          <div className="overflow-ellipsis text-xs font-light flex flex-wrap">15 hours ago</div>
        </span>
      </div>
      <p className="ml-10 text-sm font-light">{item.commentDetails}</p>
      <div className="ml-10 flex mt-3">
        {user ? (
          user.id === item.userId ? (
            <>
              <button className="flex items-center mx-2">
                <HiOutlinePencilAlt />
                <span className="text-sm ml-1 font-light">edit</span>
              </button>
              <button className="flex items-center mx-2">
                <HiOutlineTrash />
                <span className="text-sm ml-1 font-light">delete</span>
              </button>
            </>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default UserComment;
