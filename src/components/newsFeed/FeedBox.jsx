import React from "react";
import { Link } from "react-router-dom";
import { HiChevronUp, HiChevronDown, HiOutlineAnnotation, HiOutlineBookmark, HiOutlineEye } from "react-icons/hi";

function FeedBox() {
  return (
    <>
      <div className="w-96 md:w-full flex bg-white mb-2 shadow rounded-md">
        {/* Like section starts here */}
        <div className="bg-gray-100 w-10 rounded-md rounded-r-none flex-col items-center">
          <button className="w-full flex justify-center">
            <HiChevronUp className="w-7 h-7" />
          </button>
          <div className="flex justify-center text-sm font-light">0</div>
          <button className="w-full flex justify-center">
            <HiChevronDown className="w-7 h-7" />
          </button>
        </div>

        <div className="w-full">
          <div className="flex">
            <div className="flex  p-2">
              <img className="rounded-full h-6 w-6" alt="A" src="https://randomuser.me/api/portraits/men/85.jpg" />
            </div>
            <span className="flex text-sm w-full items-center">
              <span className="font-semibold mr-2">r/javascript</span>
              <div className="overflow-ellipsis text-xs font-light flex flex-wrap">
                Posted byu/logicspock 15 hours ago
              </div>
            </span>
          </div>
          <Link to={"#"} className="w-full">
            <div className="p-1">Title Content</div>
            <div className="overflow-ellipsis  font-light text-sm p-1 pt-0 mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </Link>

          <div className="p-2 flex">
            <button className="flex items-center mr-4">
              <HiOutlineAnnotation />
              <span className="text-sm ml-1 font-light">comment</span>
            </button>
            <button className="flex items-center mr-4">
              <HiOutlineBookmark />
              <span className="text-sm ml-1 font-light">save</span>
            </button>
            <button className="flex items-center mr-4">
              <HiOutlineEye />
              <span className="text-sm ml-1 font-light">hide</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedBox;
