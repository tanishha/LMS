import React from "react";
// import { Typography } from "antd";
import AddDivision from "./addDivision";
import DivisionData from "./divisionData";

function LineDivision() {
  return (
    <>
      <AddDivision />
      {/* <Typography style={{fontSize: "25px", color: "#219f94"}}>This line has no division</Typography> */}
      <DivisionData />
    </>
  );
}

export default LineDivision;
