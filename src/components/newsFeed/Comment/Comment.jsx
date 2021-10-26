import SideCard from "../../newsFeed/SideCard";
import CreatePostAndCommunity from "../../newsFeed/CreatePostAndCommunity";
import Footer from "../../Footer/Footer";
import { useState, useEffect } from "react";

// Import like and dislike icon.
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Import avatar from mui material.
import Avatar from "@mui/material/Avatar";
// Import buttons
import Button from "@mui/material/Button";
import MessageIcon from "@mui/icons-material/Message";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const COMMENTS = [
  {
    avatar:
      "https://images.pexels.com/photos/7029081/pexels-photo-7029081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Kenny",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non quod facilis laborum rerum ut iure dicta id aspernatur libero, velit sed sit autem in sequi reiciendis nemo nam ullam.",
  },
  {
    avatar:
      "https://images.pexels.com/photos/8123643/pexels-photo-8123643.jpeg?cs=srgb&dl=pexels-serkan-bayraktar-8123643.jpg&fm=jpg",
    name: "Christ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non quod facilis laborum rerum ut iure dicta id aspernatur libero, velit sed sit autem in sequi reiciendis nemo nam ullam.",
  },
  {
    avatar:
      "https://images.pexels.com/photos/7693210/pexels-photo-7693210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Ellena",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non quod facilis laborum rerum ut iure dicta id aspernatur libero, velit sed sit autem in sequi reiciendis nemo nam ullam.",
  },
];

function Main() {
  const [text, setText] = useState("");
  const [unable, setUnable] = useState(``);

  const handlePost = (e) => {
    e.preventDefault();
    console.log(`click!`);

    // axios part
  };

  useEffect(() => {
    text.trim() === `` ? setUnable(`unable`) : setUnable(`enable`);
    console.log(text);

    // axios fetch
  }, [text]);

  return (
    <div>
      <div className="container">
        <div className="sideCard">
          <SideCard />
          <br />
          <CreatePostAndCommunity />
          <br />
          <Footer />
          <br />
        </div>

        {/* Comment section starts here */}
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
              style={{ border: "double 2px black", margin: "2% 0 2% 1%" }}
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
            <hr className="commentLine" />
            <div className="postBox">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write down your thoughts!"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>

              {/* Post button starts here */}
              <form className="postForm" onSubmit={handlePost}>
                <div className="postBtn">
                  {/* Sort by menu lists */}
                  <div className="dropdown">
                    <label>Sort by: </label>
                    <select className="dropdownBtn">
                      <option value="new">New</option>
                      <option value="old">Old</option>
                    </select>
                  </div>
                  <button type="submit" className={`${unable}`}>
                    Post
                  </button>
                </div>
              </form>
            </div>
            <hr className="commentLine" />

            {/* Comments under the post! */}
            {COMMENTS.map((item) => (
              <div
                className="avatarAndName"
                style={{ justifyContent: "center", margin: "2% 0 2% 0" }}
              >
                <Avatar
                  alt="Profile picture"
                  src={`${item.avatar}`}
                  style={{ border: "double 2px black" }}
                />
                <h4 className="username">
                  {item.name}{" "}
                  <span
                    style={{
                      opacity: "0.5",
                      fontSize: "12px",
                      marginLeft: "3%",
                    }}
                  >
                    Posted by: {item.name} TIME
                  </span>
                </h4>
                <div className="message">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
