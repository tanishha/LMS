import React from "react";
import { Table, Tag } from "antd";
import "../../../Components/Line/line.component.css";

function DivisionData() {
  const columns = [
    {
      title: "Name",
      dataIndex: "divisionName",
      key: "divisionName",
    },
    {
      title: "Coordinators",
      dataIndex: "coordinators",
      key: "coordinators",
      render: (coordinators) => (
        <>
          {coordinators.map((tag) => {
            return <Tag key={tag}>{tag.toUpperCase()}</Tag>;
          })}
        </>
      ),
    },

    {
      title: "Members",
      key: "members",
      dataIndex: "members",
    },
  ];

  const [lines] = React.useState([
    {
      divisionName: "Intern",
      coordinators: ["Arun Basnet", "Bidhata Bhandari"],
      members: 20,
    },
    {
      divisionName: "Trainee",
      coordinators: ["Ruchi Shrestha", "Sanjana Shrestha"],
      members: 11,
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

export default DivisionData;
