import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineCamera } from "react-icons/hi";

function ProfileSide() {
  return (
    <div className=" bg-white max-w-xs mt-4 shadow rounded-sm hidden md:block">
      <div className="group shadow relative rounded-sm w-full h-28 bg-cover text-xl font-semibold flex p-3 text-white bg-blue-300 rounded-b-none">
        <div className="group">
          <img
            className="rounded-sm h-20 w-20 shadow absolute -bottom-5 left-4 "
            alt="A"
            src="https://randomuser.me/api/portraits/men/20.jpg"
          />
          <div className="hidden group-hover:flex rounded-full w-7 h-7  bg-white  justify-center absolute z-40 -bottom-4 left-16 opacity-50">
            <button>
              <label htmlFor="pic">
                <HiOutlineCamera className="text-blue-500" />
              </label>
              <input id="pic" type="file" hidden />
            </button>
          </div>
        </div>
        <div className="hidden group-hover:flex rounded-full w-7 h-7  bg-white  justify-center absolute z-40 right-1 bottom-1 opacity-50">
          <button>
            <label htmlFor="pic">
              <HiOutlineCamera className="text-blue-500" />
            </label>
            <input id="pic" type="file" hidden />
          </button>
        </div>
      </div>
      <div className=" px-4 py-6 rounded-sm rounded-t-none">
        <p className="text-xs mb-2">u/DueNeighborhood6317</p>
        <p className="text-sm mb-5 font-light">
          A subreddit for news and discussion about Liverpool FC, a football club playing in the English Premier League.
        </p>
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
