import React from 'react';

function DropdownCard({ item }) {
  const { name, members } = item;
  return (
    <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
      <div class="w-6 flex flex-col items-center mx-3">
        <div class="flex relative w-7 h-7 bg-orange-500 justify-center items-center m-1 mr-3  mt-1 rounded-full">
          <img
            class="rounded-full"
            alt="A"
            src="https://randomuser.me/api/portraits/men/62.jpg"
          />
        </div>
      </div>
      <div class="w-full items-start flex flex-col">
        <div class="text-sm truncate w-full normal-case font-semibold -mt-1 text-black">
          {name}
        </div>
        <div class="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
          {members} members
        </div>
      </div>
    </div>
  );
}

export default DropdownCard;
