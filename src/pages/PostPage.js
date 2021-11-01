import React, { useContext, useEffect, useState } from "react";
import SideCard from "../components/newsFeed/SideCard";
import CreatePostAndCommunity from "../components/newsFeed/CreatePostAndCommunity";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../context/userContext";
import PostComment from "../components/PostComments/PostComment";
import AboutCommu from "../components/Community/AboutCommu";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostPage() {
  const { user } = useContext(UserContext);
  const [post, setPost] = useState([]);
  const { id, communityHostId } = useParams();

  useEffect(() => {
    axios(`/posts/${id}`).then(res => setPost(res.data.post));
  }, []);

  return (
    <div className="bg-gray-200 grid grid-cols-7 gap-6 ">
      <div className="col-start-2 col-span-3 ">
        <PostComment item={post} />
      </div>
      <div className="col-span-2">
        {/* <AboutCommu /> */}
        {user ? <CreatePostAndCommunity /> : ""}
        <Footer />
      </div>
    </div>
  );
}

export default PostPage;
