import React, { useState } from 'react';
import {
  HiOutlinePhotograph,
  HiOutlineTrash,
  HiOutlineScissors,
  HiOutlineUpload,
  HiOutlineX,
} from 'react-icons/hi';
import axios from '../../config/axios';
function EditRule({ item, deleteRuleList, setRuleLists }) {
  console.log('Each Item', item);
  const [isEditting, setIsEditting] = useState(false);
  const [editRule, setEditRule] = useState(item.ruleDetail);
  const handleChangeEditRuleInput = (e) => {
    setEditRule(e.target.value);
  };

  const handleClickUpdateRule = async (e) => {
    try {
      console.log(item.id);
      //   const res = await axios.put(``, { editRule });
    } catch (err) {
      console.dir(err);
    }
  };

  const handleStartEdit = () => {};
  return (
    <div className="flex justify-between gap-4">
      <input
        maxLength="100"
        type="text"
        name="editRule"
        value={editRule}
        onChange={handleChangeEditRuleInput}
        placeholder="edit rule"
        className="outline-none pl-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full h-9  sm:text-sm border border-gray-300 rounded-md"
      />
      <div className="flex justify-around items-center">
        {!isEditting && (
          <div
            onClick={() => {
              setIsEditting(true);
            }}
          >
            <HiOutlineScissors size="24px" />
          </div>
        )}
        {isEditting && (
          <>
            <div onClick={handleClickUpdateRule}>
              <HiOutlineUpload size="24px" />
            </div>
            <div onClick={() => deleteRuleList(item.id)}>
              <HiOutlineTrash size="20px" />
            </div>
            <div onClick={() => setIsEditting(false)}>
              <HiOutlineX size="24px" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default EditRule;
