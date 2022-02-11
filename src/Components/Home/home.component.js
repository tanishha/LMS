import React from "react";
import "./home.component.css";
import {
  Image,
  Button,
  Card,
  Collapse,
  Space,
  Typography,
  Divider,
} from "antd";
import { MailFilled, SkypeFilled } from "@ant-design/icons";
const { Panel } = Collapse;

function HomeComponent() {
  const [description] = React.useState({
    name: "John Doe",
    designation: "Intern",
    email: "john.doe@lisnepal.com.np",
    skypeid: "live:.qwe.ui11q03d345",
    projectName: "LMS",
    role: "Developer",
  });
  const [flag, setFlag] = React.useState(true);
  let content = flag ? "THIS IS EVENT" : "trjnfsk";
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
            style={{ borderRadius: "50%", zindex: 1000 }}
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
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "#219f94",
          }}
          onClick={() => setFlag(true)}
        >
          {" "}
          Upcoming Events
        </Typography.Link>
        <Typography.Link
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "#219f94",
          }}
          onClick={() => setFlag(false)}
        >
          {" "}
          Upcoming Trainings
        </Typography.Link>
      </Space>
      <div> {content}</div>
      <br />
      <hr />
      <br />
    </>
  );
}

export default HomeComponent;
