import React from "react";
import { useState } from "react";
import { HiChevronUp, HiChevronDown, HiOutlineAnnotation, HiOutlineBookmark, HiOutlineEye } from "react-icons/hi";
import UserComment from "./UserComment";

function PostComment() {
  const [text, setText] = useState({
    name: " r/tailwind",
    imgUrl: "https://randomuser.me/api/portraits/men/20.jpg",
    comment: "",
  });
  const [data, setData] = useState([]);

  const handleSubmitForm = e => {
    e.preventDefault();
    const newArr = [...data];
    newArr.push(text);
    setData(newArr);
    setText({
      name: " r/tailwind",
      imgUrl: "https://randomuser.me/api/portraits/men/20.jpg",
      comment: "",
    });
  };

  const handleComment = e => {
    setText(cur => ({ ...cur, comment: e.target.value }));
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
              <img className="rounded-full h-6 w-6" alt="A" src="https://randomuser.me/api/portraits/men/85.jpg" />
            </div>
            <span className="flex text-sm w-full items-center">
              <span className="font-semibold mr-2">r/javascript</span>
              <div className="overflow-ellipsis text-xs font-light flex flex-wrap">
                Posted byu/logicspock 15 hours ago
              </div>
            </span>
          </div>

          <div className="p-1">Title Content</div>
          <div className="overflow-ellipsis  font-light text-sm p-1 pt-0 mb-2 break-words">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </div>

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

          <div className="p-2 pr-4">
            <p className="mb-2 text-sm">Comment as DueNeighborhood6317</p>
            <form onSubmit={handleSubmitForm}>
              <textarea
                value={text.comment}
                className="bg-gray-100 w-full font-light text-sm shadow rounded-sm outline-none appearance-none p-2 h-36 break-words"
                style={{ minHeight: "122px" }}
                onChange={handleComment}
              />
              <button
                className={`${
                  text.comment ? "bg-blue-500 text-white" : "bg-gray-200 cursor-not-allowed"
                }  rounded-full text-sm px-2 py-1 mt-1 transition duration-300 ease-in-out`}
                disabled={text.comment ? false : true}
              >
                comment
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-9 my-2 pr-4 pb-1 border-b-2 border-gray-100"></div>
      <div className="pr-4 pb-4 mt-4 mr-4 ml-2">
        {data.map((item, index) => (
          <UserComment key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PostComment;
