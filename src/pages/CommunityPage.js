import React, { useEffect, useState } from "react";
import CommunityHeader from "../components/Community/CommunityHeader";
import CreatePostAndCommunity from "../components/newsFeed/CreatePostAndCommunity";
import Footer from "../components/Footer/Footer";
import CreateBar from "../components/Community/CreateBar";
import FeedBox from "../components/newsFeed/FeedBox";
import AboutCommu from "../components/Community/AboutCommu";
import PostComment from "../components/PostComments/PostComment";
import { useParams } from "react-router-dom";

import axios from "../config/axios";

function CommunityPage() {
  const { id, name } = useParams();

  useEffect(() => {
    axios
      .get(`/communities/posts/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.dir(err));
  }, []);

  return (
    <div className="bg-gray-200">
      <CommunityHeader />
      <div className=" grid grid-cols-7 gap-6">
        <div className="col-start-2 col-span-3 ">
          <PostComment />
        </div>
        <div className="col-span-2">
          <AboutCommu name={name} id={id} />
          <CreatePostAndCommunity />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;