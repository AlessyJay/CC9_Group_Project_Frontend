import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MediaCard() {
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
        <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "start" }}>
          <p>Home</p>
          <p className="text-sm">
            Your personal Reddit frontpage. Come here to check in with your favorite communities.
          </p>
        </Typography>
      </CardContent>
      <div className="flex justify-center mx-2 pb-2">
        <Link className="flex justify-center max-w-sm border-2 border-blue-500 rounded-full font-semibold  text-white px-6 w-full  transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 bg-blue-500 ">
          Create Post
        </Link>
      </div>
      <div className="flex justify-center mx-2 pb-4">
        <Link className="flex justify-center max-w-sm border-2 border-blue-500 rounded-full font-semibold  text-blue-500 px-6 w-full  transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white  ">
          Create Community
        </Link>
      </div>
    </Card>
  );
}
