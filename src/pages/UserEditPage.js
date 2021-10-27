import React from "react";
import ProfileBar from "../components/Profile/ProfileBar";
import Footer from "../components/Footer/Footer";
import Editprofile from "../components/Community/EditProfile";

function UserEditPage() {
  return (
    <div className="bg-gray-200">
      <ProfileBar />
      <div className=" grid grid-cols-7 gap-6">
        <div className="col-start-2 col-span-3 ">
          <Editprofile />
        </div>
        <div className="col-span-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default UserEditPage;
