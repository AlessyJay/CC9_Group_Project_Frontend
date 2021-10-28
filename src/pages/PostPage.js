import React, { useContext } from "react";
import SideCard from "../components/newsFeed/SideCard";
import CreatePostAndCommunity from "../components/newsFeed/CreatePostAndCommunity";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../context/userContext";
import PostComment from "../components/PostComments/PostComment";

function PostPage() {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-gray-200 grid grid-cols-7 gap-6 ">
      <div className="col-start-2 col-span-3 ">
        <PostComment />
      </div>
      <div className="col-span-2">
        <SideCard />
        {user ? <CreatePostAndCommunity /> : ""}
        <Footer />
      </div>
    </div>
  );
}

export default PostPage;
