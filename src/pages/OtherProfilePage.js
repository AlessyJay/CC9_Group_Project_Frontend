import React, { useContext, useEffect, useState } from "react";
import CreateBar from "../components/Community/CreateBar";
import FeedBox from "../components/newsFeed/FeedBox";
import ProfileBar from "../components/Profile/ProfileBar";
import ProfileSide from "../components/Profile/ProfileSide";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../context/userContext";
import Popular from "../components/newsFeed/Popular";
import { useParams } from "react-router-dom";
import axios from "../config/axios";
import OtherUserProfileSide from "../components/Profile/OtherUserProlieSide";

function OtherProfilePage() {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`/users/${id}`).then(res => setUser(res.data.user));
  }, [id]);
  return (
    <div className="bg-gray-200">
      <div className=" grid grid-cols-7 gap-6">
        <div className="col-start-2 col-span-3 ">
          <Popular />
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
