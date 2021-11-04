import React, { useContext } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { UserContext } from "../../context/userContext";
import { timeDiff } from "../../services/timeDifferent";
function DraftCard({ item, handleEditPost, handleRemoveDraft, setPostDraft }) {
  const { user } = useContext(UserContext);
  const { title, communityId, updatedAt } = item;
  const textTime = timeDiff(updatedAt);
  return (
    <div className="flex justift-between w-full hover:bg-gray-200 p-1 border-b">
      <div className="px-2 flex items-center ml-2 cursor-pointer">
        <FaRegEdit
          onClick={() => {
            setPostDraft((cur) => ({ cur, status: true, draftId: item.id }));
            handleEditPost(item.id, item);
          }}
        />
      </div>
      <div className="w-full ml-2">
        <p className="font-semibold text-sm">{title}</p>
        <div className="flex text-xs">
          {communityId ? (
            <p className="font-medium">{`${item.Community?.name} :`}</p>
          ) : (
            <p className="font-medium">{`${user.username} :`}</p>
          )}

          <p>{`Draft saved ${textTime} agos`}</p>
        </div>
      </div>
      <div
        onClick={() => handleRemoveDraft(item.id)}
        className=" flex items-center px-4 cursor-pointer"
      >
        <FaRegTrashAlt />
      </div>
    </div>
  );
}

export default DraftCard;
