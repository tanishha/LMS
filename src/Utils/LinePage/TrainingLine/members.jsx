import React from "react";
// import { Typography } from "antd";
import SearchComponent from "../search";
import AddMember from "./addMember";
import MemberData from "./memberData";
function Members() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <AddMember />
        <div style={{ marginLeft: "auto" }}>
          <SearchComponent title="Search Member" />
        </div>
      </div>
      {/* <Typography style={{ fontSize: "25px", color: "#219f94" }}>
        This line has no members
      </Typography> */}
      <MemberData />
      <br />
      <hr />
      <br />
    </>
  );
}

export default Members;
