import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>
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
      <CardActions></CardActions>
    </Card>
  );
}
