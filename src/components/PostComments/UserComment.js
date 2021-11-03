import axios from "../../config/axios";
import React, { useContext, useState } from "react";
import {
  HiSave,
  HiOutlineTrash,
  HiOutlinePencilAlt,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { UserContext } from "../../context/userContext";

function UserComment({ item, handleUpdateComment, deleteComemnt }) {
  const { user } = useContext(UserContext);
  const [isEditting, setIsEditting] = useState(false);

  const [newComment, setNewComment] = useState(item.commentDetails);

  const handleChangenewComment = (e) => {
    setNewComment(e.target.value);
  };
  const handleClickUpdate = async (e) => {
    e.preventDefault();
    try {
      if (newComment !== "") {
        console.log(item.id);
        handleUpdateComment(item.id, newComment);
        setIsEditting(false);
        const res = await axios.put(`/comments/${item.id}`, {
          commentDetails: newComment,
        });
        alert(res.data.message);
      }
    } catch (err) {
      console.dir(err);
    }
  };
  const handleDeleteComment = async (e) => {
    try {
      deleteComemnt(item.id);
      await axios.delete(`/comments/${item.id}`);
      alert("deleted");
    } catch (err) {
      console.dir(err);
    }
  };
  return (
    <div className="mb-2">
      <div className="flex p-2">
        {item.User.profileUrl ? (
          <img
            className="rounded-full h-6 w-6"
            alt="A"
            src={item.User.profileUrl}
          />
        ) : (
          <HiOutlineUserCircle className="rounded-full h-6 w-6" />
        )}
        <span className="ml-2 flex text-xs w-full items-center">
          <span className="font-semibold mr-2">{item.User.username}</span>
          <div className="overflow-ellipsis text-xs font-light flex flex-wrap">
            15 hours ago
          </div>
        </span>
      </div>

      {isEditting ? (
        <>
          <input
            className="ml-10 text-sm w-10/12 p-1 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            type="text"
            value={newComment}
            onChange={handleChangenewComment}
          />
        </>
      ) : (
        <p className="ml-10 text-sm font-light">{item.commentDetails}</p>
      )}
      <div className="ml-10 flex mt-3">
        {user ? (
          user.id === item.userId ? (
            <>
              {isEditting && (
                <button
                  className="flex items-center mx-2"
                  onClick={handleClickUpdate}
                >
                  <HiSave />
                  <span className="text-sm ml-1 font-light">
                    Update comment
                  </span>
                </button>
              )}
              <button
                className="flex items-center mx-2"
                onClick={() => setIsEditting((cur) => !cur)}
              >
                <HiOutlinePencilAlt />
                <span className="text-sm ml-1 font-light">edit</span>
              </button>
              <button
                className="flex items-center mx-2"
                onClick={handleDeleteComment}
              >
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
