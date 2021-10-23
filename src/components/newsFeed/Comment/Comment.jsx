import Navbar from "../../Navbar/Navbar";
import SideCard from "../../newsFeed/SideCard";
import CreatePostAndCommunity from "../../newsFeed/CreatePostAndCommunity";
import Footer from "../../Footer/Footer";

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
// Import editor tool bar
import EditorToolBar from "./EditorToolBar";

function Main() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="sideCard">
          <SideCard />
          <br />
          <CreatePostAndCommunity />
          <br />
          <Footer />
          <br />
        </div>
        {/* Feed box and comment start here */}
        <div className="feed-box">
          {/* Like section starts here */}
          <div className="like-section">
            <div className="btn">
              <button className="likeBtn">
                <ExpandLessIcon />
              </button>
              <h3>0</h3>
              <button className="likeBtn">
                <ExpandMoreIcon />
              </button>
            </div>
          </div>

          {/* Post content starts here */}
          <div className="avatarAndName">
            <Avatar
              alt="Profile picture"
              src="https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?cs=srgb&dl=pexels-anna-shvets-4587991.jpg&fm=jpg"
              style={{ border: "double 2px black" }}
            />
            <h4 className="username">
              John{" "}
              <span
                style={{ opacity: "0.5", fontSize: "12px", marginLeft: "3%" }}
              >
                Posted by: John TIME
              </span>
            </h4>

            {/* Title */}
            <h3 className="title">This community is good!</h3>

            {/* Messages */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              non quod facilis laborum rerum ut iure dicta id aspernatur libero,
              velit sed sit autem in sequi reiciendis nemo nam ullam.
            </p>

            {/* Comment, share, save, and more button start here */}
            <div className="functionBtn" style={{ margin: "1%" }}>
              <Button startIcon={<MessageIcon />}>0 Comments</Button>
              <Button startIcon={<TurnedInNotIcon />}>Save</Button>
              <Button startIcon={<MoreHorizIcon />}></Button>
            </div>
            <hr style={{ border: "solid 1px black", width: "100%" }} />
            <div className="postBox">
              <EditorToolBar>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </EditorToolBar>
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
      </div>
    </div>
  );
}

export default Main;
