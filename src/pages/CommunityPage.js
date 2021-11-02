import React, { useEffect, useState } from "react";
import CommunityHeader from "../components/Community/CommunityHeader";
import CreatePostAndCommunity from "../components/newsFeed/CreatePostAndCommunity";
import Footer from "../components/Footer/Footer";
import CreateBar from "../components/Community/CreateBar";
import FeedBox2 from "../components/newsFeed/FeedBox2";
import AboutCommu from "../components/Community/AboutCommu";
import { useParams } from "react-router-dom";
import axios from "../config/axios";
import CommunityRules from "../components/Community/CommunityRules";

function CommunityPage() {
  const { id, name } = useParams();
  const [community, setCommunity] = useState([]);
  const [communityPosts, setCommunityPosts] = useState([]);
  const [rules, setRules] = useState([]);

  useEffect(() => {
    axios
      .get(`/communities/posts/${id}`)
      .then(res => setCommunityPosts(res.data.postList))
      .catch(err => console.dir(err));
    axios
      .get(`/communities/${id}`)
      .then(res => setCommunity(res.data.community))
      .catch(err => console.dir(err));
    axios.get(`/communities/rules/${id}`).then(res => setRules(res.data.rules));
  }, []);

  return (
    <div className="bg-gray-200">
      <CommunityHeader id={id} community={community} />
      <div className=" grid grid-cols-7 gap-6">
        <div className="col-start-2 col-span-3 ">
          {communityPosts.map((item, index) => (
            <FeedBox2 item={item} key={index} />
          ))}
        </div>
        <div className="col-span-2">
          <AboutCommu name={name} id={id} community={community} />
          <CommunityRules rules={rules} />
          <CreatePostAndCommunity />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
