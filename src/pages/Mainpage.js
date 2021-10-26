import React from "react";
import FeedBox from "../components/newsFeed/FeedBox";
import Popular from "../components/newsFeed/Popular";
import SideCard from "../components/newsFeed/SideCard";
import CreatePostAndCommunity from "../components/newsFeed/CreatePostAndCommunity";
import Footer from "../components/Footer/Footer";

function Mainpage() {
  return (
    <div className="bg-gray-200 grid grid-cols-7 gap-6">
      <div className="col-start-2 col-span-3 ">
        <Popular />
        <FeedBox />
        <FeedBox />
        <FeedBox />
        <FeedBox />
        <FeedBox />
        <FeedBox />
      </div>
      <div className="col-span-2">
        <SideCard />
        <CreatePostAndCommunity />
        <Footer />
      </div>
    </div>
  );
}

export default Mainpage;
