import React, { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import EditRule from "./EditRule";

function RuleComponent({ item, idx, deleteRuleList, editRuleList }) {
  const [isEditting, setIsEditting] = useState(false);
  return (
    <li className="grid grid-cols-4 gap-4 my-1">
      <div className="col-span-6">
        {!isEditting ? (
          <div className="flex justify-between">
            <div className="flex ml-3 text-sm font-semibold w-full">{`${
              idx + 1
            }. ${item.ruleDetail}`}</div>
            <div
              onClick={() => {
                setIsEditting(true);
              }}
            >
              <HiPencilAlt size="24px" />
            </div>
          </div>
        ) : (
          <EditRule
            item={item}
            deleteRuleList={deleteRuleList}
            setIsEditting={setIsEditting}
            editRuleList={editRuleList}
          />
        )}
      </div>
    </li>
  );
}

export default RuleComponent;
