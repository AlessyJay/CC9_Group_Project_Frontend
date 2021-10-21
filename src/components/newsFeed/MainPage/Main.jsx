import Navbar from "./components/Navbar/Navbar";
import FeedBox from "./components/newsFeed/FeedBox";
import Popular from "./components/newsFeed/Popular";
import SideCard from "./components/newsFeed/SideCard";
import CreatePostAndCommunity from "./components/newsFeed/CreatePostAndCommunity";
import Footer from "./components/Footer/Footer";

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
        <Popular />
        <FeedBox />
        <FeedBox />
        <FeedBox />
      </div>
    </div>
  );
}

export default Main;
