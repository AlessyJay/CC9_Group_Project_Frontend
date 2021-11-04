import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import axios from "../config/axios";
import OtherUserProfileSide from "../components/Profile/OtherUserProlieSide";
import FeedBox from "../components/newsFeed/FeedBox";
import FeedBox2 from "../components/newsFeed/FeedBox2";
import Popular from "../components/newsFeed/Popular";

function OtherProfilePage() {
  const [user, setUser] = useState([]);
  const [postLists, setPostLists] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`/users/${id}`).then(res => setUser(res.data.user));
    axios.get(`/feeds/useroverview/${id}`).then(res => setPostLists(res.data.feedLists));
  }, [id]);

  console.log(postLists);

  // const clickHidepost = id => {
  //   const newOverview = postLists.filter(item => item.id !== id);
  // };

  return (
    <div className="bg-gray-200">
      <div className=" grid grid-cols-7 gap-6">
        <div className="col-start-2 col-span-3 ">
          <Popular />
          {postLists.map((item, index) => (
            <FeedBox item={item} key={index} />
          ))}
        </div>
        <div className="col-span-2">
          <OtherUserProfileSide user={user} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default OtherProfilePage;
