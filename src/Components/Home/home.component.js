import React from "react";
import "./home.component.css";
import {
  Image,
  Button,
  Carousel,
  Collapse,
  Space,
  Typography,
  Divider,
} from "antd";
import { MailFilled, SkypeFilled } from "@ant-design/icons";
import { Skeleton, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Panel } = Collapse;

function HomeComponent() {
  const [description] = React.useState({
    name: "Name Surname",
    designation: "Intern",
    email: "john.doe@lisnepal.com.np",
    skypeid: "live:.qwe.ui11q03d345",
    projectName: "LMS",
    role: "Developer",
  });
  const [event] = React.useState(
    {
      name: "Picnic",
      date: "2078-11-15",
      location: "Godawari",
    },
    {
      name: "Lunch",
      date: "2078-11-21",
      location: "Canteen",
    }
  );
  const [trainings] = React.useState(
    {
      name: "Picnic",
      date: "2078-11-15",
      location: "Godawari",
    },
    {
      name: "Lunch",
      date: "2078-11-21",
      location: "Canteen",
    }
  );
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#219F94",
    marginTop: "20px",
  };
  const [flag, setFlag] = React.useState(true);
  let content = flag ? "Events" : "TRAININGS";
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1, fontSize: "24px", marginLeft: "10px" }}>
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              marginTop: "30px",
              marginBottom: "-17px",
              color: "#219f94",
            }}
          >
            {description.name}
          </h1>
          <h1
            style={{ fontWeight: "bold", fontSize: "30px", color: "#323232" }}
          >
            {" "}
            {description.designation}
          </h1>
          <h1 style={{ fontSize: "20px", color: "#323232" }}>
            <MailFilled style={{ marginRight: "10px", color: "#219f94" }} />{" "}
            {description.email}
          </h1>
          <h1 style={{ fontSize: "20px", color: "#323232" }}>
            <SkypeFilled style={{ marginRight: "10px", color: "#219f94" }} />{" "}
            {description.skypeid}
          </h1>
        </div>
        <div>
          {" "}
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            style={{ borderRadius: "50%" }}
          />
          <br />
          <Button
            style={{
              marginTop: "20px",
              marginLeft: "45px",
              borderRadius: "15px",
              borderColor: "#219f94",
              color: "#219f94",
            }}
          >
            View Profile
          </Button>
        </div>
      </div>
      <Collapse ghost>
        <Panel
          header="Current Project"
          style={{ fontWeight: "bold", fontSize: "20px" }}
        >
          <p style={{ fontSize: "20px", color: "#219f94", marginLeft: "25px" }}>
            Project: {description.projectName}
          </p>
          <p style={{ fontSize: "20px", color: "#219f94", marginLeft: "25px" }}>
            Role: {description.role}
          </p>
        </Panel>
      </Collapse>
      <br />
      <hr />
      <br />
      <Space split={<Divider type="vertical" style={{ fontSize: "50px" }} />}>
        <Typography.Link
          style={
            flag
              ? {
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#219f94",
                  textDecoration: "underline",
                }
              : { fontSize: "30px", fontWeight: "bold", color: "#219f94" }
          }
          onClick={() => setFlag(true)}
        >
          {" "}
          Upcoming Events
        </Typography.Link>
        <Typography.Link
          style={
            flag
              ? { fontSize: "30px", fontWeight: "bold", color: "#219f94" }
              : {
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#219f94",
                  textDecoration: "underline",
                }
          }
          onClick={() => setFlag(false)}
        >
          {" "}
          Upcoming Trainings
        </Typography.Link>
      </Space>
      <Carousel effect="fade">
        <div>
          <h3 style={contentStyle}>
            {" "}
            <div
              className="site-card-border-less-wrapper"
              style={contentStyle}
            ></div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>{content}</h3>
        </div>
      </Carousel>
      <br />
      <hr />
      <br />
    </>
  );
}

export default HomeComponent;
