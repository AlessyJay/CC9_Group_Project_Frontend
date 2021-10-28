import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { FaFileAlt } from "react-icons/fa";
import { ImImages } from "react-icons/im";
import { HiXCircle } from "react-icons/hi";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import DraftModel from "./DraftModel";
import { MOCK_DRAFT } from "../../services/timeDifferent";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";

function PostImg() {
  const [ToggleModel, setToggleModel] = useState(false);
  const [ToggleSaveDraft, setToggleSaveDraft] = useState(false);
  const [postContent, setPostContent] = useState({
    id: 2,
    title: "",
    description: "",
    type: "post",
    notification: false,
    userId: "",
    communityId: null,
    postTarget: false,
    target: "u/Content_Avatar001",
    updatedAt: "2021-10-17 16:38:39",
  });
  const [draftLists, setDraftLists] = useState([]);
  const [titleLength, setTitleLength] = useState(0);
  const [selectFiles, setSelectFiles] = useState([]);
  const [url1, setUrl1] = useState([]);

  console.log(url1);
  console.log(selectFiles);

  console.log("React quill logging :", postContent.description);
  const handleChangePostContent = e => {
    if (e.target.name === "title") {
      setTitleLength(e.target.value.length);
      setPostContent(cur => ({ ...cur, title: e.target.value }));
    } else if (e.target.name === "notification") {
      setPostContent(cur => ({
        ...cur,
        notification: !postContent.notification,
      }));
    } else {
      setPostContent(cur => ({ ...cur, [e.target.name]: e.target.value }));
    }
  };
  const hanldeChangeContent = value => {
    setPostContent({ ...postContent, description: value });
  };

  const handleSubmitPostContent = async e => {
    try {
      console.log(postContent);
    } catch (err) {
      console.log("Create Post:", err);
      console.dir(err);
    }
  };

  const handleSaveDraftList = () => {
    const newDraft = [...draftLists];
    newDraft.push(postContent);
    setDraftLists(newDraft);
    setPostContent({
      id: 2,
      title: "",
      type: "post",
      notification: false,
      userId: "",
      communityId: null,
      postTarget: false,
      target: "u/Content_Avatar001",
      updatedAt: "2021-10-17 16:38:39",
    });

    window.location.reload();
  };
  console.log(postContent.title);

  const handleEditPost = id => {
    const idx = draftLists.findIndex(item => item.id === id);
    setPostContent(cur => ({ ...cur, ...draftLists[idx] }));
    setToggleModel(false);
    setToggleSaveDraft(true);
  };

  const handleSaveEdit = id => {
    const newEdit = draftLists.map(item => (item.id === id ? { ...item, ...postContent } : item));
    setDraftLists(newEdit);
    setToggleSaveDraft(false);
    setPostContent({
      id: 2,
      title: "",
      description: "",
      type: "post",
      notification: false,
      userId: "",
      communityId: null,
      postTarget: false,
      target: "u/Content_Avatar001",
      updatedAt: "2021-10-17 16:38:39",
    });
  };

  const handleRemoveDraft = id => {
    const idx = draftLists.findIndex(item => item.id === id);
    const newArr = [...draftLists];
    newArr.splice(idx, 1);
    setDraftLists(newArr);
  };

  const handleFiles = e => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setSelectFiles(cur => cur.concat(filesArray));
      Array.from(e.target.files).map(file => URL.revokeObjectURL(file));
    }
    setUrl1(cur => [...cur, ...e.target.files]);
  };

  const handleRemoveFiles = e => {
    console.log(e.target.id);
    const arrFile = [...selectFiles];
    arrFile.splice(e.target.id, 1);
    const arrUrl1 = [...url1];
    arrUrl1.splice(e.target.id, 1);
    setSelectFiles(arrFile);
    setUrl1(arrUrl1);
  };

  return (
    <div className="w-full mt-3">
      <div className="w-full">
        {/* Header Create */}
        <div className=" max-w-3xl flex items-center justify-between  border-b-2 border-gray-300 pb-2 ">
          <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Create Post</h1>

          <div
            className=" rounded-full px-3 py-1 hover:bg-gray-200 hover:border-gray-300 border"
            onClick={() => setToggleModel(true)}
          >
            <div className="w-full   rounded-md shadow-sm ">
              <span>Draft</span>
              <span to={"/"} className="ml-2 px-2  font-semibold text-gray-100 bg-gray-500 rounded hover:bg-gray-600">
                {draftLists.length}
              </span>
            </div>
          </div>
        </div>
        {/* Dropdown on click */}
        <Dropdown setPostContent={setPostContent} />
        {ToggleModel && (
          <DraftModel
            setToggleModel={setToggleModel}
            draftLists={draftLists}
            handleEditPost={handleEditPost}
            handleRemoveDraft={handleRemoveDraft}
          />
        )}
        {/* Main  */}
        <div className="mt-12 max-w-3xl flex flex-col">
          <div class="grid grid-cols-2 ">
            <label
              className={`group relative ${
                postContent.type === "post" ? "border-b-2 border-blue-600 " : "border-r border-b"
              }  rounded-tl-lg py-3 px-4 flex items-center justify-center text-sm font-medium  hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer`}
            >
              <input type="radio" name="type" value="post" className="sr-only" onChange={handleChangePostContent} />
              <FaFileAlt className="text-blue-600 mr-2" />
              <p id="post">Post</p>

              <div class="absolute -inset-px  pointer-events-none" aria-hidden="true"></div>
            </label>

            <label
              className={`group relative ${
                postContent.type === "image-video" ? "border-b-2 border-blue-600" : "border-l border-b"
              }  rounded-tr-lg py-3 px-4 flex items-center justify-center text-sm font-medium  hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer`}
            >
              <input
                type="radio"
                name="type"
                value="image-video"
                className="sr-only"
                onChange={handleChangePostContent}
              />

              <ImImages className="text-blue-600 mr-2 text-base" />
              <p id="image-video">Image &amp; Video</p>

              <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
            </label>
          </div>

          <div className="flex justify-center bg-white py-3 relative border-l border-r ">
            <input
              className="overflow-ellipsis overflow-hidden py-1 pl-5 pr-16 border-black border  w-11/12 shadow-sm sm:text-sm rounded place-content-center align-middle"
              type="text"
              name="title"
              placeholder="title"
              value={postContent.title}
              onChange={handleChangePostContent}
              maxLength="100"
            />
            <div
              className={`absolute right-0 mr-10 text-xs top-4 pt-0.5  ${titleLength === 100 ? "text-red-600" : ""}`}
            >{`${titleLength} / 100 `}</div>
          </div>

          {postContent.type === "post" ? (
            <div className="bg-white w-full border-l border-r">
              <div className="w-11/12 mx-auto bg-gray-50">
                <EditorToolbar toolbarId={"t1"} />
                <ReactQuill
                  theme="snow"
                  value={postContent.description}
                  onChange={hanldeChangeContent}
                  placeholder={"Write something awesome..."}
                  modules={modules("t1")}
                  formats={formats}
                />
              </div>
            </div>
          ) : (
            // Drag and Drop
            <div className="bg-white w-full">
              <div className="w-11/12 mx-auto bg-gray-50 h-16 shadow">
                {url1[0]?.type === "video/mp4" ? (
                  <Button
                    onClick={() => {
                      setUrl1([]);
                      setSelectFiles([]);
                    }}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                ) : (
                  <Button variant="contained" component="label">
                    Upload File
                    <input type="file" hidden multiple onChange={handleFiles} accept="video/mp4 image/*" />
                  </Button>
                )}
              </div>
              <div className=" w-11/12 mx-auto bg-gray-50  shadow mt-1 flex  items-center overflow-x-scroll">
                {url1[0]?.type === "video/mp4"
                  ? selectFiles.map(item => (
                      <video key={item} className="w-11/12 mx-auto" controls>
                        <source src={item} />
                      </video>
                    ))
                  : selectFiles.map((item, index) => (
                      <img
                        className="h-36 p-3 cursor-pointer"
                        src={item}
                        alt=""
                        key={item}
                        id={index}
                        onClick={handleRemoveFiles}
                      />
                    ))}
              </div>
            </div>
          )}
          <div className="bg-white w-full border-l border-r ">
            <div className="w-11/12 mx-auto flex justify-between">
              <div className="flex items-center">
                <input
                  className="mr-2 checked:bg-blue-600 checked:border-transparent "
                  type="checkbox"
                  name="notification"
                  onChange={handleChangePostContent}
                />
                <label className="text-xs font-medium">Send me post reply notifications</label>
              </div>
              <div>
                {ToggleSaveDraft ? (
                  <button
                    onClick={() => handleSaveEdit(postContent.id)}
                    className="border-2 border-blue-500 rounded-full font-semibold my-5 text-blue-500 px-4  transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6  "
                  >
                    Save Edit
                  </button>
                ) : (
                  <button
                    onClick={handleSaveDraftList}
                    className="border-2 border-blue-500 rounded-full font-semibold my-5 text-blue-500 px-4  transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6  "
                  >
                    Save Draft
                  </button>
                )}

                <button
                  onClick={handleSubmitPostContent}
                  className={`${
                    postContent.postTarget && postContent.title !== ""
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 cursor-not-allowed"
                  }  rounded-full font-semibold my-5  px-4 py-1 transition duration-300 ease-in-out`}
                  disabled={postContent.postTarget && postContent.title !== "" ? false : true}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostImg;
