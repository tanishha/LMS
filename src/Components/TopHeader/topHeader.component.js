import React from "react";
import "./topHeader.component.css";
import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;

function TopHeader() {
  return (
    <>
      <Layout>
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
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ position: "fixed", height: "68.5px" }}
          >
            {" "}
            <div className="heading">LIS Nepal Line Management System</div>
          </Header>
          <Content style={{ margin: "90px 16px 0px 220px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 600 }}
            >
              CONTENTS{" "}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              color: "#219F94",
              fontWeight: 900,
              fontSize: "large",
              marginLeft: "200px",
            }}
          >
            © 2007-2022 All Rights Reserved. Yomari.{" "}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default TopHeader;
