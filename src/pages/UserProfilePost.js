import React, { useContext, useEffect, useState } from "react";
import CreateBar from "../components/Community/CreateBar";
import FeedBox from "../components/newsFeed/FeedBox";
import ProfileBar from "../components/Profile/ProfileBar";
import ProfileSide from "../components/Profile/ProfileSide";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../context/userContext";
import Popular from "../components/newsFeed/Popular";
import axios from "../config/axios";

function UserProfilePost() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/feeds/userposts").then(res => setPosts(res.data.feedLists));
  }, []);

  const clickHidepost = id => {
    const newPost = posts.filter(item => item.id !== id);
    setPosts(newPost);
  };

  return (
    <div className="bg-gray-200">
      <ProfileBar user={user} page={2} />
      <div className=" grid grid-cols-7 gap-6">
        <div className="col-start-2 col-span-3 ">
          <CreateBar />
          {posts.map((item, index) => (
            <FeedBox key={index} item={item} clickHidepost={clickHidepost} />
          ))}
        </div>
        <div className="col-span-2">
          <ProfileSide user={user} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default UserProfilePost;
