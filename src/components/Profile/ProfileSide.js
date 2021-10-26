import React from "react";
import { Link } from "react-router-dom";

function ProfileSide() {
  return (
    <div className=" bg-white max-w-xs mt-3 shadow rounded-sm hidden md:block">
      <div className="shadow relative rounded-sm w-full h-28 bg-cover text-xl font-semibold flex p-3 text-white bg-blue-500 rounded-b-none">
        <img
          className="rounded-sm h-20 w-20 shadow absolute -bottom-5 left-4"
          alt="A"
          src="https://randomuser.me/api/portraits/men/20.jpg"
        />
      </div>
      <div className=" px-4 py-6 rounded-sm rounded-t-none">
        <p className="text-sm mb-5">u/DueNeighborhood6317</p>
      </div>
      <div className="flex justify-center mx-2 pb-2">
        <Link className="flex justify-center max-w-sm border-2 border-blue-500 rounded-full font-semibold  text-white px-6 w-full hover:bg-blue-600  bg-blue-500 ">
          New Post
        </Link>
      </div>
      <div className="mt-2 mx-8 border-b-2 text-sm border-gray-100"></div>
      <div className="mx-8 py-4 text-sm">Created Jul 31, 2013</div>
    </div>
  );
}

export default ProfileSide;
