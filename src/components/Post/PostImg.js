import React, { useState, useEffect, useContext } from "react";
import Dropdown from "./Dropdown";
import { FaFileAlt } from "react-icons/fa";
import { ImImages } from "react-icons/im";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import DraftModel from "./DraftModel";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../../context/userContext";
import axios from "../../config/axios";
import { useHistory } from "react-router-dom";
import { Toast } from "../../services/alert";
function PostImg() {
  const { user } = useContext(UserContext);
  const [ToggleModel, setToggleModel] = useState(false);
  const [postTarget, setPostTarget] = useState({ img: "", name: "" });
  const [editPostId, setEditPostId] = useState(0);
  const [ToggleSaveDraft, setToggleSaveDraft] = useState(false);
  const history = useHistory();
  const [postContent, setPostContent] = useState({
    descriptions: "",
    type: "MAIN",
    notification: false,
    userId: user.id,
    communityId: null,
    postTarget: false,
    status: true, // เดี๋ยวกลับมาแก้
  });
  const [draftLists, setDraftLists] = useState([]);
  const [titleLength, setTitleLength] = useState(0);
  const [selectFiles, setSelectFiles] = useState([]);
  const [url1, setUrl1] = useState([]);
  const [postDraft, setPostDraft] = useState({ status: false, draftId: "" });
  console.log(postDraft, "click edit draft and prepare data for delete");
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`/posts/drafts`);
        console.log("draft", res.data.draftLists);
        setDraftLists(res.data.draftLists);
      } catch (err) {
        console.dir(err);
      }
    };
    fetch();
  }, []);

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

  // อันนี้คือของ quill
  const hanldeChangeContent = value => {
    setPostContent({ ...postContent, descriptions: value });
  };

  const handleSubmitPostContent = async e => {
    try {
      console.log("inSubmut", postContent);
      console.log(url1);
      const formData = new FormData();
      formData.append("title", postContent.title);
      formData.append("descriptions", postContent.descriptions);
      formData.append("type", postContent.type);
      formData.append("status", postContent.status);
      formData.append("notification", postContent.notification);
      if (postContent.communityId !== null) {
        formData.append("communityId", postContent.communityId);
      }
      if (url1.length !== 0) {
        // console.log("Not plain post");
        for (let i = 0; i < url1.length; i++) {
          formData.append("cloudimage", url1[i]);
        }
      }
      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
      if (!postDraft.status) {
        const res = await axios.post("/posts/createpost", formData);
        console.log(res.data.post);
        if (res.data.post.communityId !== null) {
          const res2 = await axios.get(`/communities/${postContent.communityId}`);
          history.push(`/posts/${res2.data.community.userId}/${res.data.post.id}`);
        } else {
          history.push(`/posts/${res.data.post.userId}/${res.data.post.id}`);
        }
      } else {
        const res = await axios.post("/posts/createpost", formData);
        await axios.delete(`/posts/drafts/${postDraft.draftId}`);
        if (res.data.post.communityId !== null) {
          const res2 = await axios.get(`/communities/${postContent.communityId}`);
          history.push(`/posts/${res2.data.community.userId}/${res.data.post.id}`);
        } else {
          history.push(`/posts/${res.data.post.userId}/${res.data.post.id}`);
        }
      }
      Toast.fire({
        icon: "success",
        title: "Post created!!",
      });
    } catch (err) {
      console.dir(err);
    }
  };

  const handleSaveDraftList = async () => {
    try {
      const formData = new FormData();
      formData.append("title", postContent.title);
      formData.append("descriptions", postContent.descriptions);
      formData.append("type", postContent.type);
      formData.append("status", postContent.status);
      formData.append("notification", postContent.notification);
      if (postContent.communityId !== null) {
        formData.append("communityId", postContent.communityId);
      }
      if (url1.length !== 0) {
        console.log("Not plain post");
        for (let i = 0; i < url1.length; i++) {
          formData.append("cloudimage", url1[i]);
        }
      }
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      const res = await axios.post("posts/drafts/createdraft", formData);
      console.log(res.data.post);
      alert("success");
      // history.push('/post/:postId') // push ไปหน้า post นั้นๆ และก็ fetch ข้อมูลมา
      const newDraft = [...draftLists];
      newDraft.push(res.data.post);
      setDraftLists(newDraft);
      setPostContent(cur => ({
        ...cur,
        title: "",
        descriptions: "",
        type: "MAIN",
        notification: false,
        userId: user.id,
        communityId: null,
        postTarget: false,
        status: true,
      }));
      setTitleLength(0);
    } catch (err) {
      console.dir(err);
    }
  };

  const handleEditPost = (id, obj) => {
    console.log("objjjj", obj);
    setPostContent(cur => ({
      ...cur,
      title: obj.title,
      descriptions: obj.descriptions,
      type: obj.type.toLowerCase() === "main" ? "MAIN" : "IMG",
      notification: obj.allowNotification,
      userId: obj.userId,
      communityId: obj.communityId,
      postTarget: true,
      status: true,
    }));
    setEditPostId(id);
    setTitleLength(obj.title.length);
    if (obj.communityId === null) {
      setPostTarget(cur => ({
        ...cur,
        img: user.profileUrl,
        name: user.username,
      }));
    } else {
      setPostTarget(cur => ({
        ...cur,
        img: obj.Community?.profileUrl,
        name: obj.Community?.name,
      }));
    }
    setToggleModel(false);
    setToggleSaveDraft(true);
  };

  const handleSaveEdit = async () => {
    try {
      console.log(editPostId);
      console.log("afteredit", postContent);
      const formData = new FormData();
      formData.append("title", postContent.title);
      formData.append("descriptions", postContent.descriptions);
      formData.append("type", postContent.type);
      formData.append("status", postContent.status);
      formData.append("notification", postContent.notification);
      if (postContent.communityId !== null) {
        formData.append("communityId", postContent.communityId);
      }
      if (url1.length !== 0) {
        console.log("Not plain post");
        for (let i = 0; i < url1.length; i++) {
          formData.append("cloudimage", url1[i]);
        }
      }
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      const res = await axios.put(`/posts/drafts/${editPostId}`, formData);
      alert(res.data.messasge);
      const newEdit = draftLists.map(item => (item.id === editPostId ? { ...item, ...postContent } : item));
      setDraftLists(newEdit);
      setToggleSaveDraft(false);
      setPostContent({
        title: "",
        descriptions: "",
        type: "MAIN",
        notification: false,
        userId: user.id,
        communityId: null,
        postTarget: false,
        status: true,
      });
    } catch (err) {
      console.dir(err);
    }
  };

  const handleRemoveDraft = async id => {
    try {
      await axios.delete(`/posts/drafts/${id}`);
      const idx = draftLists.findIndex(item => item.id === id);
      const newArr = [...draftLists];
      newArr.splice(idx, 1);
      setDraftLists(newArr);
    } catch (err) {
      console.dir(err);
    }
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
              <span className="ml-2 px-2  font-semibold text-gray-100 bg-gray-500 rounded hover:bg-gray-600">
                {draftLists.length}
              </span>
            </div>
          </div>
        </div>
        {/* Dropdown on click */}
        <Dropdown setPostContent={setPostContent} postTarget={postTarget} setPostTarget={setPostTarget} />
        {ToggleModel && (
          <DraftModel
            setToggleModel={setToggleModel}
            draftLists={draftLists}
            handleEditPost={handleEditPost}
            handleRemoveDraft={handleRemoveDraft}
            setPostDraft={setPostDraft}
          />
        )}
        {/* Main  */}
        <div className="mt-12 max-w-3xl flex flex-col">
          <div class="grid grid-cols-2 ">
            <label
              className={`group relative ${
                postContent.type === "MAIN" ? "border-b-2 border-blue-600 " : "border-r border-b"
              }  rounded-tl-lg py-3 px-4 flex items-center justify-center text-sm font-medium  hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer`}
            >
              <input type="radio" name="type" value="MAIN" className="sr-only" onChange={handleChangePostContent} />
              <FaFileAlt className="text-blue-600 mr-2" />
              <p id="post">Post</p>

              <div class="absolute -inset-px  pointer-events-none" aria-hidden="true"></div>
            </label>

            <label
              className={`group relative ${
                postContent.type === "IMG" ? "border-b-2 border-blue-600" : "border-l border-b"
              }  rounded-tr-lg py-3 px-4 flex items-center justify-center text-sm font-medium  hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer`}
            >
              <input type="radio" name="type" value="IMG" className="sr-only" onChange={handleChangePostContent} />

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

          {postContent.type === "MAIN" ? (
            <div className="bg-white w-full border-l border-r">
              <div className="w-11/12 mx-auto bg-gray-50">
                <EditorToolbar toolbarId={"t1"} />
                <ReactQuill
                  theme="snow"
                  value={postContent.descriptions}
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
              <div className="w-11/12 mx-auto bg-gray-50 h-12 shadow">
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
                  checked={postContent.notification}
                />
                <label className="text-xs font-medium">Send me post reply notifications</label>
              </div>
              <div>
                {ToggleSaveDraft ? (
                  <button
                    onClick={handleSaveEdit}
                    className="border-2 border-yellow-500 rounded-full font-semibold my-5 text-yellow-500 px-4  transition duration-300 ease-in-out hover:bg-yellow-500 hover:text-black mr-6  "
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
