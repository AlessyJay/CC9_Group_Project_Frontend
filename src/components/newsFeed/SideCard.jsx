import React from "react";
import Card from "@mui/material/Card";
import CommuSideCard from "./CommuSideCard";

export default function MediaCard({ listCommunity }) {
  console.log(listCommunity);
  return (
    <Card className="max-w-xs mt-3 shadow rounded-sm hidden md:block">
      <div
        className="w-full h-14 pl-3 bg-cover text-xl font-bold bg-blue-300  flex items-end p-1 text-gray-700 "
        // style={{
        //   backgroundImage:
        //     'url("https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        // }}
      >
        Top Communities
      </div>
      {listCommunity.map((item, index) => (
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
