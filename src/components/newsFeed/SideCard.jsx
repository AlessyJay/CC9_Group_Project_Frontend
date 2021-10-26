import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CommuSideCard from "./CommuSideCard";

const MOCK_DATA = [
  {
    name: "r/javascript",
    members: "10,000",
    imgUrl: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "r/dota2",
    members: "100,000",
    imgUrl: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "r/css",
    members: "9,000",
    imgUrl: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "r/tailwind",
    members: "12,000",
    imgUrl: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "r/tailwind",
    members: "12,000",
    imgUrl: "https://randomuser.me/api/portraits/men/20.jpg",
  },
];

export default function MediaCard() {
  return (
    <Card className="max-w-xs mt-3 shadow rounded-sm hidden md:block">
      <div
        className="w-full h-20 bg-cover text-xl font-bold  flex items-end p-1 text-gray-700 "
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        }}
      >
        Top Communities
      </div>
      {MOCK_DATA.map((item, index) => (
        <CommuSideCard key={index} item={item} index={index} />
      ))}
      <div className="flex justify-center m-2 py-4">
        <button className="max-w-sm border-2 border-blue-500 rounded-full font-semibold  text-white px-6 w-full  transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 bg-blue-500 ">
          View all
        </button>
      </div>
    </Card>
  );
}
