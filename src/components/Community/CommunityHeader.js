import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import axios from "../../config/axios";

function CommunityHeader({ community, id }) {
  const { user } = useContext(UserContext);
  const { profileUrl, name, bannerUrl, Members } = community;
  const [reload, setReload] = useState(true);

  const handleJoinCommu = async () => {
    const res = await axios.post(`/communities/member/${id}`);
    alert(res.data.message);
    await window.location.reload();
  };

  const handleLeaveCommu = async () => {
    await axios.delete(`/communities/member/${id}`);
    alert("Leaved");
    await window.location.reload();
  };

  return (
    <div className="hidden md:block">
      {bannerUrl ? (
        <div
          className="h-32 bg-cover "
          style={{
            backgroundImage: `url(${bannerUrl})`,
          }}
        ></div>
      ) : (
        <div className=" h-32 bg-cover bg-blue-500"></div>
      )}

      <div className="grid grid-cols-7 gap-6 shadow bg-white">
        <div className="col-start-2 col-span-3">
          <div className="mx-6 relative  flex">
            <div className="h-20 w-20 rounded-full overflow-hidden relative -top-3 border-4 border-white bg-white shadow">
              {profileUrl ? (
                <img className="h-20 w-20 rounded-full" src={profileUrl} alt="" />
              ) : (
                <img
                  src="https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_5ey8lzmwmxp21.png?width=256&s=5a85d5c682f40e3cf317c560b219585ac0afce78"
                  alt=""
                />
              )}
            </div>
            <div className="pt-2 pl-4">
              <h1 className="text-gray-700 text-3xl">{name}</h1>
              <h5 className="text-gray-500">{name}</h5>
            </div>
            {community.userId === user?.id ? null : !Members ? null : Members.find(item => item.userId === user?.id) ? (
              <div>
                <button
                  onClick={handleLeaveCommu}
                  type="button"
                  className=" max-w-sm text-sm mt-4 ml-11  border-2 border-blue-500 rounded-full font-semibold  text-blue-500 px-2  transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white  "
                >
                  Leave
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={handleJoinCommu}
                  type="button"
                  className=" max-w-sm text-sm mt-4 ml-11  border-2 border-blue-500 rounded-full font-semibold  text-blue-500 px-2  transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white  "
                >
                  Join
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityHeader;
