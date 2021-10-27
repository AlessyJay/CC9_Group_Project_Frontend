import React, { useContext } from "react";
import CreateBar from "../components/Community/CreateBar";
import FeedBox from "../components/newsFeed/FeedBox";
import ProfileBar from "../components/Profile/ProfileBar";
import ProfileSide from "../components/Profile/ProfileSide";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../context/userContext";
import Popular from "../components/newsFeed/Popular";

function UserProfilePost() {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-gray-200">
      <ProfileBar user={user} />
      <div className=" grid grid-cols-7 gap-6">
        <div className="col-start-2 col-span-3 ">
          <CreateBar />
          <FeedBox />
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
