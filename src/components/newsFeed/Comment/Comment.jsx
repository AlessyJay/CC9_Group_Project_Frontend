import Navbar from "../../Navbar/Navbar";
import SideCard from "../../newsFeed/SideCard";
import CreatePostAndCommunity from "../../newsFeed/CreatePostAndCommunity";
import Footer from "../../Footer/Footer";
import Add from "./CommentComponents/Add";

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
        <Add />
      </div>
    </div>
  );
}

export default Main;
