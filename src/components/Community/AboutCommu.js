import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { formatDate } from "../../services/timeDifferent";

function AboutCommu({ name, id, community }) {
  const { user } = useContext(UserContext);

  const history = useHistory();
  const { amount, descriptions, userId, createdAt } = community;
  // console.log(community);

  const handleClickEditCommunity = () => {
    history.push(`/community/${name}/${id}/edit`);
  };

  return (
    <div className=" bg-white max-w-xs mt-3 shadow rounded-sm hidden md:block">
      <div className="shadow rounded-sm w-full h-12 bg-cover text-xl font-semibold flex p-3 text-white bg-red-700 rounded-b-none">
        About Community
      </div>
      <div className="h-56 px-4 py-6 rounded-sm rounded-t-none">
        {descriptions ? (
          <p className="text-sm h-4/6 mb-5">{descriptions}</p>
        ) : (
          <p className="text-sm h-4/6 font-light mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        )}
        <h3>Member</h3>
        <h3>{amount}</h3>
      </div>
      <div className="mx-8 border-b-2 text-sm border-gray-100"></div>
      <div className=" cursor-pointer flex justify-center mx-2 pb-2">
        {user?.id === userId ? (
          <div
            onClick={handleClickEditCommunity}
            className="flex justify-center max-w-sm border-2 border-blue-500 rounded-full font-semibold  text-white px-6 w-full  transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 bg-blue-500 "
          >
            Edit Community
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="mx-8 py-4 text-sm">
        {`Created ${createdAt ? formatDate(new Date(createdAt)) : null}`}
      </div>
    </div>
  );
}

export default AboutCommu;
