import React from "react";

function NotificateCard({ item }) {
  return (
    <div>
      <a
        href="#"
        className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        <div className="flex max-w-sm w-full">
          <img className="rounded-full h-9 mr-4" alt="A" src={item.imgUrl} />
          <span className="flex flex-wrap text-xs w-40">
            <span className="font-semibold">{`${item.name} commented on a post you followed!.`}</span>
            <span className="truncate text-xs">{item.comment}</span>
          </span>
        </div>
      </a>
    </div>
  );
}

export default NotificateCard;
