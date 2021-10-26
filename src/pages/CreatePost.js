import React from 'react';
import Footer from '../components/Footer/Footer';
import PostImg from '../components/Post/PostImg';
function CreatePost() {
  return (
    <div className=" grid grid-cols-7 gap-6">
      <div className="col-start-2 col-span-3 ">
        <PostImg />
      </div>
      <div className="col-span-2">
        <Footer />
      </div>
    </div>
  );
}

export default CreatePost;
