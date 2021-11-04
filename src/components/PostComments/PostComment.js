import React, { useContext, useEffect } from "react";
import { useState } from "react";
import {
  HiChevronUp,
  HiChevronDown,
  HiOutlineAnnotation,
  HiOutlineBookmark,
  HiOutlineEye,
  HiOutlineUserCircle,
  HiOutlinePencilAlt,
  HiSave,
} from "react-icons/hi";
import UserComment from "./UserComment";
import ReactHtmlParser from "react-html-parser";
import { UserContext } from "../../context/userContext";
import axios from "../../config/axios";
import { timeDiff } from "../../services/timeDifferent";
import { useParams } from "react-router-dom";

function PostComment({ item, comment, setComment, handleUpdateComment, deleteComemnt }) {
  const { user } = useContext(UserContext);
  const [text, setText] = useState({
    userId: user?.id,
    User: { username: user?.username, profileUrl: user?.profileUrl },
    commentDetails: "",
  });
  const [isEdiiting, setIsEdiiting] = useState(false);
  const [newPost, setNewPost] = useState({});

  const handleClickEdit = () => {
    setNewPost(cur => ({ ...cur, ...item }));
    setIsEdiiting(cur => !cur);
  };

  const handleSubmitEditForm = async e => {
    e.preventDefault();
    try {
      if (newPost !== "") {
      }
    } catch (err) {}
  };

  useEffect(() => {
    setText({
      userId: user?.id,
      User: { username: user?.username, profileUrl: user?.profileUrl },
      commentDetails: "",
    });
  }, [user]);

  const handleSubmitForm = e => {
    e.preventDefault();
    axios
      .post("/comments", {
        userToNoti: item.userId,
        postId: item.id,
        commentDetails: text.commentDetails,
      })
      .then(res => console.log(res))
      .catch(err => console.dir(err));
    const newArr = [...comment];
    newArr.push(text);
    setComment(newArr);
    setText({
      userId: user.id,
      User: { username: user.username, profileUrl: user.profileUrl },
      commentDetails: "",
    });
  };

  const handleComment = e => {
    setText(cur => ({ ...cur, commentDetails: e.target.value }));
  };

  return (
    <div className="bg-white">
      <div className="w-96 md:w-full flex bg-white mb-2 rounded-md mt-3">
        <div className="bg-white w-10 rounded-md rounded-r-none flex-col items-center">
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
              {item?.Community?.profileUrl ? (
                <img className="rounded-full h-6 w-6" alt="A" src={item?.Community?.profileUrl} />
              ) : (
                <HiOutlineUserCircle className="rounded-full h-6 w-6" />
              )}
            </div>
            <span className="flex text-sm w-full items-center">
              <span className="font-semibold mr-2">{item?.Community?.name}</span>
              <div className="overflow-ellipsis text-xs font-light flex flex-wrap">
                Posted by <span className="font-semibold mx-2">{item?.User?.username}</span> {timeDiff(item.createdAt)}{" "}
                ago
              </div>
            </span>
          </div>

          <div className="p-1">{item.title}</div>
          {isEdiiting ? (
            <div className="p-2">
              <form>
                <textarea
                  className="w-full"
                  value={newPost.descriptions}
                  onChange={e => setNewPost(cur => ({ ...cur, descriptions: e.target.value }))}
                />
              </form>
            </div>
          ) : (
            <div className="overflow-ellipsis  font-light text-sm p-1 pt-0 mb-2 break-words">
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
          )}

          <div className="p-2 flex">
            {item?.userId === user?.id ? (
              <>
                {isEdiiting && (
                  <button className="flex items-center mr-4">
                    <HiSave />
                    <span className="text-sm ml-1 font-light">Save</span>
                  </button>
                )}
                <button
                  onClick={handleClickEdit}
                  disabled={item.imageUrl || item.videoUrl ? true : false}
                  className="flex items-center mr-4"
                >
                  <HiOutlinePencilAlt />
                  <span className="text-sm ml-1 font-light">Edit Post</span>
                </button>
              </>
            ) : (
              <></>
            )}
          </div>

          {user ? (
            <div className="p-2 pr-4">
              <p className="mb-2 text-sm">{`Comment as ${user.username}`}</p>
              <form onSubmit={handleSubmitForm}>
                <textarea
                  value={text.commentDetails}
                  className="bg-gray-100 w-full font-light text-sm shadow rounded-sm outline-none appearance-none p-2 h-36 break-words"
                  style={{ minHeight: "122px" }}
                  onChange={handleComment}
                />
                <button
                  className={`${
                    text.commentDetails ? "bg-blue-500 text-white" : "bg-gray-200 cursor-not-allowed"
                  }  rounded-full text-sm px-2 py-1 mt-1 transition duration-300 ease-in-out`}
                  disabled={text.commentDetails ? false : true}
                >
                  comment
                </button>
              </form>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="mx-9 my-2 pr-4 pb-1 border-b-2 border-gray-100"></div>
      <div className="pr-4 pb-4 mt-4 mr-4 ml-2">
        {comment ? (
          comment.map((item, index) => (
            <UserComment
              key={index}
              item={item}
              handleUpdateComment={handleUpdateComment}
              deleteComemnt={deleteComemnt}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default PostComment;
