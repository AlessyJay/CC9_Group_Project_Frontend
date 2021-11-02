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
    axios.get("/feeds/allcommunity").then(res => setListCommunity(res.data.communityLists));
    axios.get("/feeds/mainpage").then(res => setPostMain(res.data.feedLists));
  }, []);

  console.log(postMain);

  return (
    <div className="bg-gray-200 grid grid-cols-7 gap-6 ">
      <div className="col-start-2 col-span-3 ">
        <Popular />
        {postMain.map((item, index) => (
          <FeedBox key={index} item={item} />
        ))}
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
