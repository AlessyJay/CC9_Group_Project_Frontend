import React from "react";
import { Link } from "react-router-dom";
// Import like and dislike icon.
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Import avatar from mui material.
import Avatar from "@mui/material/Avatar";
// Import buttons
import Button from "@mui/material/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import MessageIcon from "@mui/icons-material/Message";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function FeedBox(props) {
  const {
    item: { avatar, name, title, text, interactions },
  } = props;

  const sliceTextFn = () => {
    if (text.length > 250) {
      return text.slice(0, 250);
    } else {
      return text;
    }
  };

  return (
    <>
      <div className="feed-box">
        {/* Like section starts here */}
        <div className="like-section" style={{ padding: "0.5%" }}>
          <div className="btn">
            <button className="likeBtn">
              <ExpandLessIcon />
            </button>
            <h3 style={{ fontSize: "20px" }}>{interactions}</h3>
            <button className="likeBtn">
              <ExpandMoreIcon />
            </button>
          </div>
        </div>

        {/* Post content starts here */}
        <div className="avatarAndName">
          <Avatar
            alt="Profile picture"
            src={avatar}
            style={{ border: "double 2px black", marginTop: "2%" }}
          />
          <h4 className="username">
            {name}{" "}
            <span
              style={{ opacity: "0.5", fontSize: "12px", marginLeft: "3%" }}
            >
              Posted by: {name} TIME
            </span>
          </h4>

          {/* Title */}
          <h3 className="title">{title}</h3>

          {/* Messages */}
          {text.length > 250 ? (
            <p>
              {sliceTextFn()}
              {`\t`}
              {
                <button className="readMore" onClick={() => text}>
                  ... See more
                </button>
              }
            </p>
          ) : (
            text
          )}

          {/* Comment, share, save, and more button start here */}
          <div className="functionBtn" style={{ margin: "1%" }}>
            <Link to="/comment">
              <Button startIcon={<MessageIcon />}>0 Comments</Button>
            </Link>
            <Button startIcon={<TurnedInNotIcon />}>Save</Button>
            <Button startIcon={<MoreHorizIcon />}></Button>
          </div>
        </div>
        {/* Join button starts here */}
        <div className="joinBtn">
          <Button
            startIcon={<ControlPointIcon />}
            variant="contained"
            style={{ background: "blue" }}
          >
            Follow
          </Button>
        </div>
      </div>
    </>
  );
}

export default FeedBox;
