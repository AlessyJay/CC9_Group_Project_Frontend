import React, { useContext, useEffect, useState } from "react";
import ProfileBar from "../components/Profile/ProfileBar";
import ProfileSide from "../components/Profile/ProfileSide";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../context/userContext";
import axios from "../config/axios";
import SaveBox from "../components/Profile/SaveBox";
import { Toast2 } from "../services/alert";

function UserProfileSave() {
  const { user } = useContext(UserContext);
  const [saveList, setSaveList] = useState([]);
  useEffect(() => {
    axios
      .get("/feeds/usersavepost")
      .then((res) => setSaveList(res.data.feedLists));
  }, []);

  const handleClickunSave = async (id, postId) => {
    try {
      const newSaveList = saveList.filter((item) => item.id !== id);
      setSaveList(newSaveList);
      await axios.post(`/posts/savepost/${postId}`, { isSaved: false });
      Toast2.fire({
        icon: "info",
        title: "UnSaved",
      });
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <div className="bg-gray-200">
      <ProfileBar user={user} page={4} />
      <div className=" grid grid-cols-7 gap-6">
        <div className="col-start-2 col-span-3 ">
          {saveList.map((item, index) => (
            <SaveBox
              key={index}
              item={item}
              handleClickunSave={handleClickunSave}
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

export default UserProfileSave;
