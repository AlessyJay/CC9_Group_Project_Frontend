import React from "react";
import { HiX } from "react-icons/hi";
import DraftCard from "./DraftCard";

function DraftModel({
  setToggleModel,
  draftLists,
  handleEditPost,
  handleRemoveDraft,
}) {
  return (
    <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-90 filter z-30">
      <div className="bg-white rounded-lg w-2/4 max-w-2/4">
        <div className="flex flex-col items-start p-4">
          <div className="flex items-center w-full justify-between border-b pb-1">
            <div className="text-gray-900 font-medium text-lg">{`Draft ${draftLists.length}/20`}</div>
            <HiX
              className="cursor-pointer"
              fontSize="24px"
              onClick={() => {
                setToggleModel(false);
              }}
            />
          </div>

          {draftLists &&
            draftLists.map((item) => (
              <DraftCard
                key={item.id}
                item={item}
                handleEditPost={handleEditPost}
                handleRemoveDraft={handleRemoveDraft}
              />
            ))}
          <hr />
          <div className="ml-auto mt-3">
            <button className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DraftModel;
