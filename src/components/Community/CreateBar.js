import React from "react";
import { useHistory } from "react-router-dom";

function CreateBar({ community }) {
  console.log(community);
  const history = useHistory();
  return (
    <div className="shadow my-4 rounded-md text-gray-400 bg-white w-96 md:w-full ">
      <div className="border  p-2 rounded-md flex">
        <div className="rounded-full  bg-gray-600 overflow-hidden w-10 h-10">
          {community?.profileUrl ? (
            <img src={community?.profileUrl} alt="" className="w-full h-full" />
          ) : (
            <img
              src="https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_5ey8lzmwmxp21.png?width=256&s=5a85d5c682f40e3cf317c560b219585ac0afce78"
              alt=""
              style={{ filter: "invert(100%)" }}
            />
          )}
        </div>
        <form action="" className="flex-grow  border  ml-4 mr-2 rounded-md">
          <input
            type="text"
            onFocus={e => {
              e.preventDefault();
              history.push("/create-post");
            }}
            className=" p-2 px-3 text-sm block w-full rounded-md"
            placeholder="New post"
          />
        </form>
      </div>
    </div>
  );
}

export default CreateBar;
