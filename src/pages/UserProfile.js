import React, { useContext, useEffect, useState } from "react";
import CreateBar from "../components/Community/CreateBar";
import FeedBox from "../components/newsFeed/FeedBox";
import ProfileBar from "../components/Profile/ProfileBar";
import ProfileSide from "../components/Profile/ProfileSide";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../context/userContext";
import Popular from "../components/newsFeed/Popular";
import axios from "../config/axios";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    axios
      .get(`/feeds/useroverview/${id}`)
      .then(res => setOverview(res.data.feedLists))
      .catch(err => console.dir(err));
  }, []);

  const newArr = overview.map((item, index) => {
    if (item.UserInteractions.length === 0) {
      return item;
    } else {
      const idx = item.UserInteractions.findIndex(item2 => {
        if (item2.userId === user.id && item2.isHided) return true;
        return false;
      });

      console.log("idx", idx);
      if (idx === -1) {
        return item;
      }
    }
    return null;
  });

  const clickHidepost = id => {
    const newOverview = overview.filter(item => item.id !== id);
    setOverview(newOverview);
  };

  return (
    <div className="bg-gray-200">
      <ProfileBar user={user} page={1} />
      <div className=" grid grid-cols-7 gap-6">
        <div className="col-start-2 col-span-3 ">
          <div className="mt-4"></div>
          {newArr.map((item, index) => item && <FeedBox key={index} item={item} clickHidepost={clickHidepost} />)}
        </div>
        <div className="col-span-2">
          <ProfileSide user={user} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
