import React from "react";
import "./container.component.css";

import { Layout } from "antd";
const { Header } = Layout;

function TopHeader() {
  return (
    <>
      <Header
        className="site-layout-sub-header-background"
        style={{ position: "fixed", height: "68.5px",zindex:1000 }}
      >
        {" "}
        <div className="heading">LIS Nepal Line Management System</div>
      </Header>
    </>
  );
}

export default TopHeader;
