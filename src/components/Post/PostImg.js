import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { FaFileAlt } from 'react-icons/fa';
import { ImImages } from 'react-icons/im';
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import DraftModel from './DraftModel';
import { MOCK_DRAFT } from '../../services/timeDifferent';

function PostImg() {
  const [ToggleModel, setToggleModel] = useState(false);
  const [postContent, setPostContent] = useState({
    title: '',
    description: '',
    type: 'post',
    notification: false,
    userId: '',
    communityId: '',
    postTarget: false,
  });
  const [titleLength, setTitleLength] = useState(0);

  const handleChangePostContent = (e) => {
    if (e.target.name === 'title') {
      setTitleLength(e.target.value.length);
      setPostContent((cur) => ({ ...cur, title: e.target.value }));
    } else if (e.target.name === 'notification') {
      setPostContent((cur) => ({
        ...cur,
        notification: !postContent.notification,
      }));
    } else {
      setPostContent((cur) => ({ ...cur, [e.target.name]: e.target.value }));
    }
  };
  const hanldeChangeContent = (value) => {
    setPostContent({ ...postContent, description: value });
  };

  const handleSubmitPostContent = async (e) => {
    try {
      console.log(postContent);
    } catch (err) {
      console.log('Create Post:', err);
      console.dir(err);
    }
  };
  return (
    <div className="overflow-x-hidden bg-gray-100">
      <div className="px-6 py-8">
        <div className="container flex justify-between mx-auto">
          <div className="w-full lg:w-8/12 mx-auto content-center ">
            {/* Header Create */}
            <div className=" max-w-3xl flex items-center justify-between  border-b-2 border-gray-300 pb-2 ">
              <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                Create Post
              </h1>

              <div
                className=" rounded-full px-3 py-1 hover:bg-gray-200 hover:border-gray-300 border"
                onClick={() => setToggleModel(true)}
              >
                <div className="w-full   rounded-md shadow-sm ">
                  <span>Draft</span>
                  <span
                    to={'/'}
                    className="ml-2 px-2  font-semibold text-gray-100 bg-gray-500 rounded hover:bg-gray-600"
                  >
                    {MOCK_DRAFT.length}
                  </span>
                </div>
              </div>
            </div>
            {/* Dropdown on click */}
            <Dropdown setPostContent={setPostContent} />
            {ToggleModel && <DraftModel setToggleModel={setToggleModel} />}
            {/* Main  */}
            <div className="mt-12 max-w-3xl flex flex-col">
              <div class="grid grid-cols-2 ">
                <label
                  className={`group relative ${
                    postContent.type === 'post'
                      ? 'border-b-2 border-blue-600 '
                      : 'border-r border-b'
                  }  rounded-tl-lg py-3 px-4 flex items-center justify-center text-sm font-medium  hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer`}
                >
                  <input
                    type="radio"
                    name="type"
                    value="post"
                    className="sr-only"
                    onChange={handleChangePostContent}
                  />
                  <FaFileAlt className="text-blue-600 mr-2" />
                  <p id="post">Post</p>

                  <div
                    class="absolute -inset-px  pointer-events-none"
                    aria-hidden="true"
                  ></div>
                </label>

                <label
                  className={`group relative ${
                    postContent.type === 'image-video'
                      ? 'border-b-2 border-blue-600'
                      : 'border-l border-b'
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

                  <div
                    class="absolute -inset-px rounded-md pointer-events-none"
                    aria-hidden="true"
                  ></div>
                </label>
              </div>

              <div className="flex justify-center bg-white py-3 relative border-l border-r ">
                <input
                  className="overflow-ellipsis overflow-hidden py-1 pl-5 pr-16 border-black border  w-11/12 shadow-sm sm:text-sm rounded place-content-center align-middle"
                  type="text"
                  name="title"
                  placeholder="title"
                  autocomplete="address-level1"
                  value={postContent.title}
                  onChange={handleChangePostContent}
                  maxLength="100"
                />
                <div
                  className={`absolute right-0 mr-10 text-xs top-4 pt-0.5  ${
                    titleLength === 100 ? 'text-red-600' : ''
                  }`}
                >{`${titleLength} / 100 `}</div>
              </div>

              {postContent.type === 'post' ? (
                <div className="bg-white w-full border-l border-r">
                  <div className="w-11/12 mx-auto bg-gray-50">
                    <EditorToolbar toolbarId={'t1'} />
                    <ReactQuill
                      theme="snow"
                      value={postContent.description}
                      onChange={hanldeChangeContent}
                      placeholder={'Write something awesome...'}
                      modules={modules('t1')}
                      formats={formats}
                    />
                  </div>
                </div>
              ) : (
                ''
                // Drag and Drop
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
                    <label className="text-xs font-medium">
                      Send me post reply notifications
                    </label>
                  </div>
                  <div>
                    <button className="border-2 border-blue-500 rounded-full font-semibold my-5 text-blue-500 px-4  transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6 ">
                      Save Draft
                    </button>
                    <button
                      onClick={handleSubmitPostContent}
                      className={`${
                        postContent.postTarget && postContent.title !== ''
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 cursor-not-allowed'
                      }  rounded-full font-semibold my-5  px-4 py-1 transition duration-300 ease-in-out`}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostImg;
