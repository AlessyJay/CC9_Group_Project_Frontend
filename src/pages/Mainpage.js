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
  // const [postMain, setPostMain] = useState([]);

  // useEffect(() => {
  //   axios.get("/feeds/mainpage").then(res => setPostMain(res.data.feedLists));
  // }, []);
  return (
    <div className="bg-gray-200 grid grid-cols-7 gap-6 ">
      <div className="col-start-2 col-span-3 ">
        <Popular />
        <FeedBox />
        <FeedBox />
        <FeedBox />
        {/* {postMain.map(item => (
          <FeedBox key={item.id} item={item} />
        ))} */}
      </div>
      <div className="col-span-2">
        <SideCard />
        {user ? <CreatePostAndCommunity /> : ""}

        <Footer />
      </div>
    </div>
  );
}

export default Mainpage;
