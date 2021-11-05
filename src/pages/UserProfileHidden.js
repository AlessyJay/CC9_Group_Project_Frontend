import React, { useContext, useEffect, useState } from "react";
import ProfileBar from "../components/Profile/ProfileBar";
import ProfileSide from "../components/Profile/ProfileSide";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../context/userContext";
import axios from "../config/axios";
import HiddenBox from "../components/Profile/HiddenBox";
import { Toast2 } from "../services/alert";

function UserProfileHidden() {
  const { user } = useContext(UserContext);
  const [hidedList, setHidedList] = useState([]);

  useEffect(() => {
    axios
      .get("/feeds/userhidepost")
      .then((res) => setHidedList(res.data.feedLists));
  }, []);

  // console.log(hidedList);

  const handleClickUnhide = async (id, postId) => {
    try {
      const newHidedList = hidedList.filter((item) => item.id !== id);
      setHidedList(newHidedList);
      await axios.post(`/posts/hidepost/${postId}`, { isHided: false });
      Toast2.fire({
        icon: "info",
        title: "Unhided",
      });
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <div className="bg-gray-200">
      <ProfileBar user={user} page={5} />
      <div className=" grid grid-cols-7 gap-6">
        <div className="col-start-2 col-span-3 ">
          {hidedList.map((item, index) => (
            <HiddenBox
              key={index}
              item={item}
              handleClickUnhide={handleClickUnhide}
            />
          ))}
        </div>
        <div className="col-span-2">
          <ProfileSide user={user} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default UserProfileHidden;
