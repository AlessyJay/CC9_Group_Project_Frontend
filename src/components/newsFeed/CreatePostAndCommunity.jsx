import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100"
        image="https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="topic's picture"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: "center" }}
        >
          <img
            src="https://i.redd.it/lcm7fe9bnib61.png"
            alt="mascot"
            className="logo"
          />
          <p>
            Home Your personal Reddit frontpage. Come here to check in with your
            favorite communities.
          </p>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ textAlign: "start", fontWeight: "bolder", fontSize: "24px" }}
        >
          <ol>
            <li>r/noworktoday</li>
            <li>r/peakyblinders</li>
            <li>r/shitposting</li>
            <li>r/Dota2</li>
            <li>r/pcmasterpiece</li>
          </ol>
        </Typography>
      </CardContent>
      <CardActions>
        <div className="createPostBtn">
          <button>Create Post</button>
        </div>
      </CardActions>
      <div className="createCommunityBtn">
        <button>Create Community</button>
      </div>
    </Card>
  );
}
