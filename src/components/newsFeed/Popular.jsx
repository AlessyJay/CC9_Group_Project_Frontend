import React from "react";
// Import button
import Button from "@mui/material/Button";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";

function Popular() {
  const buttonStyle = {
    height: "3rem",
    padding: "2%",
    width: "fit-content",
    margin: "1%",
  };
  return (
    <>
      <div className="popularBar">
        <Button startIcon={<LocalFireDepartmentIcon />} style={buttonStyle}>
          Hot topics
        </Button>
        <Button startIcon={<AccessTimeIcon />} style={buttonStyle}>
          Recent
        </Button>
        <Button startIcon={<PublicIcon />} style={buttonStyle}>
          Everywhere
        </Button>
      </div>
    </>
  );
}

export default Popular;
