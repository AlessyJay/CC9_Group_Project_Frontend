import React, { useState } from 'react';
import { HiChevronDown, HiOutlineUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import DropdownCard from './DropdownCard';

const MOCK_DATA = [
  {
    name: ' r/javascript',
    members: '10,000',
    imgUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
  {
    name: ' r/dota2',
    members: '100,000',
    imgUrl: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: ' r/css',
    members: '9,000',
    imgUrl: 'https://randomuser.me/api/portraits/men/60.jpg',
  },
  {
    name: ' r/tailwind',
    members: '12,000',
    imgUrl: 'https://randomuser.me/api/portraits/men/50.jpg',
  },
  {
    name: ' r/tailwind',
    members: '12,000',
    imgUrl: 'https://randomuser.me/api/portraits/men/20.jpg',
  },
];
function Dropdown() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [postTarget, setPostTarget] = useState({ img: '', name: '' });

  const handleSelectTargetPost = (url, name) => {
    setPostTarget((cur) => ({ ...cur, img: url, name }));
    setToggleDropdown((cur) => !cur);
  };
  return (
    <div class="flex flex-col mt-5">
      <div class="max-w-xs w-full md:w-1/2 flex flex-col items-center h-64">
        <div class="w-full px-4">
          <div class="flex flex-col items-center relative">
            <div class="absolute shadow bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
              {/* Input */}
              <div class="w-full">
                <div class="p-0.5 bg-white flex border border-gray-200 rounded">
                  <div class="flex flex-auto flex-wrap justify-center items-center">
                    {postTarget.img ? (
                      <img
                        className="rounded-full w-6 h-6 mx-2"
                        alt="A"
                        src={postTarget.img}
                      />
                    ) : (
                      <HiOutlineUserCircle fontSize="1.5em" />
                    )}
                  </div>
                  <input
                    placeholder="Choose a community"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800 font-medium"
                    value={postTarget.name}
                  />
                  <div
                    class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
                    onClick={() => setToggleDropdown((cur) => !cur)}
                  >
                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                      <HiChevronDown />
                    </button>
                  </div>
                </div>
              </div>

              {/* Lists */}
              {toggleDropdown && (
                <>
                  <div className="flex flex-col w-full">
                    <div className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                      <div className="flex justify-between  items-center mt-2 ml-5">
                        <div className="text-xs font-bold text-gray-500">
                          My Profile
                        </div>
                      </div>

                      <div
                        className="flex w-full items-center p-2 pl-2 border-transparent border-b border-gray-300 relative hover:bg-gray-100"
                        onClick={() =>
                          handleSelectTargetPost(
                            'https://randomuser.me/api/portraits/men/62.jpg',
                            'u/Content_Avatar007'
                          )
                        }
                      >
                        <div className="w-6 flex flex-col items-center mx-3">
                          <div className="flex relative w-7 h-7 bg-orange-500 justify-center items-center m-1 mr-3  mt-1 rounded-full">
                            <img
                              className="rounded-full"
                              alt="A"
                              src="https://randomuser.me/api/portraits/men/62.jpg"
                            />
                          </div>
                        </div>
                        <div className="w-full items-start flex flex-col ">
                          <div className="text-sm truncate w-full normal-case font-semibold -mt-1 text-black ">
                            u/Content_Avatar007
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between  items-center mb-2 ml-5 mt-2">
                        <div className="text-xs font-bold text-gray-500">
                          MY COMMUNITIES
                        </div>
                        <Link
                          to={'/'}
                          className="rounded-full text-xs font-bold  text-blue-500  px-4 py-1   transition duration-300 ease-in-out hover:bg-gray-300 "
                        >
                          Create New
                        </Link>
                      </div>
                      {MOCK_DATA.map((item, idx) => (
                        <DropdownCard
                          key={idx}
                          item={item}
                          handleSelectTargetPost={handleSelectTargetPost}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
