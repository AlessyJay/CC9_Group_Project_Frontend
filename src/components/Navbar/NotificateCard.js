import React from "react";
import { useHistory } from "react-router-dom";
import { timeDiff } from "../../services/timeDifferent";

function NotificateCard({ item, updatedseenNoti }) {
  const history = useHistory();
  console.log("cardNoti", item);
  const {
    createdAt,
    User: { profileUrl, username },
    Post: {
      id: postId,
      title,
      Community: { userId: communityUserId },
    },
  } = item;
  const handleClickGoToPost = () => {
    updatedseenNoti(item.id);
    history.push(`/posts/${communityUserId}/${postId}`);
  };
  return (
    <div
      className={`cursor-pointer block  px-4 py-2 text-md  ${
        !item.isSeen ? "bg-blue-100" : "bg-gray-100"
      } text-gray-700  hover:text-gray-900`}
      onClick={handleClickGoToPost}
    >
      <div className="flex max-w-sm w-full">
        <img className="rounded-full h-9 w-9 mr-4" alt="" src={profileUrl} />
        <span className="flex flex-wrap text-xs w-40">
          <span className="font-semibold">{`${username} commented on a post you followed!.`}</span>
          {/* <span className="truncate text-xs">{title.toLowerCase()}</span> */}
          <span className="truncate text-xs text-gray-400">
            {timeDiff(createdAt)} agos
          </span>
        </span>
      </div>
    </div>
  );
}

export default NotificateCard;
