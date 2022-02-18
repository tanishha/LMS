import React from "react";
import "./container.component.css";
import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";

const { Sider } = Layout;
const { Item } = Menu;

function SidebarComponent() {
  return (
    <>
      <Sider
        style={{
          height: "100vh",
          position: "fixed",
          background: "#F9F9F9",
        }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {}}
        onCollapse={(collapsed, type) => {}}
      >
        <div className="logo" />
        <Menu className="sidebar" mode="inline" defaultSelectedKeys={["1"]}>
         
            {" "}
            <Item key="1" className="customclass">
            <Link to="/"> Home </Link>
            </Item>
         
          <Item key="2" className="customclass">
          <Link to="/line"> Line Details</Link>
          </Item>
          <Item key="3" className="customclass">
            Line Events
          </Item>
          <Item key="4" className="customclass">
            Projects
          </Item>
          <Item key="5" className="customclass">
            Skill Matrix
          </Item>
          <Item key="6" className="customclass">
            Register User
          </Item>
          <Item key="7" className="customclass">
            Sign Out
          </Item>
        </Menu>
      </Sider>
    </>
  );
}

export default SidebarComponent;
