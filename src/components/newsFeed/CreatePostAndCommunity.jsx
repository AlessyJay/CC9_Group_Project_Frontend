import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CreateCommunity from "../Community/CreateCommunity";

export default function MediaCard() {
  const [showCreatecommunity, setShowCreatecommunity] = useState(false);
  return (
    <Card className="max-w-xs mt-3 shadow rounded-sm hidden md:block">
      <div
        className="w-full h-10 bg-cover"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        }}
      ></div>
      <CardContent>
        <div gutterBottom variant="h5" component="div" style={{ textAlign: "start" }}>
          <p>Home</p>
          <p className="text-sm">
            Your personal Reddit frontpage. Come here to check in with your favorite communities.
          </p>
        </div>
      </CardContent>
      <div className=" cursor-pointer flex justify-center mx-2 pb-2">
        <div className="flex justify-center max-w-sm border-2 border-blue-500 rounded-full font-semibold  text-white px-6 w-full  transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 bg-blue-500 ">
          Create Post
        </div>
      </div>
      <div onClick={() => setShowCreatecommunity(true)} className=" cursor-pointer flex justify-center mx-2 pb-4">
        <div className="flex justify-center max-w-sm border-2 border-blue-500 rounded-full font-semibold  text-blue-500 px-6 w-full  transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white  ">
          Create Community
        </div>
      </div>
      {showCreatecommunity && <CreateCommunity setShowCreatecommunity={setShowCreatecommunity} />}
    </Card>
  );
}
