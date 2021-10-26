import React from "react";
import CommunityHeader from "../components/Community/CommunityHeader";
import SideCard from "../components/newsFeed/SideCard";
import CreatePostAndCommunity from "../components/newsFeed/CreatePostAndCommunity";
import Footer from "../components/Footer/Footer";
import CreateBar from "../components/Community/CreateBar";
import FeedBox from "../components/newsFeed/FeedBox";
import AboutCommu from "../components/Community/AboutCommu";
import PostComment from "../components/PostComments/PostComment";
import ProfileSide from "../components/Profile/ProfileSide";

function CommunityPage() {
  return (
    <div className="bg-gray-200">
      <CommunityHeader />
      <div className=" grid grid-cols-7 gap-6">
        <div className="col-start-2 col-span-3 ">
          {/* <CreateBar /> */}
          {/* <FeedBox /> */}
          <PostComment />
        </div>
        <div className="col-span-2">
          <ProfileSide />
          <AboutCommu />
          <CreatePostAndCommunity />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
