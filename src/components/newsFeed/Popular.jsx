import React from "react";
// Import button
import Button from "@mui/material/Button";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Popular({ handleSortPostsbyDate }) {
  const buttonStyle = {
    height: "3rem",
    padding: "2%",
    width: "fit-content",
    margin: "1%",
  };

  return (
    <>
      <div className="flex w-96 md:w-full bg-white shadow rounded-md my-3">
        <Button startIcon={<LocalFireDepartmentIcon />} style={buttonStyle}>
          Hot
        </Button>

        <Button onClick={handleSortPostsbyDate} startIcon={<AccessTimeIcon />} style={buttonStyle}>
          New
        </Button>
      </div>
    </>
  );
}

export default Popular;
