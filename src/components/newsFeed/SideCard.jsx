import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100"
        image="https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="topic's picture"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: "center" }}
        >
          Today's Topics
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
        <div className="viewAllBtn">
          <button>View All</button>
        </div>
      </CardActions>
      <div className="topicBtns">
        <Button style={{ borderRadius: "50px" }}>Near You</Button>
        <Button style={{ borderRadius: "50px" }}>Gaming</Button>
        <Button style={{ borderRadius: "50px" }}>Aww</Button>
        <Button style={{ borderRadius: "50px" }}>News</Button>
      </div>
    </Card>
  );
}
