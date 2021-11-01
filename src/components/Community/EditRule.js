import React, { useState } from "react";
import { HiOutlineTrash, HiOutlineUpload, HiOutlineX } from "react-icons/hi";
import axios from "../../config/axios";
function EditRule({ item, deleteRuleList, setIsEditting, editRuleList }) {
  const [editRule, setEditRule] = useState(item.ruleDetail);
  const [error, setError] = useState("");
  const [resText, setResText] = useState("");

  const handleChangeEditRuleInput = (e) => {
    setError("");
    if (e.target.value === "") {
      setError("Rule is required");
    }
    setEditRule(e.target.value);
  };

  const handleClickUpdateRule = async (e) => {
    try {
      if (editRule === "") {
        setError("Rule is required");
      } else {
        editRuleList(item.id, editRule);

        const res = await axios.put(`communities/rules/${item.id}`, {
          rule: editRule,
        });
        setResText(res.data.message);
        setIsEditting(false);
      }
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <>
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
          <div onClick={handleClickUpdateRule}>
            <HiOutlineUpload size="24px" />
          </div>
          <div onClick={() => deleteRuleList(item.id)}>
            <HiOutlineTrash size="20px" />
          </div>
          <div onClick={() => setIsEditting(false)}>
            <HiOutlineX size="24px" />
          </div>
        </div>
      </div>
      {resText && (
        <p className="text-green-600 italic text-xs pl-2 my-1 ">{resText}</p>
      )}
      {error && (
        <p className="text-red-600 italic text-xs pl-2 my-1">{error}</p>
      )}
    </>
  );
}

export default EditRule;
