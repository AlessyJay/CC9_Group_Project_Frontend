import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const bull = (
  <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card className="max-w-xs mt-3 shadow rounded-sm hidden md:block flex-col ">
      {/* <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom></Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        <Typography variant="body2">
          <div className="footerOptions">
            <div className="left" style={{ fontSize: "18px" }}>
              <p>About</p>
              <p>Career</p>
              <p>Teams</p>
            </div>
            <div className="right" style={{ fontSize: "18px" }}>
              <p>Content Policy</p>
              <p>Privacy Policy</p>
              <p>Mod Policy</p>
            </div>
          </div>
          <br />
          {"Reddit Inc © 2021 . All rights reserved"}
        </Typography>
      </CardContent>
      <CardActions></CardActions> */}
      <div className="flex w-full p-4 px-7">
        <div className="mr-12">
          <Link href="#" className="block  px-4 py-2 pb-0 text-gray-700 " role="menuitem">
            <div className="flex max-w-sm">
              <span className="flex flex-wrap w-full">
                <span className="truncate text-sm">About</span>
              </span>
            </div>
          </Link>
          <Link href="#" className="block  px-4 py-2 pb-0  text-gray-700 ">
            <div className="flex max-w-sm">
              <span className="flex flex-wrap w-full">
                <span className="truncate text-sm">Career</span>
              </span>
            </div>
          </Link>
          <Link href="#" className="block  px-4 py-2 pb-0  text-gray-700 ">
            <div className="flex max-w-sm">
              <span className="flex flex-wrap w-full">
                <span className="truncate text-sm">Teams</span>
              </span>
            </div>
          </Link>
          <Link href="#" className="block  px-4 py-2 pb-0  text-gray-700 ">
            <div className="flex max-w-sm">
              <span className="flex flex-wrap w-full">
                <span className="truncate text-sm">Help</span>
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" className="block  px-4 py-2 pb-0  text-gray-700 ">
            <div className="flex max-w-sm w-full">
              <span className="flex flex-wrap w-full">
                <span className="truncate text-sm">Content Policy</span>
              </span>
            </div>
          </Link>
          <Link href="#" className="block  px-4 py-2 pb-0  text-gray-700 ">
            <div className="flex max-w-sm w-full">
              <span className="flex flex-wrap w-full">
                <span className="truncate text-sm">Privacy Policy</span>
              </span>
            </div>
          </Link>
          <Link href="#" className="block  px-4 py-2 pb-0  text-gray-700 ">
            <div className="flex max-w-sm w-full">
              <span className="flex flex-wrap w-full">
                <span className="truncate text-sm">Mod Policy</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex w-full p-4 pt-0 px-7 text-sm">Reddit Inc © 2021 . All rights reserved</div>
    </Card>
  );
}
