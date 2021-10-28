import React from "react";

function PostingtoOurweb({ name, id }) {
  return (
    <div className=" bg-white max-w-xs mt-3 shadow rounded-sm hidden md:block text-sm">
      <div className=" rounded-sm w-full h-12 bg-cover text-xl font-semibold flex p-3 ml-6 rounded-b-none">
        Posting to Web
      </div>
      <div className="flex px-4  ">
        <span className="mr-4">1.</span>
        <p className="mb-2">Remember the human</p>
      </div>
      <div className="mx-4 my-2 border-b-2 text-sm border-gray-300"></div>
      <div className="flex px-4  ">
        <span className="mr-4">2.</span>
        <p className="mb-2">Behave like you would in real life</p>
      </div>
      <div className="mx-4 my-2 border-b-2 text-sm border-gray-300"></div>
      <div className="flex px-4  ">
        <span className="mr-4">3.</span>
        <p className="mb-2">Look for the original source of content</p>
      </div>
      <div className="mx-4 my-2 border-b-2 text-sm border-gray-300"></div>
      <div className="flex px-4 ">
        <span className="mr-4">4.</span>
        <p className="mb-2">Search for duplicates before posting</p>
      </div>
      <div className="mx-4 my-2 border-b-2 text-sm border-gray-300"></div>
      <div className="flex px-4 ">
        <span className="mr-4">5.</span>
        <p className="mb-2">Read the community’s rules</p>
      </div>
      <div className="mx-4 my-2 border-b-2 text-sm border-gray-300"></div>
      <div className=" cursor-pointer flex justify-center mx-2 pb-2"></div>
      <div className="mx-8 py-4 text-sm"></div>
    </div>
  );
}

export default PostingtoOurweb;
