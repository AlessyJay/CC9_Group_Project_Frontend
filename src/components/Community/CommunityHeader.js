import React from "react";

function CommunityHeader({ community }) {
  const { profileUrl } = community;
  return (
    <div className="hidden md:block">
      <div
        className="h-48 bg-cover "
        style={{
          backgroundImage:
            'url("https://styles.redditmedia.com/t5_2s580/styles/bannerBackgroundImage_5l1s0k4rvbr71.png?width=4000&s=d1776868bd2be4fd46ee281efaa103cac7b6c2af")',
        }}
      ></div>
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
              <h1 className="text-gray-300 text-3xl">webdev: reddit for web developers</h1>
              <h5 className="text-gray-500">r/webdev</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityHeader;
