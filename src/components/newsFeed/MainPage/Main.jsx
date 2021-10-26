import FeedBox from "../../newsFeed/FeedBox";
import Popular from "../../newsFeed/Popular";
import SideCard from "../../newsFeed/SideCard";
import CreatePostAndCommunity from "../../newsFeed/CreatePostAndCommunity";
import Footer from "../../Footer/Footer";

function Main() {
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
        <Popular />
        <FeedBox />
        <FeedBox />
        <FeedBox />
      </div>
    </div>
  );
}

export default Main;
