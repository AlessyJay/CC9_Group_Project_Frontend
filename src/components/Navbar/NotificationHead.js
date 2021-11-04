import { Badge, Typography } from "@mui/material";
import axios from "../../config/axios";
import React, { useState, useEffect, useContext } from "react";
import { HiBell } from "react-icons/hi";
import { UserContext } from "../../context/userContext";
import NotificateCard from "./NotificateCard";

const DATA = [
  {
    name: " r/javascript",
    members: "10,000",
    imgUrl: "https://randomuser.me/api/portraits/men/85.jpg",
    comment: "Lorem Ipsum has been the industrys standard dummy text ever",
  },
  {
    name: " r/dota2",
    members: "100,000",
    imgUrl: "https://randomuser.me/api/portraits/men/65.jpg",
    comment: "Lorem Ipsum has been the industrys standard dummy text ever",
  },
  {
    name: " r/css",
    members: "9,000",
    imgUrl: "https://randomuser.me/api/portraits/men/60.jpg",
    comment: "Lorem Ipsum has been the industrys standard dummy text ever",
  },
  {
    name: " r/tailwind",
    members: "12,000",
    imgUrl: "https://randomuser.me/api/portraits/men/50.jpg",
    comment: "Lorem Ipsum has been the industrys standard dummy text ever",
  },
  {
    name: " r/tailwind",
    members: "12,000",
    imgUrl: "https://randomuser.me/api/portraits/men/20.jpg",
    comment: "Lorem Ipsum has been the industrys standard dummy text ever",
  },
];

function NotificationHead() {
  const { user, userNotification, setUserNotification } = useContext(UserContext);
  useEffect(() => {
    const fetchNoti = async () => {
      try {
        const res = await axios.get(`/notifications`);
        setUserNotification(res.data.notification);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchNoti();
  }, []);

  // console.log(userNotification);

  return (
    <div className="block">
      <div className="group  flex items-center ">
        <div className=" relative">
          <div className="relative inline-block text-left ">
            <div className="flex items-center ">
              <button
                type="button"
                className="  flex items-center justify-center w-full rounded-md py-2 text-sm font-medium  "
                id="options-menu"
              >
                <Badge badgeContent={userNotification?.length} color="primary" overlap="circular">
                  <HiBell className="h-6 w-6 hover:text-gray-400" />
                </Badge>
              </button>
            </div>

            <div className="z-50 hidden group-hover:block origin-top-right absolute right-0 w-60 rounded-sm shadow-lg bg-white max-h-96 overflow-y-scroll ">
              <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="flex justify-between  items-center mt-2 ml-5">
                  <div className="text-xs font-bold text-gray-500">Notifications</div>
                </div>

                {userNotification ? userNotification.map(item => <NotificateCard key={item.id} item={item} />) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationHead;
