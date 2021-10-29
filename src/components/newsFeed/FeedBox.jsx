import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiChevronUp, HiChevronDown, HiOutlineAnnotation, HiOutlineBookmark, HiOutlineEye } from "react-icons/hi";
import axios from "../../config/axios";
import { UserContext } from "../../context/userContext";

function FeedBox() {
  const { arrUserCommu } = useContext(UserContext);

  const handleHide = async e => {};
  const handleClick = async e => {
    try {
      e.preventDefault();

      const res = await axios.post("/posts/savepost/1", { isSaved: true });
      console.log("19", location);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      console.dir(err);
    }
  };

  const location = useLocation();

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
          <Link to="/#" className="w-full">
            <div className="p-1">Title Content</div>
            <div className=" max-h-64 overflow-y-scroll font-light text-sm p-1 pt-0 mb-2 bg-white ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is
              scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is
              scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
              scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is
              scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
              scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and scrambled
              it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when scrambled it
              to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has
            </div>
          </Link>

          <div className="p-2 flex">
            <button className="flex items-center mr-4">
              <HiOutlineAnnotation />
              <span className="text-sm ml-1 font-light">comment</span>
            </button>
            <button onClick={handleClick} className="flex items-center mr-4">
              <HiOutlineBookmark />
              <span className="text-sm ml-1 font-light">save</span>
            </button>
            <button className="flex items-center mr-4" type="button" onClick={handleHide}>
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
