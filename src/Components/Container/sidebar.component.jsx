import React from "react";
import "./container.component.css";

import { Layout, Menu } from "antd";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

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
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu className="sidebar" mode="inline" defaultSelectedKeys={["1"]}>
          <Item key="1" className="customclass">
            Home
          </Item>
          <SubMenu key="sub1" title="LineDetails" className="customclass">
            <Item key="2" className="customclassItem">
              Training Line Profile
            </Item>
          </SubMenu>
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
