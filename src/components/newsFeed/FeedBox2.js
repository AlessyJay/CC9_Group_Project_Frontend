import React, { useContext, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { HiChevronUp, HiChevronDown, HiOutlineAnnotation, HiOutlineBookmark, HiOutlineEye } from "react-icons/hi";
import axios from "../../config/axios";
import { UserContext } from "../../context/userContext";
import ReactHtmlParser from "react-html-parser";
import { HiOutlineUserCircle } from "react-icons/hi";

function FeedBox2({ item }) {
  console.log(item);

  const handleHide = async e => {};
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <div className="w-96 mt-3 md:w-full flex bg-white mb-2 shadow rounded-md">
        {/* Like section starts here */}
        <div className="bg-gray-100 w-10 rounded-md rounded-r-none flex-col items-center">
          <button className="w-full flex justify-center">
            <HiChevronUp className="w-7 h-7" />
          </button>
          <div className="flex justify-center text-sm font-light">{item.like}</div>
          <button className="w-full flex justify-center">
            <HiChevronDown className="w-7 h-7" />
          </button>
        </div>

        <div className="w-full">
          <div className="flex">
            <div className="flex  p-2">
              {item?.Community?.profileUrl ? (
                <img className="rounded-full h-6 w-6" alt="A" src={item?.Community?.profileUrl} />
              ) : (
                <HiOutlineUserCircle className="rounded-full h-6 w-6" />
              )}
            </div>
            <span className="flex text-sm w-full items-center">
              <span className="font-semibold mr-2">{item?.Community?.name}</span>
              <div className="overflow-ellipsis text-xs font-light flex flex-wrap">
                {`Posted by ${item?.User?.username} 15 hours ago`}
              </div>
            </span>
          </div>
          <Link to="/#" className="w-full">
            <div className="p-1">{item.title}</div>
            <div className=" max-h-64 overflow-y-scroll font-light text-sm p-1 pt-0 mb-2 bg-white ">
              {item.descriptions ? (
                ReactHtmlParser(item.descriptions)
              ) : item.imageUrl ? (
                item.imageUrl.map(item => <img src={item} alt="" />)
              ) : (
                <video className="w-11/12 mx-auto" controls>
                  <source src={item.videoUrl} />
                </video>
              )}
            </div>
          </Link>

          <div className="p-2 flex">
            <button className="flex items-center mr-4">
              <HiOutlineAnnotation />
              <span
                onClick={() => history.push(`/posts/${item.Community.userId}/${item.id}`)}
                className="text-sm ml-1 font-light"
              >
                <span className="text-xs mr-1">{item.Comments.length}</span>
                comment
              </span>
            </button>
            <button className="flex items-center mr-4">
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

export default FeedBox2;
