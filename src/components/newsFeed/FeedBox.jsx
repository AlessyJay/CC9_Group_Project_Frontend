import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  HiOutlineAnnotation,
  HiOutlineBookmark,
  HiOutlineEye,
  HiThumbUp,
} from "react-icons/hi";
import axios from "../../config/axios";
import { UserContext } from "../../context/userContext";
import ReactHtmlParser from "react-html-parser";
import { HiOutlineUserCircle } from "react-icons/hi";
import { timeDiff } from "../../services/timeDifferent";
import { Toast2 } from "../../services/alert";

function FeedBox({ item, clickHidepost }) {
  //userInteraction => array ของ เลข post ที่ user กดไลค์
  const { userInteraction, setUserInteraction } = useContext(UserContext);
  const [postLike, setPostLike] = useState(item.like);
  const [isLiked, setIsLiked] = useState(userInteraction.includes(item.id));
  const handleHide = async (e) => {
    try {
      await axios.post(`/posts/hidepost/${item.id}`, {
        isHided: true,
      });
      clickHidepost(item.id);
      Toast2.fire({
        icon: "success",
        title: "Hided",
      });
      // alert(res.data.message);
    } catch (err) {
      console.dir(err);
    }
  };
  const handleClickSave = async (e) => {
    try {
      e.preventDefault();
      await axios.post(`/posts/savepost/${item.id}`, {
        isSaved: true,
      });
      Toast2.fire({
        icon: "success",
        title: "Saved",
      });
    } catch (err) {
      console.dir(err);
    }
  };
  const history = useHistory();
  // const location = useLocation();
  // console.log(userInteraction);
  const handleClicklike = async (e) => {
    e.preventDefault();
    try {
      if (!isLiked) {
        await axios.post(`/posts/likepost/${item.id}`, {
          like: 1,
          isLiked: true,
        });
        setIsLiked(true);
        setUserInteraction((cur) => [...cur, item.id]);
        setPostLike((cur) => cur + 1);
        const res = await axios.get("/posts/getaction");
        setUserInteraction(res.data.action);
      } else {
        await axios.post(`/posts/likepost/${item.id}`, {
          like: -1,
          isLiked: false,
        });
        setIsLiked(false);
        setPostLike((cur) => cur - 1);
        const res = await axios.get("/posts/getaction");
        setUserInteraction(res.data.action);
      }
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <>
      <div className="w-96 md:w-full flex bg-white mb-2 shadow rounded-md">
        {/* Like section starts here */}
        <div className="bg-gray-100 w-10 rounded-md rounded-r-none flex-col items-center">
          <button
            className="w-full flex justify-center"
            onClick={handleClicklike}
          >
            <HiThumbUp
              className={`w-5 h-5 mt-2 ${
                userInteraction.includes(item.id) ? "text-red-600" : ""
              }`}
            />
          </button>
          <div className="flex justify-center text-sm font-light">
            {postLike}
          </div>
        </div>

        <div className="w-full">
          <div className="flex">
            <div
              onClick={() =>
                history.push(
                  `/community/${item.Community.name}/${item.communityId}`
                )
              }
              className=" cursor-pointer flex  p-2"
            >
              {item.Community.profileUrl ? (
                <img
                  className="rounded-full h-6 w-6"
                  alt="A"
                  src={item.Community.profileUrl}
                />
              ) : (
                <HiOutlineUserCircle className="rounded-full h-6 w-6" />
              )}
            </div>
            <span className="flex text-sm w-full items-center">
              <span
                onClick={() =>
                  history.push(
                    `/community/${item.Community.name}/${item.communityId}`
                  )
                }
                className="cursor-pointer font-semibold mr-2"
              >
                {item.Community.name}
              </span>
              <div className=" cursor-pointer overflow-ellipsis text-xs font-light flex flex-wrap">
                Posted by{" "}
                <span
                  onClick={() => history.push(`/user/${item.User.id}`)}
                  className="font-semibold mx-2"
                >
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
                item.imageUrl.map((item) => <img src={item} alt="" />)
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
                onClick={() =>
                  history.push(`/posts/${item.Community.userId}/${item.id}`)
                }
                className="text-sm ml-1 font-light"
              >
                <span className="text-xs mr-1">{item.Comments.length}</span>
                comment
              </span>
            </button>
            <button
              className="flex items-center mr-4"
              onClick={handleClickSave}
            >
              <HiOutlineBookmark />
              <span className="text-sm ml-1 font-light">save</span>
            </button>
            <button
              className="flex items-center mr-4"
              type="button"
              onClick={handleHide}
            >
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
