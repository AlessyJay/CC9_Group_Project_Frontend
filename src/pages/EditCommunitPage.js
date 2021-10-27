import React from "react";
import CommunityHeader from "../components/Community/CommunityHeader";
import Footer from "../components/Footer/Footer";
import EditCommunity from "../components/Community/EditCommunity";

function EditCommunitPage() {
  return (
    <div className="bg-gray-200">
      <CommunityHeader />
      <div className=" grid grid-cols-7 gap-6">
        <div className="col-start-2 col-span-3 ">
          <EditCommunity />
        </div>
        <div className="col-span-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default EditCommunitPage;
