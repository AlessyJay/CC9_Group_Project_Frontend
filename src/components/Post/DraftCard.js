import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { timeDiff } from '../../services/timeDifferent';
function DraftCard({ item }) {
  const { title, target, updatedAt } = item;
  const textTime = timeDiff(updatedAt);
  return (
    <div className="flex justift-between w-full hover:bg-gray-200 p-1 border-b">
      <div className="px-2 flex items-center ml-2 cursor-pointer">
        <FaRegEdit />
      </div>
      <div className="w-full ml-2">
        <p className="font-semibold text-sm">{title}</p>
        <div className="flex text-xs">
          <p className="font-medium">{`${target} :`}</p>
          <p>{`Draft saved ${textTime} agos`}</p>
        </div>
      </div>
      <div className=" flex items-center px-4 cursor-pointer">
        <FaRegTrashAlt />
      </div>
    </div>
  );
}

export default DraftCard;
