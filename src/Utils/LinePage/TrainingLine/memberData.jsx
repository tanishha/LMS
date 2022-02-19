import React from "react";
import { Table } from "antd";
import "../../../Components/Line/line.component.css";

function MemberData() {
  const columns = [
    {
      title: "Name",
      dataIndex: "memberName",
      key: "memberName",
    },
    {
      title: "Division",
      dataIndex: "division",
      key: "division",
    },

    {
      title: "Project (Curr)",
      key: "project",
      dataIndex: "project",
    },
    {
      title: "Mentor (Curr)",
      dataIndex: "mentor",
      key: "mentor",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];

  const [lines] = React.useState([
    {
      memberName: "Abhishek Joshi",
      project: "Line Portal",
      mentor: "Raj Dongol ",
      division: "Intern",
      role: "Developer",
    },
    {
      memberName: "Tanisha Chaudhary",
      project: "Robling",
      mentor: "Diwakar Serala ",
      division: "Trainee",
      role: "Developer",
    },
  ]);
  return (
    <>
      <Table
        className="table-striped-rows"
        columns={columns}
        dataSource={lines}
        pagination={false}
      />
    </>
  );
}

export default MemberData;
