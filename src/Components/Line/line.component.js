import React from "react";
import { Typography, Table, Tag } from "antd";

import "./line.component.css";
import AddLine from "../../Utils/LinePage/addLine";
import SearchComponent from "../../Utils/LinePage/search";
import { Link } from "react-router-dom";

const { Title } = Typography;

function LineComponent() {
  const columns = [
    {
      title: "Line Name",
      dataIndex: "lineName",
      key: "lineName",
      render: (text, record) => (
        <Link
          to={{ pathname: `/training/${record.lineCode}` }}
          state={{ data: record }}
        >
          {text}
        </Link>
      ),
    },
    {
      title: "Line Head",
      dataIndex: "lineHead",
      key: "lineHead",
    },

    {
      title: "Line Division",
      key: "linedivision",
      dataIndex: "linedivision",
      render: (linedivision) => (
        <>
          {linedivision.map((tag) => {
            return <Tag key={tag}>{tag.toUpperCase()}</Tag>;
          })}
        </>
      ),
    },
    {
      title: "Effective Date",
      dataIndex: "startDate",
      key: "startDate",
      sorter: (a, b) => new Date(a.startDate) - new Date(b.startDate),
    },
    {
      title: "Total Members",
      dataIndex: "lineMember",
      key: "lineMember",
      render: (lineMember) => <> {lineMember.length}</>,
    },
  ];

  const [lines] = React.useState([
    {
      lineName: "LMS",
      lineHead: "Pawan Shrestha",
      lineManager: "Yugesh Shrestha",
      deputyLineHead: "Ramesh Kunwar",
      startDate: "2078-10-11",
      linedivision: ["PoolA", "PoolB"],
      lineCode: "001",
      endDate: "2078-12-18",
      lineMember: ["Ram Sharma", "Hari Prasad Dahal"],
    },
    {
      lineName: "Robling",
      lineHead: "Mrigesh Raj Shrestha",
      lineManager: "Rojina Tuladhar",
      deputyLineHead: "Ramesh Kunwar",
      startDate: "2078-10-10",
      linedivision: ["Interns", "Trainees"],
      lineCode: "001",
      endDate: "2078-12-18",
      lineMember: ["Shyam Poudel", "Biren Shakya"],
    },
  ]);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Title style={{ flex: 1, color: "#219f94", textAlign: "center" }}>
          Lines 2078-79
        </Title>
        <AddLine />
      </div>
      <SearchComponent title="Search Line Name" />
      <Table
        className="table-striped-rows"
        columns={columns}
        dataSource={lines}
        pagination={false}
      />
    </>
  );
}

export default LineComponent;
