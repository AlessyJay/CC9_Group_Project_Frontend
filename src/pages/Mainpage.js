import React, { useContext, useEffect, useState } from "react";
import FeedBox from "../components/newsFeed/FeedBox";
import Popular from "../components/newsFeed/Popular";
import SideCard from "../components/newsFeed/SideCard";
import CreatePostAndCommunity from "../components/newsFeed/CreatePostAndCommunity";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../context/userContext";
import axios from "../config/axios";

function Mainpage() {
  const { user } = useContext(UserContext);
  const [listCommunity, setListCommunity] = useState([]);
  const [postMain, setPostMain] = useState([]);

  useEffect(() => {
    axios
      .get("/feeds/allcommunity")
      .then((res) => setListCommunity(res.data.communityLists));
    axios.get("/feeds/mainpage").then((res) => setPostMain(res.data.feedLists));
  }, []);
  console.log(postMain);

  const newArr = postMain.map((item, index) => {
    if (item.UserInteractions.length === 0) {
      return item;
    } else {
      const idx = item.UserInteractions.findIndex((item2) => {
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
  console.log(newArr);

  const clickHidepost = (id) => {
    const newPostMain = postMain.filter((item) => item.id !== id);
    setPostMain(newPostMain);
  };

  return (
    <div className="bg-gray-200 grid grid-cols-7 gap-6 ">
      <div className="col-start-2 col-span-3 ">
        <Popular />
        {newArr.map(
          (item, index) =>
            item && (
              <FeedBox key={index} item={item} clickHidepost={clickHidepost} />
            )
        )}
      </div>
      <div className="col-span-2">
        <SideCard listCommunity={listCommunity} />
        {user ? <CreatePostAndCommunity /> : ""}

        <Footer />
      </div>
    </div>
  );
}

export default Mainpage;
