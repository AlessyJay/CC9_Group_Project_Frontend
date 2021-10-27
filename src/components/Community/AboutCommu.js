import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

function AboutCommu({ name, id }) {
  const { path } = useRouteMatch();
  const history = useHistory();

  const handleTo = () => {
    history.push(`/community/${name}/${id}/edit`);
  };

  return (
    <div className=" bg-white max-w-xs mt-3 shadow rounded-sm hidden md:block">
      <div className="shadow rounded-sm w-full h-12 bg-cover text-xl font-semibold flex p-3 text-white bg-red-700 rounded-b-none">
        About Community
      </div>
      <div className="h-56 px-4 py-6 rounded-sm rounded-t-none">
        <p className="text-sm mb-5">
          A subreddit for news and discussion about Liverpool FC, a football club playing in the English Premier League.
          Liverpool are one of the most decorated football clubs in all of world football, with 19 English League Titles
          and 6 European Cups.
        </p>
        <h3>Member</h3>
        <h3>1100K</h3>
      </div>
      <div className="mx-8 border-b-2 text-sm border-gray-100"></div>
      <div className=" cursor-pointer flex justify-center mx-2 pb-2">
        <div
          onClick={handleTo}
          className="flex justify-center max-w-sm border-2 border-blue-500 rounded-full font-semibold  text-white px-6 w-full  transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 bg-blue-500 "
        >
          Edit Community
        </div>
      </div>
      <div className="mx-8 py-4 text-sm">Created Jul 31, 2013</div>
    </div>
  );
}

export default AboutCommu;
