import React from "react";
import CreateBar from "../components/Community/CreateBar";
import FeedBox from "../components/newsFeed/FeedBox";
import ProfileBar from "../components/Profile/ProfileBar";
import ProfileSide from "../components/Profile/ProfileSide";
import Footer from "../components/Footer/Footer";

function UserProfile() {
  return (
    <div className="bg-gray-200">
      <ProfileBar />
      <div className=" grid grid-cols-7 gap-6">
        <div className="col-start-2 col-span-3 ">
          <CreateBar />
          <FeedBox />
          <FeedBox />
          <FeedBox />
        </div>
        <div className="col-span-2">
          <ProfileSide />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
