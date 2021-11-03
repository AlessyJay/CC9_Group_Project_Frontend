import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineCamera } from "react-icons/hi";
import axios from "../../config/axios";
import { UserContext } from "../../context/userContext";
function ProfileSide() {
  const { user, setUser, getNewToken } = useContext(UserContext);
  const [showProfile, setShowProfile] = useState(user.profileUrl);
  const [showBanner, setShowBanner] = useState(user.bannerUrl);
  console.log("profileUrl", user.profileUrl);
  const handleChangeProfile = async (e) => {
    try {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }
      if (e.target.files) {
        console.log(e.target.files);
        const files = URL.createObjectURL(e.target.files[0]);
        setShowProfile(files);
        const formData = new FormData();
        formData.append("profileimage", e.target.files[0]);
        const res = await axios.put(`users/updateProfile`, formData);
        alert(res.data.message);
      }
      setUser((cur) => ({
        ...cur,
        profileUrl: URL.createObjectURL(e.target.files[0]),
      }));
      URL.revokeObjectURL(e.target.files[0]);
      getNewToken();
    } catch (err) {
      console.dir(err);
    }
  };

  const handleChangeBanner = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    if (e.target.files) {
      const files = URL.createObjectURL(e.target.files[0]);
      setShowBanner(files);
    }
    setUser((cur) => ({
      ...cur,
      bannerUrl: URL.createObjectURL(e.target.files[0]),
    }));
    URL.revokeObjectURL(e.target.files[0]);
  };
  return (
    <div className=" bg-white max-w-xs mt-4 shadow rounded-sm hidden md:block">
      <div
        className="group shadow relative rounded-sm w-full h-28 bg-cover text-xl font-semibold flex p-3 text-white  rounded-b-none"
        style={{
          backgroundImage: `url(${user.bannerUrl})`,
        }}
      >
        <div className="group">
          {user.profileUrl ? (
            <img
              className="rounded-sm h-20 w-20 shadow absolute -bottom-5 left-4 border-2 bg-white border-gray-200 "
              alt="A"
              src={user.profileUrl}
            />
          ) : (
            <img
              className="rounded-sm h-20 w-20 shadow absolute -bottom-5 left-4 border-2 border-gray-200 "
              alt="A"
              src="https://randomuser.me/api/portraits/men/85.jpg"
            />
          )}
          <div className="hidden group-hover:flex rounded-full w-7 h-7  bg-white  justify-center absolute z-40 -bottom-4 left-16 opacity-50">
            <button>
              <label htmlFor="pic">
                <HiOutlineCamera className="text-blue-500" />
              </label>
              <input
                id="pic"
                type="file"
                name="profile"
                hidden
                onChange={handleChangeProfile}
              />
            </button>
          </div>
        </div>
        <div className="hidden group-hover:flex rounded-full w-7 h-7  bg-white  justify-center absolute z-40 right-1 bottom-1 opacity-50">
          <button>
            <label htmlFor="pic">
              <HiOutlineCamera className="text-blue-500" />
            </label>
            <input
              id="pic"
              type="file"
              name="banner"
              hidden
              onChange={handleChangeBanner}
            />
          </button>
        </div>
      </div>
      <div className=" px-4 py-6 rounded-sm rounded-t-none">
        <p className="text-xs mb-2">{user.username}</p>
        <p className="text-sm mb-5 font-light">
          {user.description
            ? user.description
            : "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        </p>
      </div>
      <div className="flex justify-center mx-2 pb-2">
        <Link
          to={`/create-post`}
          className="flex justify-center max-w-sm border-2 border-blue-500 rounded-full font-semibold  text-white px-6 w-full hover:bg-blue-600  bg-blue-500 "
        >
          New Post
        </Link>
      </div>
      <div className="mt-2 mx-8 border-b-2 text-sm border-gray-100"></div>
      <div className="mx-8 py-4 text-sm">Created Jul 31, 2013</div>
    </div>
  );
}

export default ProfileSide;
