import React from "react";

function CreateBar() {
  return (
    <div className="shadow my-4 rounded-md text-gray-400 bg-white w-96 md:w-full ">
      <div className="border  p-2 rounded-md flex">
        <div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10">
          <img src="" alt="" style={{ filter: "invert(100%)" }} />
        </div>
        <form action="" className="flex-grow  border  ml-4 mr-2 rounded-md">
          <input
            type="text"
            onFocus={e => {
              e.preventDefault();
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
