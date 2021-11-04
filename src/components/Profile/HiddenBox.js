import React, { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { HiOutlineEyeOff } from "react-icons/hi";
import axios from "../../config/axios";
import { UserContext } from "../../context/userContext";
import ReactHtmlParser from "react-html-parser";
import { HiOutlineUserCircle } from "react-icons/hi";
import { timeDiff } from "../../services/timeDifferent";

function HiddenBox({ item, handleClickUnhide }) {
  const history = useHistory();

  const {
    Post: {
      id: postid,
      title,
      communityId,
      createdAt,
      Community: { name, id, profileUrl },
      User: { username, id: userid },
    },
  } = item;

  return (
    <>
      <div className="w-96 md:w-full flex bg-white mb-2 shadow rounded-md mt-4">
        {/* Like section starts here */}
        <div className="bg-gray-100 w-10 rounded-md rounded-r-none flex-col items-center"></div>

        <div className="w-full">
          <div className="flex">
            <div className=" cursor-pointer flex  p-2">
              {profileUrl ? (
                <img className="rounded-full h-6 w-6" alt="A" src={profileUrl} />
              ) : (
                <HiOutlineUserCircle className="rounded-full h-6 w-6" />
              )}
            </div>
            <span className="flex text-sm w-full items-center">
              <span
                onClick={() => history.push(`/community/${name}/${communityId}`)}
                className="cursor-pointer font-semibold mr-2"
              >
                {name}
              </span>
              <div className=" cursor-pointer overflow-ellipsis text-xs font-light flex flex-wrap">
                Posted by{" "}
                <span onClick={() => history.push(`/user/${userid}`)} className="font-semibold mx-2">
                  {username}
                </span>
                {createdAt ? timeDiff(createdAt) : null} ago
              </div>
            </span>
          </div>
          <Link to={`/posts/${id}/${postid}`} className="w-full">
            <div className="p-1 text-xl ml-3">{title}</div>
            <div className="ml-2 max-h-6 overflow-y-scroll font-light text-sm p-1 pt-0 mb-2 bg-white "></div>
          </Link>

          <div className="p-2 flex">
            <button onClick={() => handleClickUnhide(item.id, postid)} className="flex items-center mr-4" type="button">
              <HiOutlineEyeOff />
              <span className="text-sm ml-1 font-light">Unhide</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HiddenBox;
