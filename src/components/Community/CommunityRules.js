import React from "react";

function CommunityRules({ rules }) {
  console.log(rules);
  return (
    <div className=" bg-white max-w-xs mt-3 shadow rounded-sm hidden md:block text-sm">
      <div className=" rounded-sm w-full h-12 bg-cover text-xl font-semibold flex p-3 ml-6 rounded-b-none">
        Community Rules
      </div>

      {rules.map((item, index) => (
        <>
          <div key={index} className="flex px-4  ">
            <span className="mr-4">{`${index + 1}.`}</span>
            <p className="mb-2">{item.ruleDetail}</p>
          </div>
          <div className="mx-4 my-2 border-b-2 text-sm border-gray-300"></div>
        </>
      ))}
      <div className="mx-8 py-4 text-sm"></div>
    </div>
  );
}

export default CommunityRules;
