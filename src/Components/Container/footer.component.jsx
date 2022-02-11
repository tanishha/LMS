import React from "react";
import "./container.component.css";

import { Layout } from "antd";
const { Footer } = Layout;

function FooterComponent() {
  return (
    <>
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
    </>
  );
}

export default FooterComponent;
