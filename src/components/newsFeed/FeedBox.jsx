import React, { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { HiChevronUp, HiChevronDown, HiOutlineAnnotation, HiOutlineBookmark, HiOutlineEye } from "react-icons/hi";
import axios from "../../config/axios";
import { UserContext } from "../../context/userContext";
import ReactHtmlParser from "react-html-parser";
import { HiOutlineUserCircle } from "react-icons/hi";
import { timeDiff } from "../../services/timeDifferent";

function FeedBox({ item, clickHidepost }) {
  const handleHide = async e => {
    try {
      const res = await axios.post(`/posts/hidepost/${item.id}`, {
        isHided: true,
      });
      clickHidepost(item.id);
      alert(res.data.message);
    } catch (err) {
      console.dir(err);
    }
  };
  const handleClickSave = async e => {
    try {
      e.preventDefault();
      const res = await axios.post(`/posts/savepost/${item.id}`, {
        isSaved: true,
      });
      alert(res.data.message);
    } catch (err) {
      console.dir(err);
    }
  };

  const history = useHistory();
  // const location = useLocation();

  return (
    <>
      <div className="w-96 md:w-full flex bg-white mb-2 shadow rounded-md">
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
            <div
              onClick={() => history.push(`/community/${item.Community.name}/${item.communityId}`)}
              className=" cursor-pointer flex  p-2"
            >
              {item.Community.profileUrl ? (
                <img className="rounded-full h-6 w-6" alt="A" src={item.Community.profileUrl} />
              ) : (
                <HiOutlineUserCircle className="rounded-full h-6 w-6" />
              )}
            </div>
            <span className="flex text-sm w-full items-center">
              <span
                onClick={() => history.push(`/community/${item.Community.name}/${item.communityId}`)}
                className="cursor-pointer font-semibold mr-2"
              >
                {item.Community.name}
              </span>
              <div className=" cursor-pointer overflow-ellipsis text-xs font-light flex flex-wrap">
                Posted by{" "}
                <span onClick={() => history.push(`/user/${item.User.id}`)} className="font-semibold mx-2">
                  {item.User.username}
                </span>
                {item?.createdAt ? timeDiff(item?.createdAt) : null} ago
              </div>
            </span>
          </div>
          <Link to="/#" className="w-full">
            <div className="p-1 text-xl ml-3">{item.title}</div>
            <div className="ml-2 max-h-64 overflow-y-scroll font-light text-sm p-1 pt-0 mb-2 bg-white ">
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
            <button className="flex items-center mr-4" onClick={handleClickSave}>
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
