import React from "react";
import { useLocation } from "react-router-dom";
import "./line.component.css";
import { Typography } from "antd";
import EditLine from "../../Utils/LinePage/TrainingLine/editLine";
import LineDivision from "../../Utils/LinePage/TrainingLine/division";
import Members from "../../Utils/LinePage/TrainingLine/members";
const { Title } = Typography;

function TrainingComponent(props) {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Title style={{ flex: 1, color: "#219f94", textAlign: "center" }}>
          Training Line Profile
        </Title>
        <EditLine />
      </div>
      <div style={{ flex: 1, fontSize: "24px", marginLeft: "10px" }}>
        <div className="displayTag">
          <h1 className="displayTagData">Line Code:</h1>
          {location.state.data.lineCode}
        </div>
        <div className="displayTag">
          <h1 className="displayTagData">Line Name:</h1>
          {location.state.data.lineName}
        </div>
        <div className="displayTag">
          <h1 className="displayTagData">Line Head:</h1>
          {location.state.data.lineHead}
        </div>
        <div className="displayTag">
          <h1 className="displayTagData">Deputy Line Head:</h1>
          {location.state.data.deputyLineHead}
        </div>
        <div className="displayTag">
          <h1 className="displayTagData">Line Manager:</h1>
          {location.state.data.lineManager}
        </div>
      </div>
      <br />
      <hr />
      <br />
      <LineDivision />
      <br />
      <hr />
      <br />
      <Members />
    </>
  );
}

export default TrainingComponent;
