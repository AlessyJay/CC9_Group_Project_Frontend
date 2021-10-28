import React from "react";
import PostingtoOurweb from "../components/Community/PostingtoOurweb";
import Footer from "../components/Footer/Footer";
import PostImg from "../components/Post/PostImg";
function CreatePost() {
  return (
    <div className="bg-gray-200 h-screen grid grid-cols-7 gap-6">
      <div className="col-start-2 col-span-3 ">
        <PostImg />
      </div>
      <div className="col-span-2">
        <PostingtoOurweb />
        <Footer />
      </div>
    </div>
  );
}

export default CreatePost;
